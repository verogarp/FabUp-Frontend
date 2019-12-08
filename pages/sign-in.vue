<template>
  <v-container class="fill-height">
    <Logo></Logo>

    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="fabup-title-font">Sign In</h1>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-text-field label="Email" outlined></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field label="Password" outlined></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn large width="100%" color="primary" tile>Confirm</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from '~/components/molecules/Logo'

export default {
  components: { Logo },
  layout: 'withoutNavigationBar'
}
</script>

<style scoped lang="scss"></style>
