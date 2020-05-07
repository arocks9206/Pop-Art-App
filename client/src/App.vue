<template lang="html">
<section>
  <h1>SHORT HISTORY OF POP ART</h1>
<p>Pop Art is an art movement that emerged in the 1950s and
  flourished until the mid-1970s in America and Britain, that
  drew inspiration from popular and commercial culture. Some
  of the movement’s most identifiable artists include Andy Warhol,
   Roy Lichtenstein, and Robert Rauschenberg. Pop Art had influenced
   many areas such as the visual arts, music, film, and fashion.</p>


   <Artists></Artists>
   <Films></Films>


</section>

</template>

<script>

import Films from '@/components/Films.vue'
import FilmsList from '@/components/FilmsList.vue'
import Artists from '@/components/Artists/Artists.vue'
import ArtistsList from '@/components/Artists/ArtistsList.vue'


export default {
  name: 'App',
  components: {
    FilmsList,
    Films,
    Artists,
    ArtistsList
  }
}
</script>

<style lang="css" scoped>
</style>
