<template lang="html">
  <div>
    <div class="nav-bar">
      <p>Counter: {{numCorrect}}/{{numTotal}}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Header',
  props: [ 'numCorrect', 'numTotal' ]
}
</script>

<style lang="css" scoped>
</style>
