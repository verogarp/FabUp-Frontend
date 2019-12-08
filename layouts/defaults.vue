<template>
  <v-app color="primary">
    <v-bottom-navigation
      style="background: #f9a825"
      color="white"
      :value="activeBtn"
      grow
    >
      <v-btn>
        <span>Recents</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-post</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: $fabup-text;
}
</style>
