<template lang="html">
  <div>
    <h2>{{artist.artistName}}</h2>
    <h3>{{artist.artistBio}}</h3>
    <div v-for="(artWork, index) in artist.otherArtWorks"
         :artWork="artWork"
         :index="index">
        <img :src="artWork.imageURL" width="300px">
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
</style>
