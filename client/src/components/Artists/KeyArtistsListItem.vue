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


    <div class="container"
          v-for="(artwork, index) in artworks"
         :artwork="artwork"
         :index="index">
      <img class="image":src="artwork.imageURL" style="width:80%">
        <div class="middle">
          <div class="text">
              <h5> {{artwork.title}}</h5>
              <h6>{{artwork.artist}}</h6>
              <h7>{{artwork.medium}}</h7>
              <h6>{{artwork.year}}</h6>
              <p>{{artwork.description}}</p>
              <b-button variant="success"
                        v-if="!artwork.favourite"
                        @click="updateFavourite(artwork)"
                        data-toggle="tooltip" data-placement="top" title="Add to Favourites">
              <b-icon icon="heart-fill"
                      variant="danger"
                      class="rounded-circle"></b-icon></b-button>

              <b-button v-if="artwork.favourite"
                      @click="updateFavourite(artwork)">
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



</div>

</template>

<script>

import ArtworksServices from '@/services/ArtworksServices';
import {eventBus} from '@/main.js'

export default {
  name: 'KeyArtistsListItem',
  props: ['artist'],
  data(){
    return {
    artworks: []
    }
  },
  methods: {
    updateFavourite(artwork){
      artwork.favourite = artwork.favourite ? false : true;
      const { _id, ...updatedArtwork } = artwork;
      ArtworksServices.updateArtwork(_id, updatedArtwork)
      .then(favourite => eventBus.$on('favouite-changed', favourite))
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
  font-family: Arial;
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
  font-family: Arial;
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

.container {
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial;
  margin-bottom: 20px;
  padding: 5px;
  justify-content: space-around;
}

.image {
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
  font-size: 16px;
  padding: 16px 32px;
  width: 500px;
}

</style>
