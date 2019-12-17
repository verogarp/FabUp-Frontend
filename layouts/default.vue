<template>
  <v-app color="primary">
    <v-navigation-drawer v-model="drawer" app color="#f9a825">
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="userPhoto"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ userName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title @click="signOut">Sign Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-navigation-drawer>

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
      <div v-if="spinnerState" class="spinner-overlay">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
          absolute
          class="mx-auto align-self-center"
        ></v-progress-circular>
      </div>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Profile', icon: 'mdi-account', to: '/' },
        { title: 'Search Ad', icon: 'mdi-magnify', to: '/search' },
        { title: 'My Ads', icon: 'mdi-account-card-details', to: '/my-ads' },
        { title: 'Messages', icon: 'mdi-android-messages', to: '/messages' }

        // {
        //   title: 'Favorite Ads',
        //   icon: 'mdi-heart-multiple-outline',
        //   to: '/favorite-ads'
        // },
        // { title: 'Settings', icon: 'mdi-settings-outline', to: '' }
      ]
    }
  },
  computed: {
    ...mapGetters(['token', 'userName', 'userPhoto', 'spinnerState'])
  },
  methods: {
    signOut() {
      localStorage.removeItem('token')
      this.$store.commit('clearToken')
      this.$router.push('/auth')
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: $fabup-text;
}

.spinner-overlay {
  background-color: rgba(255, 255, 255, 0.65);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 99999;
}
</style>
