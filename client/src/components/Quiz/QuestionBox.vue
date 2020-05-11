<template lang="html">
<div>

  <div class="question-box-container">
    <b-jumbotron>
      <template slot="lead">
        {{currentQuestion.text}}
      </template>

      <hr class="my-4">

      <b-list-group>
        <b-list-group-item
              v-for="(response, index) in currentQuestion.responses"
              :response="response"
              :index="index"
              @click.prevent="selectResponse(response)"
              :class="responseClass(response)">

                        {{response.text}}
        </b-list-group-item>
      </b-list-group>




      <b-button variant="primary"
                @click="submitAnswer"
                :disabled="!selectedResponse || answered"
                >
                Submit
      </b-button>



      <b-button @click="next"
                variant="success"
                :disabled="!answered"
                >
                next
      </b-button>

      <!-- <b-button v-if="finishQuiz">
        Finish Quiz
      </b-button> -->



    </b-jumbotron>
  </div>

</div>
</template>

<script>

import {eventBus} from '@/main.js'

export default {
  name: 'QuestionBox',
  props: {
    currentQuestion: Object,
    next: Function,
    finishQuiz: Boolean
  },
  data(){
    return {
      selectedResponse: null,
      answered: false,
      correctResponse: null
    }
  },
  methods: {
    selectResponse(response){
      this.selectedResponse = response;
      console.log(response);
    },
    responseClass(response){
      let responseClass = ''

      if (!this.answered && this.selectedResponse === response){
        responseClass = 'selected'
      } else if (this.answered && response.correct){
        responseClass = 'correct'
      } else if (this.answered && this.selectedResponse === response && !this.selectedResponse.correct){
        responseClass = 'incorrect'
      }

      return responseClass
    },
    submitAnswer(){
      let isCorrect = false;

      if (this.selectedResponse.correct){
        isCorrect = true;
      };
      this.answered = true;
      eventBus.$emit('is-correct', isCorrect);

    }
  },
  watch: {
    currentQuestion(){
      this.selectedResponse = null;
      this.answered = false;
    }
  }
}
</script>

<style lang="css" scoped>
.list-group-item:hover {
  background: #EEE;
  cursor: pointer;
}

.selected {
  background-color: lightblue;
}

.correct {
  background-color: green;
}

.incorrect {
  background-color: red;
}

.btn {
  margin: 5px 5px;
}
</style>
