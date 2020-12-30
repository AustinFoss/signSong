<template>
    <v-card>
        <v-card-title>
            {{openChannel}}: Nick Name
        </v-card-title>
        <v-row>
            <v-col cols="12" sm="3" md="3">
                <v-subheader>Peers</v-subheader>
                <v-list dense>
                    <v-list-item
                        v-for="(channelPeer, index) in channelPeers" :key="index"
                    >
                        {{channelPeer[1].nickName}}
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="12" sm="9" md="9">
                <div v-if="video == false">
                    <v-btn
                        color='primary'
                        outlined
                        small
                        @click='videoFeed()'
                    >
                        Chat
                    </v-btn>
                    <v-list dense>
                        <v-list-item v-for="(message, index) in messageBoard" :key="index">
                            {{message.line}}
                        </v-list-item>
                    </v-list>
                    <v-card-actions>
                        <v-text-field v-model="chat" label="Send this..."/>
                        <v-btn @click='textChannel(chat); chat = "";' outlined small>Text</v-btn>
                    </v-card-actions>                
                </div>
                <div v-else>
                    <v-btn
                        color='red'
                        outlined
                        small
                        @click='videoFeed()'
                    >
                        Video
                    </v-btn>
                    <MyFeed />
                </div>
            </v-col>
        </v-row>    
    </v-card>
</template>

<<script>
import {mapState, mapActions} from 'vuex';

export default {
  data() {
    return {
      chat: ""
    };
  },    
    computed: {
        ...mapState('libp2p', [
            'channelPeers',
            'messageBoard',
            'openChannel',
            'video'
        ]),
    },
    methods: {
        ...mapActions('libp2p', [
            'checkChannel',
            'textChannel',
            'watchTexts',
            'videoFeed'
        ])
    },
    created() {
        this.checkChannel();
    }
}
</script>