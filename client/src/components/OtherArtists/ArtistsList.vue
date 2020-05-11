<template lang="html">
  <div>
    <ArtistsListItem v-for="(artist, index) in artists"
                    :key="index"
                    :artist="artist">
    </ArtistsListItem>

  </div>

</template>

<script>

import ArtistsListItem from './ArtistsListItem.vue'
import ArtistsService from '@/services/ArtistsService.js'

export default {
  name: 'ArtistsList',
  data(){
    return{
      artists: []
    }
  },
  mounted(){
    ArtistsServices.getData(){
      .then(artists => this.artists = artists.filter(x => {
        (x.name === 'Robert Rauschenberg') ||
        (x.name === 'Richard Hamilton') ||
        (x.name === 'Peter Blake')
      }))
    }
    ArtistsService.getArtists()
    .then(artists => this.artists = artists)
  },
  components: {
    ArtistsListItem
  }
}
</script>

<style lang="css" scoped>
</style>
