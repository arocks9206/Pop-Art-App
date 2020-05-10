<template lang="html">
  <div>
  <RoyLichtArtListItem v-for="(painting, index) in paintings"
                         :painting="painting"
                         :index="index"
                         class="list">
    </RoyLichtArtListItem>
  </div>
</template>

<script>

import RoyLichtArtListItem from './RoyLichtArtListItem.vue'

export default {
  name: 'RoyLichtArtList',
  props: ['paintings'],
  components: {
    RoyLichtArtListItem
  }
}
</script>

<style lang="css" scoped>
.list {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
