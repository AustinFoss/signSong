export default {
    state: () => ({
        stream: null,
        audioDevices: [],
        audioDevice: {},
        videoDevices: [],
        videoDevice: {}
    }),
    mutations: {
        devices: (state, devices) => {
            state.audioDevices = devices.audio;
            state.videoDevices = devices.video;
            console.log(state.audioDevices);
            console.log(state.videoDevices);
        },
        setAudio: (state, device) => {
            state.audioDevice = device;
        },
        setVideo: (state, device) => {
            state.videoDevice = device;
        },
        stream: (state, stream) => {
            if(state.stream == null) {
                state.stream = stream;
                document.getElementById('feed').srcObject = state.stream;
            } else {
                state.stream.getTracks().forEach(track => {
                    track.stop();
                });
                state.stream = null;
            }
        }
    },
    actions: {
        getMediaDevices: ({commit}) => {
            navigator.mediaDevices.enumerateDevices()
            .then(devices => {
                let audio = [];
                let video = [];
                for(let d = 0; d < devices.length; d ++) {
                    let device = devices[d];
                    if(device.kind == "audioinput") {
                        audio.push(device)
                    } else if(device.kind == "videoinput") {
                        video.push(device)
                    }
                }
                commit('devices', {audio, video})
            })
        },
        setAudio: ({commit}, device) => {
            commit('setAudio', device)
        },
        setVideo: ({commit}, device) => {
            commit('setVideo', device)
        },
        feedStream: ({state, commit}) => {
            if(state.stream == null) {
                navigator.mediaDevices.getUserMedia({ audio: true, video: true })
                .then(stream => {
                    commit('stream', stream);
                })
                .catch(function(err) {
                    console.log(err);
                });
            } else {
                commit('stream', state.stream);
            }

        }
    }
}