<template lang="html">
  <div>
            <ArtistsListItem v-for="(artwork, index) in artworks"
                         :artwork="artwork"
                         :index="index"
                         class="list">
            </ArtistsListItem>
  </div>
</template>

<script>

import ArtistsListItem from './ArtistsListItem.vue'

export default {
  name: 'ArtistsList',
  props: ['artworks'],
  components: {
    ArtistsListItem
  }
}
</script>

<style lang="css" scoped>

</style>
