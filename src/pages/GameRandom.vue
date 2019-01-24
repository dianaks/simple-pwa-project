<template>
  <v-content>
    <v-layout column justify-center align-center>
      <h1>Random Question</h1>
      <v-card class="question-container" v-if="result">
        <v-card-title>{{ result }}</v-card-title>
      </v-card>
        <div>
          <v-btn depressed color="primary" @click="randomize()">Generate Question</v-btn>
        </div>
    </v-layout>
  </v-content>
</template>

<script>
  export default {
    name: 'GameRandom',
    data () {
      return {
        result: '',
        number: null,
        questions: [
          'IF YOU HAD THE WORLD’S ATTENTION FOR 30 SECONDS, WHAT WOULD YOU SAY?',
          'IF YOU HAD TO WORK BUT DIDN’T NEED THE MONEY, WHAT WOULD YOU CHOOSE TO DO?',
          'WHAT IS IN YOUR FRIDGE RIGHT NOW?',
          'IF YOU WERE HOME ON A RAINY SUNDAY AFTERNOON, WHAT MOVIE WOULD YOU MOST WANT TO SEE ON TELEVISION?',
          'WHERE DO YOU NOT MIND WAITING?',
          'IF YOU COULD CLOSE ONE FAST FOOD CHAIN, DUE TO DISGUSTING FOOD, WHAT WOULD YOU PICK?',
          'IF YOU COULD DIS-INVENT ONE THING, WHAT WOULD IT BE?',
          'IF YOU COULD BE A MEMBER OF ANY TV-SITCOM FAMILY, WHICH WOULD IT BE?',
          'WHAT WOULD BE THE BEST THING ABOUT NOT HAVING A SENSE OF SMELL?',
          'WOULD YOU LEAVE YOUR HOMETOWN FOREVER OR STAY IN YOUR HOMETOWN FOREVER?'
        ]
      }
    },
    methods: {
      randomize () {
        let generatedNumber = this.generateRandomNumber(0, 10)
        if (this.number === generatedNumber) {
          this.randomize()
        } else {
          this.result = this.questions[generatedNumber]
        }
      },
      generateRandomNumber (min, max) {
        let number = Math.random() * (max - min) + min
        return Math.floor(number)
      }
    }
  }
</script>

<style scoped>
  .question-container {
    background-color: #e8e8e8;
    width: 300px;
    margin: 20px 0px;
  }
</style>
