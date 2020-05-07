<template lang="html">
  <div>
    <ArtistsList></ArtistList>
  </div>

</template>

<script>

import {eventBus} from '@/main.js';
import ArtistsList from '@/components/ArtistsList.vue';

export default {
  name: 'Artists',
  data(){
    return {

    }
  },
  mounted(){

  },
  components: {
    ArtistsList
  }
}
</script>

<style lang="css" scoped>
</style>
