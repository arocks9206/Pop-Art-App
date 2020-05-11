<template lang="html">
<div>

    <div class="artist-name">
        <h2>{{artist.name}}</h2>
    </div>

    <div class="artist-photo">
      <img :src="artist.artistImageURL" width="250px">
    </div>

    <div class="artist-bio">
      <h3>{{artist.shortBio}}</h3>
    </div>

    <div class="art-images">
      <div v-for="(artwork, index) in artworks"
           :artwork="artwork"
           :index="index">
          <img :src="artwork.imageURL" width="200px">
      </div>
    </div>



</div>

</template>

<script>

import ArtworksServices from '@/services/ArtworksServices';

export default {
  name: 'KeyArtistsListItem',
  props: ['artist'],
  data(){
    return {
    artworks: []
    }
  },
  mounted() {
    ArtworksServices.getData()
    .then(artworkData => this.artworks = this.artworks = artworkData.filter(x => x.artist === this.artist.name))

  }
}
</script>

<style lang="css" scoped>
.artist-name{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 5px;
  font-family: Century Gothic;
}

.artist-name h2{
  font-size: 25px;
  text-align: justify;
  margin-bottom: 20px;
  padding: 5px;
  border-style: solid;
  background-color: #1998CB;
  opacity: 95%;
}

.artist-bio{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}

.artist-bio h3{
  font-size: 25px;
  text-align: justify;
  border-style: solid;
  background-color: #F2A28D;
  opacity: 95%;
  margin-bottom: 20px;
  padding: 5px;
}

.artist-photo{
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
}

img {
  height: auto;
  width: 350px;
  border-style: solid;
}

.art-images{
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  margin-bottom: 20px;
}


</style>
