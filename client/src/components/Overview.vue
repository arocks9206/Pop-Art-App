<template lang="html">
<section>
  <h1>SHORT HISTORY OF POP ART</h1>
<p>Pop Art is an art movement that emerged in the 1950s and
  flourished until the mid-1970s in America and Britain, that
  drew inspiration from popular and commercial culture. Some
  of the movement’s most identifiable artists include Andy Warhol,
   Roy Lichtenstein, and Robert Rauschenberg. Pop Art had influenced
   many areas such as the visual arts, music, film, and fashion.</p>


   <div class="main-menu">

   <router-link to="/artists"><img width="400px" height="290px" src="../assets/lichtenstein_brushstroke.jpg">
   </router-link>

   <router-link to="/films"><img width="400px" src="../assets/warhol_chelsea_girls.jpg">
   </router-link>

   <router-link to="/designers"><img width="400px" src="../assets/warhol_chelsea_girls.jpg">
   </router-link>

 </div>






</section>

</template>

<script>

import Films from './Films/Films.vue'
import FilmsList from './Films/FilmsList.vue'
import Artists from './Artists/Artists.vue'
import ArtistsList from './Artists/ArtistsList.vue'
import ArtistsListItem from './Artists/ArtistsListItem.vue'


export default {
  name: 'Overview',
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
