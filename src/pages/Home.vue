<template>
  <v-content>
    <v-layout column align-center justify-center>
      <h1>Hi Diana, how's your day?</h1>
      <v-flex xs6 sm3 md1>
        <v-text-field v-model="mood"></v-text-field>
      </v-flex>
    </v-layout>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap justify-center>
          <v-flex xs12 style="max-width: 400px">
            <twitter-card :content="twitterContent"></twitter-card>
          </v-flex>
          <v-flex xs12 style="max-width: 400px">
            <action-card :content="actionContent"></action-card>
          </v-flex>
          <v-flex xs12 style="max-width: 400px">
            <rate-card></rate-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
        fixed
        bottom
        right
      >
        <v-btn slot="activator" v-model="fab" color="blue darken-2" dark fab>
          <v-icon>mdi-plus</v-icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-btn fab dark small color="green">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn fab dark small color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-card>
  </v-content>
</template>

<script>
  import TwitterCard from '@/components/TwitterCard'
  import ActionCard from '@/components/ActionCard'
  import RateCard from '@/components/RateCard'
  export default {
    name: 'Home',
    components: {ActionCard, TwitterCard, RateCard},
    data () {
      return {
        mood: this.$route.query.mood,
        twitterContent: {
          tweet: 'Ready to begin your journey?',
          likes: 264,
          shared: 54,
          profile: {
            name: 'Elisabeth Diana K S',
            image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
          }
        },
        actionContent: {
          title: 'Random Question',
          description: 'Time to play some random question?',
          action: {
            title: 'Play Now',
            link: 'GameRandom'
          }
        },
        direction: 'top',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition'
      }
    },
    watch: {
      mood () {
        this.goTo()
      }
    },
    methods: {
      goTo () {
        const self = this
        this.$router.push({ name: 'Home', query: { mood: self.mood }
        })
      }
    }
  }
</script>

<style scoped>

</style>
