<template lang="html">
<div>


  <v-card-title style="font-size:1.5em">
  {{currentQuestion.text}}
  </v-card-title>




      <v-card-text
        class="list-item justify-center" v-for="(response, index) in currentQuestion.responses"
       :response="response"
       :index="index"
       @click="selectResponse(response)"
       :class="responseClass(response)"
       style="font-size:1.2em"
       >
       {{response.text}}
     </v-card-text>



<v-card-actions>
    <v-btn type="button"
            @click="submitAnswer"
            :disabled="!selectedResponse || answered"
            >
            Submit</v-btn>
    <v-btn @click="next"
           type="button"
           :disabled="!answered">Next</v-btn>
  </v-card-actions>

</div>
</template>

<script>

import {eventBus} from '@/main.js'

export default {
  name: 'QuestionBox',
  props: {
    currentQuestion: Object,
    next: Function
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
.list-item:hover {
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
</style>
