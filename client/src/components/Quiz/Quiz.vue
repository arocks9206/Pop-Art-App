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

        <QuestionBox
              v-if="questions.length"
              :currentQuestion="questions[index]"
              :next="next"
              :finishQuiz="finishQuiz"
              >
        </QuestionBox>

        <!-- <div v-if='resultStage'>
        </div> -->

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
      fetch(this.quizURL + '5eba4ab1ace7ca5832b0b465')
      .then(res => res.json())
      .then(data => this.userResult = data.testResult)
    },
    next(){
      this.currentNum <= this.totalQuestions ? this.index++ : this.resultStage = true
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
button {
 box-shadow:inset 0px 1px 0px 0px #f7c5c0;
 background:linear-gradient(to bottom, #fc8d83 5%, #e4685d 100%);
 background-color:#fc8d83;
 border-radius:6px;
 border:1px solid #d83526;
 display:inline-block;
 cursor:pointer;
 color:#ffffff;
 font-family:Arial;
 font-size:15px;
 font-weight:bold;
 padding:6px 24px;
 text-decoration:none;
 text-shadow:0px 1px 0px #b23e35;
}

button:hover {
  background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);
  background-color:#e4685d;
}

button:active {
  position:relative;
  top:1px;
}

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
