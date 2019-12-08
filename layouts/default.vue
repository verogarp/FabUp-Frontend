<template>
  <v-app color="primary">
    <div>
      <!-- TODO: Add this:https://vuetifyjs.com/en/components/navigation-drawers -->
      <v-app-bar color="#f9a825">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <v-toolbar-title>FabUp</v-toolbar-title>

        <v-menu left bottom>
          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
    <nuxt />
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
