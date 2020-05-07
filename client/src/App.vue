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
   <Albums></Albums>



</section>

</template>

<script>

import Films from '@/components/Films/Films.vue'
import FilmsList from '@/components/Films/FilmsList.vue'
import Artists from '@/components/Artists/Artists.vue'
import ArtistsList from '@/components/Artists/ArtistsList.vue'
import Albums from '@/components/Albums/Albums.vue'
import AlbumsList from '@/components/Albums/AlbumsList.vue'


export default {
  name: 'App',
  components: {
    FilmsList,
    Films,
    Artists,
    ArtistsList,
    Albums,
    AlbumsList,
  }
}
</script>

<style lang="css" scoped>
</style>
