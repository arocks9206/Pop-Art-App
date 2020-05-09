<template lang="html">
<div>
  <div>
  {{currentQuestion.text}}
    </div>

    <p class="list-item" v-for="(response, index) in currentQuestion.responses"
       :response="response"
       :index="index"
       @click="selectResponse(response)"
       :class="responseClass(response)"
       >
       {{response.text}}
     </p>

    <button type="button"
            @click="submitAnswer"
            :disabled="!selectedResponse || answered"
            >
            Submit</button>
    <button @click="next">Next</button>


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
