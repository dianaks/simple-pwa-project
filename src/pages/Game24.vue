<template>
  <v-form>
    <v-content style="text-align: center">
      <h1> 24 Game </h1>
      <v-layout row justify-center style="max-width: 400px">
        <v-flex xs6 sm3 md1 :key="index" v-for="(number, index) in numbers">
          <v-text-field v-model="numbers[index]"
            label="Solo"
            placeholder="0"
            solo
          ></v-text-field>
        </v-flex>
        <v-btn @click="count()">Hitung</v-btn>
      </v-layout>
      <span>{{result}}</span>
    </v-content>
  </v-form>
</template>

<script>
  export default {
    name: 'Game24',
    data () {
      return {
        numbers: [null, null, null, null],
        result: null
      }
    },
    methods: {
      count () {
        this.result = this.numbers.reduce(this.multiply)
      },
      sum (total, num) {
        return parseInt(total) + parseInt(num)
      },
      multiply (total, num) {
        return parseInt(total) * parseInt(num)
      }
    }
  }
</script>

<style scoped>

</style>
