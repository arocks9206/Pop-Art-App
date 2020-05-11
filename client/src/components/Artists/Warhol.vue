<template lang="html">
  <section>
    <div class="intro-container">
  <div>
    <ArtistsHeader :title="bio.name"/>

    <img :src="bio.artistImageURL" width="600px" />


  <h3>{{bio.shortBio}}</h3>



</div>
</div>


<ArtistsList class="list" :artworks="artworks" ></ArtistsList>





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

<div class="music">
  <div >
    <h4>{{music.caption}}</h4>
  </div>
</div>

<div class="music-image">
  <div>
    <img :src="music.imageURL">
  </div>
</div>

<router-link to="/artists/lichtenstein"><button>Next to Roy Lichtenstein</button></router-link>

  </section>

</template>

<script>


import ArtistsServices from '@/services/ArtistsServices';
import ArtworksServices from '@/services/ArtworksServices';
import ArtistsHeader from '../headers/ArtistsHeader.vue'
import ArtistsList from './ArtistsList.vue';
import ArtistsListItem from './ArtistsListItem.vue'


export default {
  name: 'Warhol',
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
      music: null
    }
  },
    mounted(){
      ArtistsServices.getData()
      .then(artistData => this.bio = artistData.find(a => a.name === 'Andy Warhol'))

      ArtworksServices.getData()
      .then(artworkData => {
          this.artworks = artworkData.filter(x => x.artist === 'Andy Warhol' && x.category === 'painting')
          this.film = artworkData.find(x => x.artist === 'Andy Warhol' && x.category === 'film')
          this.music = artworkData.find(x => x.artist === 'Andy Warhol' && x.category === 'album cover')
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
  align-items: center;
  justify-content: space-around;
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

.music {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}
.music div {
  width: 900px;
}
.music h4 {
  font-size: 25px;
  text-align: justify;
  border-style: solid;
  background-color: #F2A28D;
  opacity: 95%;
  margin-bottom: 20px;
  padding: 5px;
}
.music-image {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
}

img {
  height: auto;
  width: 350px;
  border-style: solid;
}


</style>
