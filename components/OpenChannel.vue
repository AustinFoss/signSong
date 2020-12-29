<template>
    <v-card>
        <v-card-title>
            Channel: {{openChannel}}
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
                <v-subheader>Chat</v-subheader>
                <v-list dense>
                    <v-list-item v-for="(message, index) in messageBoard" :key="index">
                        {{message.line}}
                    </v-list-item>
                </v-list>
                <v-card-actions>
                    <v-text-field v-model="chat" label="Send this..."/>
                    <v-btn @click='textChannel(chat); chat = "";' outlined small>Text</v-btn>
                </v-card-actions>
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
            'openChannel'
        ]),
    },
    methods: {
        ...mapActions('libp2p', [
            'checkChannel',
            'textChannel',
            'watchTexts'
        ])
    },
    created() {
        this.checkChannel();
    }
}
</script>