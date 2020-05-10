<template lang="html">
  <div>
  <RoyLichtSculptureListItem v-for="(sculpture, index) in sculptures"
                         :sculpture="sculpture"
                         :index="index"
                         class="list">
    </RoyLichtSculptureListItem>
  </div>
</template>

<script>
import RoyLichtSculptureListItem from './RoyLichtSculptureListItem.vue'
export default {
  name: 'RoyLichtSculptureList',
  props: ['sculptures'],
  components: {
    RoyLichtSculptureListItem
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
