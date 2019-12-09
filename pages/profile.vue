<template>
  <div>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="4" class="text-left">
          <v-btn text>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="8" class="text-right">
          <h1 class="fabup-title-font display-1">Profile</h1>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="2" class="text-right">
          <v-icon>mdi-account</v-icon>
        </v-col>
        <v-col cols="10">
          <h3 class="subtitle-1">Elizabeth Stark</h3>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="2" class="text-right">
          <v-icon>mdi-crosshairs-gps</v-icon>
        </v-col>
        <v-col cols="10">
          <h3 class="subtitle-1">Ingenio</h3>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="2" class="text-right">
          <v-icon>mdi-cellphone-information</v-icon>
        </v-col>
        <v-col cols="10">
          <h3 class="subtitle-1">
            I’ve studied a master in hairstyle Also, I’ve finished a course on
            manicure I like making crazy haircuts that match with your nails
          </h3>
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-btn large width="100%" tile color="primary" to="/edit-profile"
          >EDIT PROFILE</v-btn
        >
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss"></style>
