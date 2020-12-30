<template>
    <div>
        
        <video style="max-width: 100%;" id="feed" autoplay muted/>
        
        <v-card-actions>
            <v-select
                v-on:change = "setAudio"
                label = 'Audio'
                :items = 'audioDevices'
                item-text = 'label'
            />
            <v-spacer />
            <v-select
                v-on:change = "setVideo"
                label = 'Video'
                :items = 'videoDevices'
                item-text = 'label'
            />
            <v-btn 
            color='primary' 
            outlined
            small
            @click='feedStream()'
            >
                Stream
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data: () => {
        return {
        }
    },
    methods: {
        ...mapActions('media', [
            'setAudio',
            'setVideo',
            'feedStream'
        ]),
        
    },
    computed: {
        ...mapState('media', [
            'audioDevices',
            'audioDevice',
            'videoDevices',
            'videoDevice'
        ])
    }
}
</script>