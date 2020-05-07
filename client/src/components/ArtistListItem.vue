<template lang="html">
<div>
<h2>{{artist.name}}</h2>

</div>


</template>

<script>

import {eventBus} from '@/main.js'

export default {
  name: 'ArtistListItem',
  props: ['artist'],
  methods: {
    
    }
  }
}
</script>

<style lang="css" scoped>
</style>
