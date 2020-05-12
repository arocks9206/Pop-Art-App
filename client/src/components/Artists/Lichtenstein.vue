<template lang="html">
  <section>
    <div class="intro-container">
  <div>
    <ArtistsHeader :title="bio.name"/>


  <h3>{{bio.shortBio}}</h3>


</div>
</div>


<ArtistsList :artworks="artworks" ></ArtistsList>







<div v-if="film" class="film-content">
  <div>
    <h4>{{film.caption}}</h4>

    <div class="film-image">
  <iframe
  width="560" height="315"
  aspect="16by9"
  :src="film.filmURL"
></iframe>
  </div>
</div>
</div>

<router-link to="/quiz/5eb8fc14db52cbcdbc1f69c0"><button>TEST YOUR KNOWLEDGE I</button></router-link>

  </section>

</template>

<script>


import ArtistsServices from '@/services/ArtistsServices';
import ArtworksServices from '@/services/ArtworksServices';
import ArtistsHeader from '../headers/ArtistsHeader.vue'
import ArtistsList from './ArtistsList.vue';
import ArtistsListItem from './ArtistsListItem.vue'
import {eventBus} from '@/main.js'


export default {
  name: 'Lichtenstein',
  components: {
    ArtistsList,
    ArtistsListItem,
    ArtistsHeader
  },
  data(){
    return {
      artworks: null,
      bio: null,
      film: null,
    }
  },
    mounted(){
      ArtistsServices.getData()
      .then(artistData => this.bio = artistData.find(a => a.name === 'Roy Lichtenstein'))

      ArtworksServices.getData()
      .then(artworkData => {
          this.artworks = artworkData.filter(x => x.artist === 'Roy Lichtenstein' && x.category === 'painting')
          this.film = artworkData.find(x => x.artist === 'Roy Lichtenstein' && x.category === 'film')
            })

      eventBus.$on('favourites-added', (favourite) => {
        let index = this.artworks.findIndex(artwork => artwork._id === favourite.id)
        this.artworks.splice(index, 1, favourite)
            })


      }
  }



</script>

<style lang="css" scoped>
section {
  background-image: url('../../assets/background_2.jpg');
  background-size: cover;
  background-attachment: scroll;
}

img {
  border-style: solid;
}

.intro-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Century Gothic;
}

.intro-container h3 {
  margin: 100px;
  font-size: 30px;
  text-align: justify;
  border-style: solid;
  background-color: #F0CD13;
  opacity: 95%;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 900px;
}



.film-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 100px;
  font-family: Century Gothic;
}

.film-content div {
  width: 900px;
}

.film-content h4 {
  font-size: 25px;
  text-align: justify;
  border-style: solid;
  background-color: #1998CB;
  opacity: 95%;
}

.film-image{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Century Gothic;
}

</style>
