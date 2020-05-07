<template lang="html">
  <div>
  <h2>FILMS THAT INFLUENCED POP ART</h2>
  <FilmsList></FilmsList>
</div>
</template>

<script>

import {eventBus} from '@/main.js';
import FilmsList from './FilmsList.vue'

export default {
  name: 'Films',
  components: {
    FilmsList
  }

}
</script>

<style lang="css" scoped>
</style>
