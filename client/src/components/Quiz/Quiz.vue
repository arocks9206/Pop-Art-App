<template lang="html">

<div class="quiz-container">

  <b-container class="bx-example-row">
    <b-row>
      <b-col sm="6" offset="3">

        <Header
              :numCorrect="numCorrect"
              :currentNum="currentNum"
              :totalQuestions="questions.length"
              >
        </Header>

        <QuestionBox
              v-if="questions.length"
              :currentQuestion="questions[index]"
              :next="next"
              >
        </QuestionBox>

      </b-col>
    </b-row>
  </b-container>

</div>

</template>

<script>

import QuestionBox from './QuestionBox.vue'
import {eventBus} from '@/main.js'
import Header from './Header.vue'

export default {
  name: 'Quiz',
  data() {
    return {
    questions: [],
    index: 0,
    numCorrect: 0
  }
},
  methods: {
    next(){
      this.index++
    }
  },
  mounted(){
    fetch(`http://localhost:3000/api/quiz/${this.$route.params.id}`)
    .then(res => res.json())
    .then(data => this.questions = data.questions);

    eventBus.$on('is-correct', (isCorrect) => {
      if (isCorrect) { this.numCorrect++ };
    })
  },
  components: {
    QuestionBox,
    Header
  },
  computed: {
    currentNum(){
      return this.index+1
    }
  }
}
</script>

<style lang="css" scoped>
.quiz-container {
  margin-top: 60px;
  text-align: center;
}
</style>
