<template lang="html">
  <section>
  <div class="My Favourites">
        <ArtistsHeader title="FAVOURITE ARTWORKS"/>

      <div id="filterInput">
        <h3>Filter Favourites by Artist</h3>
        <select v-model="filterArtist">
          <option disabled value="">Select Artist</option>
          <option v-for="artist in favouriteArtists">{{artist}}</option>
        </select>
      </div>

    <ArtistsList v-show="filteredFavourites"
                 :artworks="filteredFavourites"></ArtistsList>

      <div v-show="filteredFavourites.length===0">No favourites for this artist</div>

  </div>

</section>
</template>

<script>

import ArtworksServices from '@/services/ArtworksServices';
import ArtistsServices from '@/services/ArtistsServices';
import ArtistsList from '../Artists/ArtistsList.vue';
import ArtistsListItem from '../Artists/ArtistsListItem.vue'
import {eventBus} from '@/main.js';
import ArtistsHeader from '../headers/ArtistsHeader.vue'

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
    ArtistsListItem,
    ArtistsHeader
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

section {
  background-image: url('../../assets/background_1.jpg');
  background-size: cover;
  background-attachment: scroll;
}
</style>
