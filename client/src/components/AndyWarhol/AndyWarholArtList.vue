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
  width: 300px;
}

.list {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
