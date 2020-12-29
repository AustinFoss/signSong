<template>
  <v-app dark>

    <v-main>

      <v-container>
        <nuxt />
      </v-container>

    </v-main>

    <v-footer app>
      <span>{{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('media', [
      'getMediaDevices',
    ]),
    ...mapActions('libp2p', [
      'initLibP2P',
    ]),
    
  },
  created() {
    this.getMediaDevices();
    this.initLibP2P();
  }
}
</script>
