<template lang="html">
  <div>
    <ArtistsListItem v-for="(designer, index) in fashion"
                    :key="index",
                    :designer="designer">
    </ArtistsListItem>

  </div>

</template>

<script>

import FashionListItem from '@/componenets/FashionListItem.vue';
import FashionService from '@/services/FashionService.js';

export default {
  name: 'FashionList',
  data(){
    return {
      designers: []
    }
  },
  mounted(){
    FashionService.getDesigners()
  },
  components: {
    FashionListItem
  }
}
</script>

<style lang="css" scoped>
</style>
