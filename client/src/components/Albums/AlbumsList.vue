<template lang="html">
  <div>
    <AlbumsListItem v-for="(album, index) in albums"
                    :key="index"
                    :album="album">
    </AlbumsListItem>

  </div>

</template>

<script>

import AlbumsListItem from './AlbumsListItem.vue'
import AlbumsService from '@/services/AlbumsService.js'

export default {
  name: 'AlbumsList',
  data(){
    return{
      albums: []
    }
  },
  mounted(){
    AlbumsService.getAlbums()
    .then(albums => this.albums = albums)
  },
  components: {
    AlbumsListItem
  }
}
</script>

<style lang="css" scoped>
</style>
