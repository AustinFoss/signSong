import Libp2p from 'libp2p'
import Websockets from 'libp2p-websockets'
import WebRTCStar from 'libp2p-webrtc-star'
// import TCP from 'libp2p-tcp'
import { NOISE } from 'libp2p-noise'
import Secio from 'libp2p-secio'
import Mplex from 'libp2p-mplex'
import Boostrap from 'libp2p-bootstrap'
import Gossipsub from 'libp2p-gossipsub';
import Floodsub from 'libp2p-floodsub';
import pipe from 'it-pipe'
import lp from 'it-length-prefixed'
import Event from 'events';

const subscribedChannel = new Event();
const handler = (msg) => {
    subscribedChannel.emit('received', msg);
}

export default {
    state: () => ({
        p2pNode: null, // LibP2P node instance
        channelPeers: new Map(),
        channels: [],
        openChannel: null,
        messageBoard: [],
        bootstrapList:  [
            '/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN',
            '/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb',
            '/dnsaddr/bootstrap.libp2p.io/p2p/QmZa1sAxajnQjVM8WjWXoMbmPd7NsWhfKsPkErzpm9wGkp',
            '/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa',
            '/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt'
        ],
    }),
    mutations: {
        // Set LibP2P node
        syncNode: (state, _libp2p) => {
            // Null must be entered first before updating the new instance or Vue will not react
            state.p2pNode = null;
            state.p2pNode = _libp2p;
        },
        channels: (state) => {
            state.channels = state.p2pNode.pubsub.getTopics();  
        },
        changeChannel: (state, channel) => {
            state.openChannel = null;
            state.openChannel = channel;
            if(channel == null) {
                state.channelPeers = null;
                state.channelPeers = new Map();
            }
        },
        channelPeers: (state, peer) => {
            state.channelPeers.set(peer, {
                nickName: "Test",
                stream: null
            });
            let channelPeers = state.channelPeers;
            state.channelPeers = null;
            state.channelPeers = channelPeers
        },
        peerStream: (state, args) => {
            let peer = state.channelPeers.get(args.peer);
            peer.stream = args.stream;
            state.channelPeers.set(args.peer, peer);
            let channelPeers = state.channelPeers;
            state.channelPeers = null;
            state.channelPeers = channelPeers
        },
        messageBoard: (state, message) => {
            state.messageBoard.push(message);            
        }
    },
    actions: {
        // Inits LibP2P Node instance
        initLibP2P: async ({ commit, state }) => {
            const libp2p = await Libp2p.create({
                addresses: {
                    listen: [
                        '/ip4/0.0.0.0/tcp/0',
                        '/ip4/0.0.0.0/tcp/0/ws',  
                        // '/ip4/192.168.7.105/tcp/9090/wss/p2p-webrtc-star',                  
                        '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star',
                        '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star'
                    ]
                },
                modules: {
                    transport: [Websockets, WebRTCStar],
                    connEncryption: [NOISE, Secio],
                    streamMuxer: [Mplex],
                    peerDiscovery: [Boostrap],
                    pubsub: Floodsub
                },
                config: {
                    peerDiscovery: {
                        bootstrap: {
                            enabled: true,
                            list: state.bootstrapList
                        }
                    }
                }
            })
            // Update Node
            commit('syncNode', libp2p)

            // Listen for new peers
            libp2p.on('peer:discovery', (peerId) => {
                commit('syncNode', libp2p)
                // console.log(`Found peer ${peerId.toB58String()}`)
            })
    
            // Listen for new connections to peers
            libp2p.connectionManager.on('peer:connect', (connection) => {
                commit('syncNode', libp2p)
                // console.log(`Connected to ${connection.remotePeer.toB58String()}`)
            })
    
            // Listen for peers disconnecting
            libp2p.connectionManager.on('peer:disconnect', (connection) => {
                commit('syncNode', libp2p)           
                // console.log(`Disconnected from ${connection.remotePeer.toB58String()}`)
            })

            await libp2p.start()
        },
        subToChannel: async ({state, commit}, channel) => {
            await state.p2pNode.pubsub.subscribe(channel);
            commit('channels');
        },
        unsubscribe: async ({state, dispatch, commit}, channel) => {
            if(channel == state.openChannel) {
                dispatch('changeChannel', null);
            }
            await state.p2pNode.pubsub.unsubscribe(channel);
            commit('channels');
        },
        changeChannel: async ({state, commit}, channel) => {
            if(state.openChannel != null) {
                await state.p2pNode.pubsub.removeListener(state.openChannel, handler);
            }
            commit('changeChannel', channel);
            if(state.openChannel != null) {
                await state.p2pNode.pubsub.on(state.openChannel, handler);
            }
        },
        checkChannel: ({state, commit}) => {
            const checkCheck = setInterval(() => {

                state.p2pNode.pubsub.publish(state.openChannel, Uint8Array.from('Nick Name'));
                state.channelPeers.forEach(async (value, key) => {
                    if(value.stream != null) {
                        pipe(
                            value.stream,
                            lp.decode(),
                            async function (source) {
                                let line = '';
                                for await (const msg of source) {
                                    line = line + msg.toString();
                                }
                                if(line != ''){
                                    commit('messageBoard', {line: line, from: value.nickName});
                                }
                            }
                        );
                    }
                });

                if(state.openChannel == null) {
                    clearInterval(checkCheck);
                }

            }, 1000)
        },
        dialPeer: async ({state, commit}, peer) => {
            let dialerID = state.p2pNode.peerId.toB58String();
            const { stream } = await state.p2pNode.dialProtocol(
                '/p2p/'+ peer, // Peer to dial
                '/'+dialerID // Dial protocol
            ); 
            commit('peerStream', {peer: peer, stream:stream});
        },
        handlePeer: ({state, commit}, peer) => {
            state.p2pNode.handle('/'+peer, async ({ stream }) => {
                commit('peerStream', {peer: peer, stream:stream});
            })     
        },
        subscribedChannel: ({state, commit, dispatch}) => {
            subscribedChannel.on('received', (msg) => {
                if(state.channelPeers.has(msg.from) == false) {
                    // TODO: insert a second if 
                    // checking for a signature of the priv.Key associated with the channel name(pub.Key)
                    commit('channelPeers', msg.from);
                    dispatch('handlePeer', msg.from);
                } else if(state.channelPeers.get(msg.from).stream == null) {
                    dispatch('dialPeer', msg.from);
                }
            })
        },
        textChannel: ({state, commit}, chat) => {
            let msg = chat;
            console.log(chat);
            state.channelPeers.forEach(async (value, key) => {
                let dialerID = state.p2pNode.peerId.toB58String();
                const { stream } = await state.p2pNode.dialProtocol(
                    '/p2p/'+ key, // Peer to dial
                    '/'+dialerID // Dial protocol
                ); 
                pipe(
                    chat,
                    lp.encode(),
                    stream
                )
                commit('messageBoard', {line: chat, from: dialerID})
            });
        }
    }
}