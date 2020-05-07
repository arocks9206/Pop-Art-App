<template lang="html">
  <ArtistsList></ArtistsList>
</template>

<script>

import {eventBus} from '@/main.js';
import ArtistsList from './ArtistsList.vue'

export default {
  name: 'Artists',
  components: {
    ArtistsList
  }

}
</script>

<style lang="css" scoped>
</style>
