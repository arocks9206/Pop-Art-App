<template lang="html">
  <div>
  <AndyWarholArtListItem v-for="(artwork, index) in artWorks"
                         :artwork="artwork"
                         :index="index"
                         class="list">
    </AndyWarholArtListItem>
  </div>
</template>

<script>

import AndyWarholArtListItem from './AndyWarholArtListItem.vue'

export default {
  name: 'AndyWarholArtList',
  props: ['artWorks'],
  components: {
    AndyWarholArtListItem
  }
}
</script>

<style lang="css" scoped>
img {
  border-style: solid;
}

.list {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
