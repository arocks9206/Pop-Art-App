<template lang="html">
  <section>
      <div class="intro-container">
        <div>
          <andywarhol-header title="ANDY WARHOL"/>

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

          <div class="film-caption">
            <h5>{{films.title}}, {{films.year}}</h5>
          </div>

        </div>
      </div>

      <router-link to="/roylicht"><button>Next To Roy Lichtenstein</button></router-link>

</div>
</div> -->





<router-link to="/quiz/part-1">TEST YOUR KNOWLEDGE I</router-link>


</section>
</template>

<script>

import AndyWarholServices from '@/services/AndyWarholServices.js';
import AndyWarholArtList from './AndyWarholArtList.vue';
import AndyWarholArtListItem from './AndyWarholArtListItem.vue';
import AndyWarholHeader from "../headers/AndyWarholHeader.vue";

export default {
  name: 'AndyWarhol',
  components: {
    AndyWarholArtList,
    AndyWarholArtListItem,
    "andywarhol-header": AndyWarholHeader
  },
  data(){
    return {
      films: {},
      artWorks: {},
      artistInfo: {}
    }
  },
  mounted(){
    AndyWarholServices.getData()
    .then(data => {
      this.artistInfo = data[0];
      this.artWorks = data[1].artWorks;
      this.films = data[2].films;
    })

  }
}
</script>

<style lang="css" scoped>

section {
  background-image: url('/assets/background_2.jpg');
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
}

.film-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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

.film-caption {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Century Gothic;
}

</style>
