<template>
  <v-card color="purple" class="white--text">
    <v-layout row>
      <v-flex xs7 align-self-end>
        <v-card-title primary-title>
          <div style="text-align: left;">
            <div class="headline">Halycon Days</div>
            <div>Ellie Goulding</div>
            <div>(2013)</div>
          </div>
        </v-card-title>
      </v-flex>
      <v-flex xs5>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
          height="125px"
          contain
        ></v-img>
      </v-flex>
    </v-layout>
    <v-divider light></v-divider>
    <v-card-actions class="pa-3">
      Rate this album
      <v-spacer></v-spacer>
      <v-icon>mdi-star-outline</v-icon>
      <v-icon>mdi-star-outline</v-icon>
      <v-icon>mdi-star-outline</v-icon>
      <v-icon>mdi-star-outline</v-icon>
      <v-icon>mdi-star-outline</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'RateCard'
  }
</script>

<style scoped>

</style>
