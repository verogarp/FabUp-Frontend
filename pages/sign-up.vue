<template>
  <div id="main">
    <v-container class="fill-height mt-10">
      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12" class="text-center">
          <img src="fabup.png" alt="FabUp logo" />
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <h2 class="fabup-title-font">What is your name?</h2>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="name"
            label="Name"
            outlined
            color="black"
            :rules="[rules.required]"
            validate-on-blur
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <h2 class="fabup-title-font">What is your email?</h2>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            label="E-mail"
            outlined
            color="black"
            :rules="[rules.required, rules.email]"
            validate-on-blur
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <h2 class="fabup-title-font">Create a password</h2>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            label="Password"
            outlined
            color="black"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required, rules.password]"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <v-btn large width="100%" tile color="white" @click="signup"
            >CONFIRM</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  layout: 'withoutNavigationBar',
  data() {
    return {
      email: '',
      password: '',
      name: '',
      showPassword: false,
      rules: {
        required: v => !!v || 'Item is required',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        password: v => v.length > 5 || 'Password too short!'
      }
    }
  },
  methods: {
    async signup() {
      const user = {
        user_name: this.name,
        user_email: this.email,
        user_password: this.password
      }

      const newToken = await axios.post('auth/signup', user)
      if (!newToken.error) {
        this.$store.commit('saveToken', newToken.data)
        this.$router.push('/')
      } else {
        alert(newToken.error)
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
