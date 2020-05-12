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
.list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.list img {
  border-style: solid;
  justify-content: space-between;
  width: 300px;
  height: inherit;
}
</style>
