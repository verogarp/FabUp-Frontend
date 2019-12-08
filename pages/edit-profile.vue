<template>
  <div id="main">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="4" class="text-right">
          <v-btn text>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="8">
          <h1 class="fabup-title-font display-1	">Edit profile</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-text-field label="Name" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-text-field label="Location" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-text-field label="About you" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-col cols="12">
        <v-btn large width="100%" tile color="primary">CONFIRM</v-btn>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss"></style>
