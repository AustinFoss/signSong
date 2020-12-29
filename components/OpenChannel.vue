<template>
    <v-row>
        <v-col cols="12" sm="5" md="4">
            <v-card>
                <v-card-title class="headline">
                    Open Channel
                </v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item
                            v-for="(channelPeer, index) in channelPeers" :key="index"
                        >
                            {{channelPeer[1].nickName}}
                        </v-list-item>
                    </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-text-field v-model="chat" label="Send this..."/>
                    <v-btn @click='textChannel(chat)'>Text</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" sm="7" md="5">
            <v-card>
                <v-list>
                    <v-list-item v-for="(message, index) in messageBoard" :key="index">
                        {{message.line}}
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
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
            'messageBoard'
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