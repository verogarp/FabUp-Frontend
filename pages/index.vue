<template>
  <div>
    <v-container class="fill-height mx-0">
      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12" class="text-center">
          <img src="fabup.png" alt="FabUp logo" />
        </v-col>
      </v-row>

      <v-row class="text-center mx-0">
        <v-col cols="6" class="text-center">
          <v-btn large tile color="white">SIGN IN</v-btn>
        </v-col>
        <v-col cols="6" class="text-center">
          <v-btn large tile color="white">SIGN UP</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'withoutNavigationBar'
}
</script>

<style scoped lang="scss"></style>
