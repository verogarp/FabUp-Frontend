<template>
  <v-app color="primary">
    <nuxt />
    <div class="text-center mb-2"></div>

    <v-bottom-navigation v-model="activeBtn" color="indigo" fixed>
      <v-spacer />
      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn>
        <span>Ads</span>
        <v-icon>mdi-post</v-icon>
      </v-btn>
      <v-spacer />

      <v-btn>
        <span>Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-spacer />
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
* {
  font-family: $fabup-text;
}
</style>
