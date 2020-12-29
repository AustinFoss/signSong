<template>
    <v-card>
        <v-card-title>Channel Manager</v-card-title>
        <v-card-text>
            Peer Connections: {{p2pNode.connectionManager.size}}
        </v-card-text>
        <v-card-actions>
            <v-text-field v-model="chatChannel" label="Channel Name"/>
            <v-btn
                outlined
                small
                color="primary"
                @click="subToChannel(chatChannel); chatChannel = '';"
            >
                Subscribe
            </v-btn>
        </v-card-actions>
        <v-list dense>
            <v-list-item 
                v-for="(channel, index) in channels" 
                :key="index"
            >
                {{channel}}
                <v-spacer />
                <v-btn 
                    v-if="openChannel != channel"
                    @click='changeChannel(channel)' 
                    color="primary"
                    outlined
                    small
                >
                    Open
                </v-btn>
                <v-btn v-else @click='changeChannel(null)' outlined small>Close</v-btn>
                <v-btn @click="unsubscribe(channel)" color="red" outlined small>Forget</v-btn>
            </v-list-item>
        </v-list>
    </v-card>

</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      chatChannel: ""
    };
  },
  computed: {
    ...mapState('libp2p', [
      'p2pNode',
      'channels',
      'openChannel'
    ])
  },
  methods: {
    ...mapActions('libp2p', [
      'subToChannel',
      'unsubscribe',
      'changeChannel',
      'subscribedChannel'
    ])
  },
  created () {
    this.subscribedChannel();
  }
}
</script>