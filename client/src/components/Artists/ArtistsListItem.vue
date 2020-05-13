<template lang="html">

  <div class="container">
    <img class="image":src="artwork.imageURL" style="width:100%">
      <div class="middle">
        <div class="text">
          <h5> {{artwork.title}}</h5>
          <h6>{{artwork.artist}}</h6>
          <h7>{{artwork.medium}}</h7>
          <h6>{{artwork.year}}</h6>
          <p>{{artwork.description}}</p>


          <b-button variant="success"
                    v-if="!artwork.favourite"
                    @click="updateFavourite"
                    data-toggle="tooltip" data-placement="top" title="Add to Favourites">
          <b-icon icon="heart-fill"
                  variant="danger"
                  class="rounded-circle"></b-icon></b-button>

          <b-button v-if="artwork.favourite"
                  @click="updateFavourite">
          <b-iconstack font-scale="1.5">
              <b-icon stacked icon="heart-fill"
                      variant="danger"
                      scale="0.75"></b-icon>
              <b-icon stacked icon="slash-square"
                      variant="dark"></b-icon>
            </b-iconstack>
            </b-button>



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
    updateFavourite(){
      this.artwork.favourite = this.artwork.favourite ? false : true
      const { _id, ...updatedArtwork } = this.artwork
      ArtworksServices.updateArtwork(_id, updatedArtwork)
      .then(favourite => eventBus.$emit('favourite-changed', favourite))
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  position: relative;
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial;
  margin-bottom: 20px;
  padding: 5px;
}

.image {
  border-style: solid;
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
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

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background: black;
  color: white;
  font-size: 14px;
  padding: 16px 32px;
  width: 400px;
}
</style>
