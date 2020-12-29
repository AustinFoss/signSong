<template>

  <v-container>
  
    <v-row v-if="p2pNode != null" justify="center" align="center">
      <v-col cols="12" sm="5" md="3">
        <!-- <v-row>
          <v-col><MyFeed /></v-col>
        </v-row> -->
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>Channel Manager</v-card-title>
              <v-card-text>
                Peer Connections: {{p2pNode.connectionManager.size}}
              </v-card-text>
              <v-text-field v-model="chatChannel" label="Channel Name"/>
              <v-btn
                color="primary"
                @click="subToChannel(chatChannel)"
              >
                Subscribe
              </v-btn>
              <v-list>
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
                  >
                    Open
                  </v-btn>
                  <v-btn v-else @click='changeChannel(null)'>Close</v-btn>
                  <v-btn @click="unsubscribe(channel)" color="red">Forget</v-btn>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="7" md="9">
          <OpenChannel v-if="openChannel != null" />
      </v-col>
    </v-row >
    
    <v-row v-else justify="center" align="center">
      <v-col cols="15" sm="15" md="12">
        <v-card>
          <v-card-text>
            Loading P2P Network Node
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

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
