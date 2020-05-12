<template lang="html">
  <div class="My Favourites">

    <h3>My Favourites</h3>

      <div id="filterInput">
        <h3>Filter Favourites by Artist</h3>
        <select v-model="filterArtist">
          <option disabled value="">Select Artist</option>
          <option v-for="artist in favouriteArtists">{{artist}}</option>
        </select>
      </div>

    <ArtistsList v-if="filteredFavourites"
                 :artworks="filteredFavourites"></ArtistsList>

      <div else>No favourites for this artist</div>

  </div>

</template>

<script>

import ArtworksServices from '@/services/ArtworksServices';
import ArtistsServices from '@/services/ArtistsServices';
import ArtistsList from '../Artists/ArtistsList.vue';
import ArtistsListItem from '../Artists/ArtistsListItem.vue'
import {eventBus} from '@/main.js'

export default {
  name: 'Favourites',
  data(){
    return {
      favourites: [],
      favouriteArtists: [],
      filterArtist: ""
    }
  },
  components: {
    ArtistsList,
    ArtistsListItem
  },
  mounted(){
    ArtworksServices.getData()
    .then(data => {
      this.favourites = data.filter(a => a.favourite === true)
      this.favouriteArtists = [...new Set(data.map(a => a.artist))]

      eventBus.$on('favourite-added', (favourite) => {
        let index = this.favourites.findIndex(fav => fav._id === favourite._id)
        this.favourites.splice(index, 1)
      })
    })
  },
  computed: {
    filteredFavourites(){
      if (this.filterArtist === ""){
        return this.favourites
      } else {
        return this.favourites.filter(a => a.artist === this.filterArtist)
      }
    }
  }

}
</script>

<style lang="css" scoped>
</style>
