<template lang="html">
  <div>
    <ArtistsListItem v-for="(artist, index) in artists"
                    :key="index",
                    :artist="artist">
    </ArtistsListItem>

  </div>

</template>

<script>

import ArtistsListItem from '@/components/ArtistsListItem.vue'
import ArtistsService from '@/services/ArtistsService.js'

export default {
  name: 'ArtistsList',
  data(){
    return {
      artists: []
    }
  },
  mounted(){
    ArtistsService.getArtists()
  },
  components: {
    ArtistsListItem
  }
}
</script>

<style lang="css" scoped>
</style>
