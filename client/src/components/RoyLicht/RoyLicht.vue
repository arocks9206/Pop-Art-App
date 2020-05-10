<template lang="html">
  <section>
    <div class="intro-container">
  <div>
  <h1>ROY LICHTENSTEIN</h1>

  <h3>{{artistInfo.artistBio}}</h3>
</div>
</div>


<RoyLichtArtList :paintings="artworks"></RoyLichtArtList>

<RoyLichtSculptureList :sculptures="sculptures"></RoyLichtSculptureList>

<router-link to="/artists">Other Key Artists</router-link>

  </section>

</template>

<script>


import ArtistsServices from '@/services/ArtistsServices';
import ArtworksServices from '@/services/ArtworksServices';


// import RoyLichtServices from '@/services/RoyLichtServices'
import RoyLichtArtList from './RoyLichtArtList.vue';
import RoyLichtArtListItem from './RoyLichtArtListItem';
import RoyLichtSculptureList from './RoyLichtSculptureList';
import RoyLichtSculptureListItem from './RoyLichtSculptureListItem'

export default {
  name: 'RoyLicht',
  components: {
    RoyLichtArtList,
    RoyLichtArtListItem,
    RoyLichtSculptureList,
    RoyLichtSculptureListItem
  },
  data(){
    return {
      artworks: null,
      bio: null
    }
  },
    mounted(){
      ArtistsServices.getData()
      .then(artistData => this.bio = artistData.filter(a => a.name === this.$route.params.artistName))

      ArtworksServices.getData()
      .then(artworkData => {
        this.artworks = artworkData.filter(x => x.artist === this.$route.params.artistName)
      })



      // RoyLichtServices.getData()
      // .then(data => {
      //   this.artistInfo = data[0];
      //   this.paintings = data[1].paintings;
      //   this.sculptures = data[2].sculptures;


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
