<template lang="html">

  <!-- <div>
    <img :src="artwork.imageURL" width="500px">
  </div> -->
  <div class="container">
    <img class="image":src="artwork.imageURL" style="width:100%">
      <div class="middle">
        <div class="text">
          <h3> {{artwork.title}}</h3>
          <h3>{{artwork.artist}}</h3>
          <h5>{{artwork.year}}</h5>
          <h6>{{artwork.medium}}</h6>
          <p>{{artwork.description}}</p>
        </div>
      </div>
  </div>

</template>

<script>
export default {
  name: 'ArtistsListItem',
  props: ['artwork']
}
</script>

<style lang="css" scoped>
.container {
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background: black;
  color: white;
  font-size: 12px;
  padding: 16px 32px;
  width: 400px;
}
</style>
