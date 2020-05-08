<template lang="html">
<div class="container">
  <h2 class="album">{{album.album}}</h2>
  <div class="middle">
    <div class="text">{{album.description}}</div>
  </div>
</div>

</template>

<script>

export default {
  name: 'AlbumsListItem',
  props: ['album']
  // methods: {
  //
  // }
}
</script>

<style lang="css" scoped>
h2:hover {
  cursor: pointer;
}
.album {
  background-color: #BFDBF7;
     border: 5px solid black;
     border-radius: 5px;
     padding: 20px;
     margin: 20px;
     height: 20vw;
     width: 20vw;
}

.container {
  position: relative;
  width: 50%;
}

.album {
  opacity: 1;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 43%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .album {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  color: red;
  background: lightgrey;
  font-size: 12px;
  padding: 2px 2px;
}
</style>
