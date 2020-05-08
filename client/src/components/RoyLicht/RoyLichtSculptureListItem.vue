<template lang="html">

  <div>
    <img :src="sculpture.imageURL" width="500px">
  </div>

</template>

<script>
export default {
  name: 'RoyLichtSculptureListItem',
  props: ['sculpture']
}
</script>

<style lang="css" scoped>
</style>
