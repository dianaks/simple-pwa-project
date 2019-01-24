<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="goTo('Home')">
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goTo('Learning Center')">
          <v-list-tile-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Learning Center</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goTo('Analytics')">
          <v-list-tile-action>
            <v-icon>mdi-google-analytics</v-icon>
          </v-list-tile-action>
            <v-list-tile-title>Analytics</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Simple PWA App</v-toolbar-title>
      <v-tabs
        slot="extension"
        v-model="tabs"
        align-with-title
        color="transparent"
      >
        <v-tab href="#one">What's New</v-tab>
        <v-tab href="#two">Item Two</v-tab>
        <v-tab href="#three">Item Three</v-tab>
        <v-tabs-slider color="pink"></v-tabs-slider>
      </v-tabs>
      <v-tabs-items v-model="tabs">
        <v-tab-item
          v-for="content in ['one', 'two', 'three']"
          :key="content"
          :value="content"
        >
          <v-card height="200px" flat>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-toolbar>
    <router-view></router-view>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'app',
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    goTo (name) {
      this.$router.push({
        name: name
      })
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
