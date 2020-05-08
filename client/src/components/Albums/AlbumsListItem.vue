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

.container {
  position: relative;
  width: 50%;
}

.album {
  background-color: #BFDBF7;
     border: 5px solid black;
     border-radius: 5px;
     padding: 20px;
     margin: 20px;
     height: 20vw;
     width: 20vw;
  opacity: 1;
  display: block;
  transition: 1s ease;
  backface-visibility: hidden;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 43%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 75%;
  height: 80;
}

.container:hover .album {
  opacity: 0.1;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  color: black;

  background: lightgrey;
  font-size: 17px;
  padding: 1px;
}
</style>
