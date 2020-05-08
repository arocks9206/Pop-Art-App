<template lang="html">
  <div class="box">

        <div class="albums">
    <AlbumsListItem v-for="(album, index) in albums"
                    :key="index"
                    :album="album">
    </AlbumsListItem>
        </div>
    </div>
  </div>

</template>

<script>

import AlbumsListItem from './AlbumsListItem.vue'
import AlbumsServices from '@/services/AlbumsServices.js'

export default {
  name: 'AlbumsList',
  data(){
    return{
      albums: []
    }
  },
  mounted(){
    AlbumsServices.getAlbums()
    .then(albums => this.albums = albums)
  },
  components: {
    AlbumsListItem
  }
}
</script>

<style lang="css" scoped>
.box{
    box-sizing: border-box;
    width: 800px;
}

.grid {
  display: inline-block;
  width: 40%;
}
.albums {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
