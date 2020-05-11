<template lang="html">

  <div>
    <img :src="musicInfluence.albumImg" width="250px">
  </div>

</template>

<script>
export default {
  name: 'WarholMusicListItem',
  props: ['musicInfluence']
}
</script>

<style lang="css" scoped>

img {
  border-style: solid;
}

</style>
