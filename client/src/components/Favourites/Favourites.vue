<template lang="html">
  <section>
  <div class="My Favourites">
        <IntroHeader title="FAVOURITE ARTWORKS"/>

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
    <router-link to="/"><button>Home</button></router-link>
</section>
</template>

<script>

import ArtworksServices from '@/services/ArtworksServices';
import ArtistsServices from '@/services/ArtistsServices';
import ArtistsList from '../Artists/ArtistsList.vue';
import ArtistsListItem from '../Artists/ArtistsListItem.vue'
import {eventBus} from '@/main.js';
import IntroHeader from '../headers/IntroHeader.vue'

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
    IntroHeader
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

button {
 box-shadow:inset 0px 1px 0px 0px #f7c5c0;
 background:linear-gradient(to bottom, #fc8d83 5%, #e4685d 100%);
 background-color:#fc8d83;
 border-radius:6px;
 border:1px solid #d83526;
 display:inline-block;
 cursor:pointer;
 color:#ffffff;
 font-family:Arial;
 font-size:15px;
 font-weight:bold;
 padding:6px 24px;
 text-decoration:none;
 text-shadow:0px 1px 0px #b23e35;
}

button:hover {
  background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);
  background-color:#e4685d;
}

button:active {
  position:relative;
  top:1px;
}

h3 {
  font-size: 25px;
  font-family: Arial;
  text-align: center;
  margin-bottom: 20px;
  padding: 5px;
  border-style: solid;
  background-color: #1998CB;
  opacity: 95%;
}
</style>
