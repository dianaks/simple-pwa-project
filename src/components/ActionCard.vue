<template>
  <v-card color="blue-grey darken-2" class="white--text">
    <v-card-title primary-title>
      <div style="text-align: left">
        <div class="headline">{{ content.title }}</div>
        <span>{{ content.description }}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat dark @click="goTo()">{{ content.action.title }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'ActionCard',
    props: {
      content: Object
    },
    methods: {
      goTo () {
        let link = this.content.action.link
        this.$router.push({
          name: link
        })
      }
    }
  }
</script>

<style scoped>

</style>
