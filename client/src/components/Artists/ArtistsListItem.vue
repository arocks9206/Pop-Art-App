<template lang="html">

  <div class="container">
    <img class="image":src="artwork.imageURL" style="width:100%">
      <div class="middle">
        <div class="text">
          <h5> {{artwork.title}}</h5>
          <h6>{{artwork.artist}}</h6>
          <h6>{{artwork.year}}</h6>
          <h7>{{artwork.medium}}</h7>
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
  font-size: 14px;
  padding: 16px 32px;
  width: 400px;
}
</style>
