<template lang="html">
  <div>
  <WarholMusicListItem v-for="(musicInfluence, index) in musicInfluences"
                         :musicInfluence="musicInfluence"
                         :index="index"
                         class="list">
    </WarholMusicListItem>
  </div>
</template>

<script>

import WarholMusicListItem from './WarholMusicListItem.vue';

export default {
  name: 'WarholMusicListItem',
  props: ['musicInfluence'],
  components: {
    WarholMusicListItem
  }
}
</script>

<style lang="css" scoped>
img {
  border-style: solid;
  width: 300px;
}

.list {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
