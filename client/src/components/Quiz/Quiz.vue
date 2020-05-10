<template lang="html">

<div>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card >




    <Header
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    ></Header>




    <QuestionBox
      v-if="questions.length"
      :currentQuestion="questions[index]"
      :next="next">
    </QuestionBox>




  </v-card>
      </v-flex>
    </v-layout>

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
    numCorrect: 0,
    numTotal: 0
  }
},
  methods: {
    next(){
      this.index++
    }
  },
  mounted(){
    fetch('http://localhost:3000/api/quiz')
    .then(res => res.json())
    .then(data => this.questions = data[0].questions);

    eventBus.$on('is-correct', (isCorrect) => {
      if (isCorrect) { this.numCorrect++ };
      this.numTotal++;
    })
  },
  components: {
    QuestionBox,
    Header
  }
}
</script>

<style lang="css" scoped>
</style>
