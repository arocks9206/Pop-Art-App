<template lang="html">
  <div>
    <DesignersListItem v-for="(designer, index) in designers"
                    :key="index"
                    :designer="designer">
    </DesignersListItem>

  </div>

</template>

<script>

import DesignersListItem from './DesignersListItem.vue'
import DesignersService from '@/services/DesignersService.js'

export default {
  name: 'DesignersList',
  data(){
    return{
      designers: []
    }
  },
  mounted(){
    DesignersService.getDesigners()
    .then(designers => this.designers = designers)
  },
  components: {
    DesignersListItem
  }
}
</script>

<style lang="css" scoped>
</style>
