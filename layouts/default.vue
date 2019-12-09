<template>
  <v-app color="primary">
    <v-navigation-drawer v-model="drawer" app color="#f9a825">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- TODO: Add this:https://vuetifyjs.com/en/components/navigation-drawers -->
    <v-app-bar app color="#f9a825">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

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

    <v-content>
      <nuxt />
    </v-content>

    <v-footer padless color="#f9a825">
      <v-col class="text-center" cols="12">
        <strong>Wellness</strong> &amp; <strong>Beauty</strong> Marketplace
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'Account', icon: 'account_box' },
        { title: 'Admin', icon: 'gavel' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: $fabup-text;
}
</style>
