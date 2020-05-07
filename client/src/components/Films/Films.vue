<template lang="html">
  <FilmsList></FilmsList>
</template>

<script>

import {eventBus} from '@/main.js';
import FilmsList from '@/components/FilmsList.vue'

export default {
  name: 'Films',
  components: {
    FilmsList
  }

}
</script>

<style lang="css" scoped>
</style>
