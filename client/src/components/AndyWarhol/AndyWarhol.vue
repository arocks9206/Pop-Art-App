<template lang="html">

  <section>
      <div class="intro-container">
        <div>
          <andywarhol-header title="ANDY WARHOL"/>

          <div class="intro-image">
            <div>
              <img src="../../assets/warhol.jpg" width="600px">
            </div>
          </div>

          <h3>{{artistInfo.artistBio}}</h3>
        </div>
      </div>

      <AndyWarholArtList class="list" :artWorks="artWorks">
      </AndyWarholArtList>

      <div class="film-content">
        <div>
          <h4>The influence of Warhol’s filmmaking can be found in both the Hollywood mainstream film, which took from his work a “gritty street-life realism, sexual explicitness, and on-the-edge performances,” and in experimental film, which “reworked his long-take, fixed-camera aesthetic into what came to be known as structural film.” </h4>

          <div class="film-image">
            <img :src="films.images[0].URL" width="300px">
          </div>

        </div>
      </div>

      <div class="music">
        <div >
          <h4>{{musicInfluence.description}}</h4>
        </div>
      </div>

      <div class="music-image">
        <div>
          <img src="../../assets/Velvet_Underground_and_Nico.jpg" width="600px">
        </div>
      </div>

      <router-link to="/roylicht"><button>Next To Roy Lichtenstein</button></router-link>
  </section>

</template>

<script>

import AndyWarholServices from '@/services/AndyWarholServices.js';
import AndyWarholArtList from './AndyWarholArtList.vue';
import AndyWarholArtListItem from './AndyWarholArtListItem.vue';
  import AndyWarholHeader from "../headers/AndyWarholHeader.vue";
import WarholMusicList from "./WarholMusicList.vue";
import WarholMusicListItem from "./WarholMusicListItem.vue";

export default {
  name: 'AndyWarhol',
  components: {
    AndyWarholArtList,
    AndyWarholArtListItem,
    "andywarhol-header": AndyWarholHeader,
    WarholMusicList,
    WarholMusicListItem
  },
  data(){
    return {
      films: {},
      artWorks: {},
      artistInfo: {},
      musicInfluence: {}
    }
  },
  mounted(){
    AndyWarholServices.getData()
    .then(data => {
      this.artistInfo = data[0];
      this.artWorks = data[1].artWorks;
      this.films = data[2].films;
      this.musicInfluence = data[3].musicInfluence;
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

.intro-image {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

img {
  height: auto;
  width: 350px;
  border-style: solid;
}

.intro-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}

.intro-container h3 {
  margin: 100px;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.film-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
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
  margin-bottom: 20px;
  padding: 5px;
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
