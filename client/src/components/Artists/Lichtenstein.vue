<template lang="html">
  <section>
      <div class="intro-container">
        <div>
          <ArtistsHeader title="ROY LITCHTENSTEIN"/>

          <div class="intro-image">
            <img :src="bio.artistImageURL"/>
          </div>

          <h2>{{bio.shortBio}}</h2>
        </div>
      </div>

      <ArtistsList class="list" :artworks="artworks"></ArtistsList>

      <div class="long-bio">
        <h2>{{bio.careerBio}}</h2>
      </div>

    </div>

    <router-link to="/quiz/5eba4ab1ace7ca5832b0b465"><button>POP QUIZ</button></router-link>

  </section>

</template>

<script>


import ArtistsServices from '@/services/ArtistsServices';
import ArtworksServices from '@/services/ArtworksServices';
import ArtistsHeader from '../headers/ArtistsHeader.vue'
import ArtistsList from './ArtistsList.vue';
import ArtistsListItem from './ArtistsListItem.vue'


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
      }
  }
</script>

<style lang="css" scoped>
section {
  background-image: url('../../assets/background_2.jpg');
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

.list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.intro-image {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 20px;
}

img {
  height: auto;
  width: 350px;
  border-style: solid;
}

.intro-container {
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}

.intro-container h2 {
  margin: 50px;
  font-size: 30px;
  text-align: justify;
  border-style: solid;
  background-color: #F0CD13;
  opacity: 95%;
  margin-bottom: 20px;
  padding: 5px;
}

.list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.long-bio{
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}

.long-bio h2{
  font-size: 25px;
  text-align: justify;
  border-style: solid;
  background-color: #1998CB;
  opacity: 95%;
  margin-bottom: 20px;
  padding: 5px;
}
</style>
