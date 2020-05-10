<template lang="html">

  <div>
    <img :src="painting.imageURL" width="500px">
  </div>

</template>

<script>
export default {
  name: 'RoyLichtArtListItem',
  props: ['painting']
}
</script>

<style lang="css" scoped>
</style>
