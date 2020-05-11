<template lang="html">
  <div>
    <KeyArtistsListItem v-for="(artist, index) in artists"
                    :key="index"
                    :artist="artist">
    </KeyArtistsListItem>

  </div>

</template>

<script>
import KeyArtistsListItem from './KeyArtistsListItem.vue'
import KeyArtistsServices from '@/services/KeyArtistsServices.js';
export default {
  name: 'KeyArtistsList',
  data(){
    return{
      artists: []
    }
  },
  mounted(){
    KeyArtistsServices.getArtists()
    .then(artists => this.artists = artists)
  },
  components: {
    KeyArtistsListItem
  }
}
</script>

<style lang="css" scoped>
</style>
