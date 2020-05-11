<template lang="html">
  <div>

    <div class="artist-name">
        <h2>{{artist.artistName}}</h2>
    </div>

    <div class="artist-photo">
      <img :src="artist.artistImageURL" width="250px">
    </div>

    <div class="artist-bio">
      <h3>{{artist.artistBio}}</h3>
    </div>

    <div class="art-images">
      <div v-for="(artWork, index) in artist.otherArtWorks"
           :artWork="artWork"
           :index="index">
          <img :src="artWork.imageURL" width="200px">
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: 'ArtistListItem',
  props: ['artist']
  // methods: {
  //
  // }
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
