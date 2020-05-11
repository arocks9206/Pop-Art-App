<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "ArtistsHeader",
  props: ["title"]
};
</script>

<style scoped>
h1 {
  font: bold 40px Century Gothic;
  color: black;
  text-align: center;
  background-color: #EC3C37;
  border-style: solid;
  padding: 5px;
}
</style>
