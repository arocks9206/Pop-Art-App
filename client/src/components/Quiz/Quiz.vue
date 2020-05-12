<template lang="html">
<section>

  <div class="quiz-container">

    <b-container class="bx-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuizHeader title="POP QUIZ"/>
          <Header
              :numCorrect="numCorrect"
              :currentNum="currentNum"
              :totalQuestions="questions.length"
              >
          </Header>

        <div>
    <b-alert v-if="resultStage" show variant="success">
      <h4 class="alert-heading">Well done!</h4>
      <p>
        That's the test complete. Your total score is {{testResult}} out of {{questions.length}}.
      </p>
      <hr>
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </b-alert>


        <QuestionBox
              v-if="questions.length"
              :currentQuestion="questions[index]"
              :next="next"
              >
        </QuestionBox>

      </div>



        </b-col>
      </b-row>
    </b-container>

    <router-link to="/artists/keyartists"><button>Next Lesson: Three Key Artists</button></router-link>

  </div>
</section>
</template>

<script>
import QuizHeader from "../headers/QuizHeader.vue";
import QuestionBox from './QuestionBox.vue'
import {eventBus} from '@/main.js'
import Header from './Header.vue'
import QuizServices from '@/services/QuizServices.js'

export default {
  name: 'Quiz',
  data() {
    return {
    questions: [],
    index: 0,
    numCorrect: 0,
    quizURL: 'http://localhost:3000/api/quiz/',
    testResult: null,
    resultStage: false
    }
  },
  mounted(){
    QuizServices.getQuestions(this.$route.params.id)
    .then(data => this.questions = data.questions)

    QuizServices.getUserScore()
    .then(data => this.userScore = data.testResult)

    eventBus.$on('is-correct', (isCorrect) => {
      if (isCorrect) {
        this.numCorrect++;
        this.testResult++;
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
      fetch(this.quizURL + '5eba4ab1ace7ca5832b0b465')
      .then(res => res.json())
      .then(data => this.userResult = data.testResult)
    },

    next(){
      if (this.currentNum < this.questions.length) {
        this.index++
      } else {
        this.resultStage = true;
        this.saveUserScore()
      }
    },
    saveUserScore(){
      const updatedScore = { testResult: this.testResult };
      QuizServices.updateUserScore(updatedScore)
      .then(score => this.testResult = score.testResult)
    }

  },
  components: {
    QuestionBox,
    Header,
    QuizHeader
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

b-alert {
  position: absolute;
  z-index: 999;
}
</style>
