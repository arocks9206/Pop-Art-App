<template lang="html">
  <section>
    <div class="intro-container">
  <div>
  <h1>ROY LICHTENSTEIN</h1>

  <h3>{{artistInfo.artistBio}}</h3>
</div>
</div>


<RoyLichtArtList :paintings="paintings"></RoyLichtArtList>

<RoyLichtSculptureList :sculptures="sculptures"></RoyLichtSculptureList>


  </section>

</template>

<script>

import RoyLichtServices from '@/services/RoyLichtServices'
import RoyLichtArtList from './RoyLichtArtList.vue';
import RoyLichtArtListItem from './RoyLichtArtListItem';
import RoyLichtSculptureList from './RoyLichtSculptureList';
import RoyLichtSculptureListItem from './RoyLichtSculptureListItem'

export default {
  name: 'RoyLicht',
  components: {
    RoyLichtArtList,
    RoyLichtArtListItem,
    RoyLichtSculptureList,
    RoyLichtSculptureListItem
  },
  data(){
    return {
      paintings: [],
      sculptures: [],
      artistInfo: {}
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
.intro-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-container h1 {
  text-align: center;
  font-size: 40px;
}

.intro-container h3 {
  margin: 100px;
  font-size: 40px;
  text-align: justify;
}

.list {
  display: flex;
  flex-direction: row;
}

.film-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.film-content div {
  width: 900px;
}

.film-content p {
  font-size: 30px;
  text-align: justify;
}
</style>
