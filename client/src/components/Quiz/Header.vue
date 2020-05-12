<template lang="html">
  <div>
    <div class="nav-bar">
      <div>Questions: {{currentNum}}/{{totalQuestions}}</div><div> Correct Answers: {{numCorrect}}/{{totalQuestions}}</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Header',
  props: [ 'numCorrect', 'currentNum', 'totalQuestions' ]
}
</script>

<style lang="css" scoped>
.nav-bar {
  display: flex;
  justify-content: space-around;
  font-size: 20px;
}
</style>
