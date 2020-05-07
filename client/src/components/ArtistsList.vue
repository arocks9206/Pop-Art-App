<template lang="html">
  <div>
    <ArtistListItem v-for="(artist, index) in artists"
                    :key="index",
                    :artist="artist">
    </ArtistListItem>

  </div>

</template>

<script>
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
    ArtistListItem
  }
}
</script>

<style lang="css" scoped>
</style>
