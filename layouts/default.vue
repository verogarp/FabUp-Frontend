<template>
  <div class="overflow-hidden">
    <div class="text-center mb-2"></div>

    <v-bottom-navigation v-model="activeBtn" color="indigo" fixed>
      <v-spacer />

      <v-btn>
        <span>Recents</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-post</v-icon>
      </v-btn>
      <v-spacer />

      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-spacer />
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {}
</script>
