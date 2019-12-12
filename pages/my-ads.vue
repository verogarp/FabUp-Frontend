<template>
  <div id="main">
    <v-container class="fill-height">
      <v-row align="center" justify="center" class="mx-0">
        <v-col class="text-right" cols="12">
          <h1 class="fabup-title-font display-1">My Ads</h1>
          <p>{{ $store.state.ads }}</p>
        </v-col>
      </v-row>

      <v-btn
        fab
        style="background: #f9a825"
        to="/new-ad"
        absolute
        bottom
        right
        fixed
        class="mb-12"
      >
        <v-icon color="white">mdi-plus</v-icon>
      </v-btn>

      <v-card
        v-for="ad in ads"
        :key="ad._id"
        class="mx-auto mt-4"
        width="100%"
        :to="`/ad/${ad._id}`"
      >
        <v-img
          class="white--text align-end"
          max-height="250px"
          :src="ad.image"
        ></v-img>
        <v-card-text class="text--primary">
          <v-row>
            <v-col cols="9">
              <h4>{{ ad.title }}</h4>
            </v-col>
            <v-col cols="3" class="text-right">{{ ad.price }}€</v-col>
          </v-row>
          <div>{{ ad.location }}</div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async fetch({ store }) {
    const { data } = await axios.get('/ads/mine', {
      headers: { access_token: store.state.token }
    })
    store.commit('saveAds', data)
  },
  data() {
    return {
      ads: []
    }
  }
}
</script>
