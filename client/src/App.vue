<template lang="html">
<section>


   <router-view></router-view>




</section>

</template>

<script>

import Films from '@/components/Films/Films.vue'
import FilmsList from '@/components/Films/FilmsList.vue'
import Artists from '@/components/Artists/Artists.vue'
import ArtistsList from '@/components/Artists/ArtistsList.vue'
import ArtistsListItem from '@/components/Artists/ArtistsListItem.vue'


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
