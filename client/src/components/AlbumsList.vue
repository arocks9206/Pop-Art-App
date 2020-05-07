<template lang="html">
  <div>
    <AlbumsListItem v-for="(albums, index) in albums"
                    :key="index",
                    :album="album">
    </AlbumsListItem>

  </div>

</template>

<script>

import AlbumsListItem from '@/components/AlbumsListItem'
import AlbumsService from "@/services/AlbumsService.js"

export default {
  name: 'AlbumsList',
  data(){
    return {
      albums: []
    }
  },
  mounted(){
    AlbumsService.getAlbums()
  },
  components: {
    AlbumsListItem
  }
}
</script>

<style lang="css" scoped>
</style>
