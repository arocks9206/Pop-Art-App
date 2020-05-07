<template lang="html">
  <div>
    <img :src="film.images[0].URL" width="300px">

  </div>

</template>

<script>

export default {
  name: 'FilmsListItem',
  props: ['film']
  // methods: {
  //
  // }
}
</script>

<style lang="css" scoped>
</style>
