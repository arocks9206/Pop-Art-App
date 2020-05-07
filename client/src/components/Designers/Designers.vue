<template lang="html">
  <DesignersList></DesignersList>
</template>

<script>

import {eventBus} from '@/main.js';
import DesignersList from './DesignersList.vue'

export default {
  name: 'Designers',
  components: {
    DesignersList
  }

}
</script>

<style lang="css" scoped>
</style>
