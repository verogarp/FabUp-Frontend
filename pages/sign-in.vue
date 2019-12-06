<template>
  <div id="main">
    <v-container class="fill-height">
      <Logo></Logo>

      <v-row align="center" justify="center">
        <v-col cols="12">
          <h1>Sign In</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-text-field :key="step" label="Email" outlined></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Password" outlined></v-text-field>
        </v-col>
        <Button>Confirm</Button>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Logo from '~/components/molecules/Logo'
import Button from '~/components/atoms/Button'

export default {
  components: { Logo, Button },
  layout: 'withoutNavigationBar'
}
</script>

<style scoped lang="scss"></style>
