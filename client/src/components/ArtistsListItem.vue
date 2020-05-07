<template lang="html">
<div>
<h2>{{artist.name}}</h2>

</div>


</template>

<script>

import {eventBus} from '@/main.js'

export default {
  name: 'ArtistsListItem',
  props: ['artist'],
  methods: {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
