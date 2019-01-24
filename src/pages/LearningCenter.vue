<template>
  <v-content>
    <v-card         style="padding: 60px 50px">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="first"
          :counter="10"
          label="FirstName"
          required
        ></v-text-field>

        <v-text-field
          v-model="last"
          :counter="10"
          label="LastName"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-checkbox
          v-model="human"
          label="Do you human?"
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="success"
          @click="generateUser()"
        >
          Validate
        </v-btn>

        <v-btn
          color="error"
          @click="reset"
        >
          Reset Form
        </v-btn>
      </v-form>
    </v-card>
    <v-card>
      <div v-for="user in newUsers">
        <span>{{ user.nationality + ' ' + user.name() }}</span>
      </div>
    </v-card>
  </v-content>
</template>

<script>
  export default {
    name: 'LearningCenter',
    data () {
      return {
        valid: true,
        first: '',
        last: '',
        email: '',
        newUsers: [],
        human: false,
        emailRules: []
      }
    },
    methods: {
      reset () {
        this.first = ''
        this.last = ''
        this.email = ''
        this.human = false
      },
      generateUser () {
        function User (first, last, email) {
          this.firstName = first
          this.lastname = last
          this.email = email
        }

        if (this.human) {
          User.prototype.name = function () {
            return this.firstName + ' ' + this.lastname
          }
        } else {
          User.prototype.name = function () {
            return 'Robot ' + this.firstName + ' ' + this.lastname
          }
          User.prototype.nationality = 'Another planet'
        }

        let newUser = new User(this.first, this.last, this.email)
        this.newUsers.push(newUser)
      }
    }
  }
</script>

<style scoped>

</style>
