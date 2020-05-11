<template lang="html">
<section>
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
              :finishQuiz="finishQuiz"
              >
        </QuestionBox>

      </b-col>
    </b-row>
  </b-container>

  <router-link to="/artists/other"><button>Next Lesson</button></router-link>

</div>
</section>
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
    numCorrect: 0,
    quizURL: 'http://localhost:3000/api/quiz/',
    userResult: null,
    resultStage: false
  }
  },
  mounted(){
    this.getQuestions();
    this.getUserResult()

    eventBus.$on('is-correct', (isCorrect) => {
      if (isCorrect) {
        this.numCorrect++;
        this.userResult++;
      };
    })
  },
  methods: {
    getQuestions(){
      fetch(this.quizURL + this.$route.params.id)
      .then(res => res.json())
      .then(data => this.questions = data.questions)
    },
    getUserResult(){
      fetch(this.quizURL + '5eb8fc14db52cbcdbc1f69bf')
      .then(res => res.json())
      .then(data => this.userResult = data.testResult)
    },
    next(){
      this.currentNum <= this.totalQuestions ? this.index++ : this.resultStage = true
    }
  },
  components: {
    QuestionBox,
    Header
  },
  computed: {
    currentNum(){
      return this.index+1
    }
  },
  watch: {
    finishQuiz(){
      if (this.currentNum > this.totalQuestions) { this.finishQuiz = true }
    }
  }
  }
</script>

<style lang="css" scoped>
.quiz-container {
  margin-top: 60px;
  text-align: center;
}

section {
  background-image: url('../../assets/background_1.jpg');
  background-size: cover;
  background-attachment: scroll;
}
</style>
