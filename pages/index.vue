<template>

  <v-container>
  
    <v-row v-if="p2pNode != null && p2pNode.pubsub.started == true" justify="center" align="center">
      
      <v-col cols="12" sm="4" md="4">
        <ConnectionManager />
      </v-col>
      
      <v-col cols="12" sm="8" md="8">
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
import { mapState,  } from 'vuex';
export default {
  computed: {
    ...mapState('libp2p', [
      'p2pNode',
      'openChannel'
    ])
  }
}
</script>
