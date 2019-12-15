<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="mx-0">
      <v-col cols="12" class="text-center">
        <img src="fabup.png" alt="FabUp logo" />
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mx-0">
      <v-col cols="12">
        <h1 class="fabup-title-font">Sign In</h1>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mx-0">
      <v-col cols="12">
        <v-text-field
          v-model="email"
          label="E-mail"
          outlined
          dense
          :rules="[rules.required, rules.email]"
          validate-on-blur
          color="black"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="password"
          label="Password"
          outlined
          dense
          :type="showPassword ? 'text' : 'password'"
          :rules="[rules.required]"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          color="black"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn large width="100%" color="white" tile @click="login"
          >Confirm</v-btn
        >
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn text to="/auth">Go back</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from '~/services/api'

export default {
  layout: 'withoutNavigationBar',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      rules: {
        required: v => !!v || 'Item is required',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  methods: {
    async login() {
      const user = {
        user_email: this.email,
        user_password: this.password
      }
      const userData = await api.login(user)
      await this.$store.dispatch('login', { userData })
      localStorage.setItem('token', userData.token)

      if (!userData.error) {
        this.$router.push('/')
      } else {
        alert(userData.error)
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
