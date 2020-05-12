<template lang="html">
  <section>

    <div class="intro-container">

        <div class="page-intro">
          <keyartist-header title="KEY ARTISTS TO POP ART MOVEMENT"/>
          <h2>
            While Andy Warhol and Roy Lichtenstein are among the most popular and recognisable artist of the Pop Art Movement, there are many others that contributed to the vast amount of artwork associated with this movement. Among the other key artist of this movement are Robert Rauschenberg, Richard Hamiliton, and Peter Blake who are known for their significant contributions as well as being considered some of the earliest artists to inform the Pop Art Movement's style and subject matters.
          </h2>
        </div>

      </div>


      <KeyArtistsList class="list"></KeyArtistsList>

  </section>
</template>

<script>
import {eventBus} from '@/main.js';
import KeyArtistHeader from '../headers/KeyArtistHeader.vue'
import KeyArtistsList from './KeyArtistsList.vue'
import KeyArtistsServices from '@/services/KeyArtistsServices.js';
import KeyArtistsListItem from './KeyArtistsListItem.vue'

export default {
  name: 'KeyArtists',
  components: {
    KeyArtistsList,
    KeyArtistsListItem,
    "keyartist-header": KeyArtistHeader
  }

}
</script>

<style lang="css" scoped>
section {
  background-image: url('../../assets/background_1.jpg');
  background-size: cover;
  background-attachment: scroll;
}

.intro-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}

.intro-container h2 {
  margin: 100px;
  font-size: 30px;
  text-align: justify;
  border-style: solid;
  background-color: #F0CD13;
  opacity: 95%;
  margin-bottom: 20px;
  padding: 5px;
}
</style>
