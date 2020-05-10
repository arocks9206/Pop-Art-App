<template lang="html">

  <div>
    <img :src="artwork.imageURL" width="500px">
  </div>

</template>

<script>
export default {
  name: 'AndyWarholArtListItem',
  props: ['artwork']
}
</script>

<style lang="css" scoped>

img {
  border-style: solid;
}

</style>
