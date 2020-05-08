<template lang="html">
  <section>
    <div class="intro-container">
  <div>
  <h1>ANDY WARHOL</h1>

  <h3>{{artistInfo.artistBio}}</h3>
</div>
</div>



<AndyWarholArtList class="list" :artWorks="artWorks">
</AndyWarholArtList>

<div class="film-content">
<div>
  <p>The influence of Warhol’s filmmaking can be found in both the Hollywood mainstream film, which took from his work a “gritty street-life realism, sexual explicitness, and on-the-edge performances,” and in experimental film, which “reworked his long-take, fixed-camera aesthetic into what came to be known as structural film.” </p>


  <img :src="films.images[0].URL" width="300px">
  <h3>{{films.title}}, {{films.year}}</h3>


</div>
</div>





<router-link to="/roylicht">Next to Roy Lichtenstein</router-link>


</section>
</template>

<script>

import AndyWarholServices from '@/services/AndyWarholServices.js';
import AndyWarholArtList from './AndyWarholArtList.vue'
import AndyWarholArtListItem from './AndyWarholArtListItem.vue'

export default {
  name: 'AndyWarhol',
  components: {
    AndyWarholArtList,
    AndyWarholArtListItem
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
.intro-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-container h1 {
  text-align: center;
  font-size: 40px;
}

.intro-container h3 {
  margin: 100px;
  font-size: 40px;
  text-align: justify;
}

.list {
  display: flex;
  flex-direction: row;
}

.film-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.film-content div {
  width: 900px;
}

.film-content p {
  font-size: 30px;
  text-align: justify;
}

</style>
