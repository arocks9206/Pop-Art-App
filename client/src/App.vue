<template lang="html">
<section>


   <router-view></router-view>




</section>

</template>

<script>

import AndyWarhol from './components/AndyWarhol/AndyWarhol.vue'


export default {
  name: 'App',
  components: {
    AndyWarhol
  }
}
</script>

<style lang="css" scoped>
</style>
