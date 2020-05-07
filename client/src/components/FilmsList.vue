<template lang="html">
  <div>
    <FilmsListItem v-for="(film, index) in films"
                    :key="index",
                    :film="film">
    </FilmsListItem>

  </div>

</template>

<script>

import FilmsListItem from '@/components/FilmListItem.vue'
import FilmsService from '@/services/FilmsService.js'

export default {
  name: 'FilmsList',
  data(){
    return{
      films: []
    }
  },
  mounted(){
    FilmsService.getFilms()
  },
  components: {
    FilmsListItem
  }
}
</script>

<style lang="css" scoped>
</style>
