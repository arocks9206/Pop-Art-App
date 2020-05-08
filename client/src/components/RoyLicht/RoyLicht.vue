<template lang="html">
  <section>
    <div class="intro-container">
  <div>
  <h1>ROY LICHTENSTEIN</h1>

  <h3>{{artistInfo.artistBio}}</h3>
</div>
</div>


<RoyLichtArtList></RoyLichtArtList>

<RoyLichtSculptureList></RoyLichtSculptureList>


  </section>

</template>

<script>

import RoyLichtServices from '@/services/RoyLichtServices'
import RoyLichtArtList from './RoyLichtArtList.vue';
import RoyLichtArtListItem from './RoyLichtArtListItem';
import RoyLichtSculptureList from './RoyLichtSculptureList';
import RoyLichtSchulptureListItem from './RoyLichtSculptureListItem'

export default {
  name: 'RoyLicht',
  data(){
    return {
      paintings: [],
      sculptures: [],
      artistInfo: null
    }
  },
    mounted(){
      RoyLichtServices.getData()
      .then(data => {
        this.artistInfo = data[0];
        this.paintings = data[1].paintings;
        this.sculptures = data[2].sculptures;
      })
    }
  }

</script>

<style lang="css" scoped>
</style>
