<template lang="html">
  <AlbumsList></AlbumsList>
</template>

<script>

import {eventBus} from '@/main.js';
import AlbumsList from './AlbumsList.vue'

export default {
  name: 'Albums',
  components: {
    AlbumsList
  }

}
</script>

<style lang="css" scoped>

</style>
