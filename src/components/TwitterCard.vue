<template>
  <v-card class="white--text" color="#26c6da" dark >
    <v-card-title>
      <v-icon large left> mdi-twitter</v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">{{ content.tweet }}</v-card-text>
    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img class="elevation-6" :src="content.profile.image"></v-img>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ content.profile.name }}</v-list-tile-title>
        </v-list-tile-content>
        <v-layout justify-end style="margin:0px">
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">{{ content.likes }}</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">{{ content.shared }}</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'TwitterCard',
    props: {
      content: Object
    }
  }
</script>

<style scoped>

</style>
