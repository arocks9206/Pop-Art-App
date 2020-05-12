<template lang="html">
<section>

  <div class="quiz-container">

    <IntroHeader title="POP QUIZ"/>


    <b-container class="bx-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <Header
              :numCorrect="numCorrect"
              :currentNum="currentNum"
              :totalQuestions="questions.length"
              class="header"
              >
          </Header>


        <div>
    <b-alert v-if="resultStage" show variant="primary">
      <h4 class="alert-heading">Well done!</h4>
      <p>
        That's the test complete. Your total score is {{testResult}} out of {{questions.length}}.
      </p>
      <hr>
      <p class="mb-0">
        <span @click="resetQuiz" class="reset">Click here if you want to reset your score and try again.</span>
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
import IntroHeader from "../headers/IntroHeader.vue";
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
    testResult: null,
    resultStage: false
    }
  },
  mounted(){
    QuizServices.getQuizData()
    .then(data => data.map(x => {
      this.questions = x.questions
    }))


    eventBus.$on('is-correct', (isCorrect) => {
      if (isCorrect) {
        this.numCorrect++;
        this.testResult++;
      };
    })
  },
  methods: {
  next(){
      if (this.currentNum < this.questions.length) {
        this.index++
      } else {
        this.resultStage = true;
      }
    },
  resetQuiz(){
    this.index = 0;
    this.numCorrect = 0;
    this.testResult = null;
    this.resultStage = false;
  }
    // },
    // saveUserScore(){
    //   const updatedScore = { testResult: this.testResult };
    //   QuizServices.updateUserScore(updatedScore, this.testResult._id)
    //   .then(score => this.testResult = score.testResult)
    // }

  },
  components: {
    QuestionBox,
    Header,
    IntroHeader
  },
  computed: {
    currentNum(){
      return this.index+1
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
  /* margin-top: 60px; */
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

.reset {
  cursor: pointer;
  text-decoration: underline;
}

.header {
  padding: 5px;
  border-style: solid;
  background-color: #1998CB;
  opacity: 95%;
}
</style>
