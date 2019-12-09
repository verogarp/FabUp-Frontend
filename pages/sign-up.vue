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
          <v-text-field label="Name" outlined color="black"></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <h2 class="fabup-title-font">What is your email?</h2>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Email" outlined color="black"></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <h2 class="fabup-title-font">Create a password</h2>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Password" outlined color="black"></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <h2 class="fabup-title-font">What do your prefer?</h2>
        </v-col>
        <v-col cols="12">
          <v-card class="d-inline-block">
            <v-container>
              <v-row>
                <v-col cols="4">
                  <v-img
                    height="100%"
                    src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                  ></v-img>
                </v-col>
                <v-col cols="8" class="text-center">
                  <v-row class="flex-column fill-height" justify="center">
                    <v-col cols="12">
                      <h3>Make Up</h3>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <v-btn large width="100%" tile color="white">CONFIRM</v-btn>
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
