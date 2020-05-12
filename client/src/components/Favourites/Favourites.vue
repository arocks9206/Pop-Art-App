<template lang="html">
  <div class="My Favourites">

    <h3>Your Favourites</h3>

      <div id="filterInput">
        <h3>Filter Favourites by Artist</h3>
        <input type="text" v-model="filterAmount"/>
      </div>

    <ArtistsList :artworks="favourites"></ArtistsList>

  </div>

</template>

<script>

import ArtworksServices from '@/services/ArtworksServices';
import ArtistsList from '../Artists/ArtistsList.vue';
import ArtistsListItem from '../Artists/ArtistsListItem.vue'

export default {
  name: 'Favourites',
  data(){
    return {
      favourites: [],
      filterArtist: ''
    }
  },
  components: {
    ArtistsList,
    ArtistsListItem
  },
  mounted(){
    ArtworksServices.getData()
    .then(data => this.favourites = data.filter(a => a.favourite === true))
  }

}
</script>

<style lang="css" scoped>
</style>
