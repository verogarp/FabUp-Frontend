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
        <v-text-field label="Email" outlined></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field label="Password" outlined></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn large width="100%" color="white" tile>Confirm</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'withoutNavigationBar'
}
</script>

<style scoped lang="scss"></style>
