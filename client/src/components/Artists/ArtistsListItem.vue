<template lang="html">

  <div>

    <div>
      <div class="container">
        <img :src="artwork.imageURL" class="image" style="width:100%">
          <div class="middle">
            <div class="text">
              <h1>{{artwork.title}}</h1>
              <h3>{{artwork.artist}}</h3>
              <button v-if="!artwork.favourite" @click="addFavourite">Add to Favourites</button>
            </div>
          </div>
      </div>
    </div>


</div>

</template>

<script>
import {eventBus} from '@/main.js'
import ArtworksServices from '@/services/ArtworksServices.js'

export default {


  name: 'ArtistsListItem',
  props: ['artwork'],
  data(){
    return {
      favourites: []
    }
  },
  methods: {
    addFavourite(){
      const updatedArtwork = { favourite: true };
      ArtworksServices.updateArtwork(this.artwork._id, updatedArtwork)
      .then(favourite => eventBus.$emit('favourite-added', favourite))
    }
  }
}
</script>

<style lang="css" scoped>


.image-one {
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
}

.image {
  opacity: 1;
  display: block;
  width: 50%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

img {
  border-style: solid;
}

.container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.text {
  background: black;
  color: white;
  font-size: 20px;
  padding: 16px 32px;
  width: 500px;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

</style>
