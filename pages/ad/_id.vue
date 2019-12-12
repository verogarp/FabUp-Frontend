<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="mx-0 mt-1">
      <v-col cols="8" class="text-left">
        <v-btn text to="/search">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4" class="text-right">
        <v-btn small fab style="background: #f9a825">
          <v-icon color="white" @click="newConversation(ad.author)"
            >mdi-android-messages</v-icon
          >
        </v-btn>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mx-0">
      <v-col cols="12">
        <v-img :src="ad.image" aspect-ratio="1.7" contain></v-img>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mx-0">
      <v-col cols="12">
        <h2>{{ ad.title }}</h2>
        <p>{{ prettyDate }}</p>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mx-0">
      <v-col cols="12">
        <h4>{{ authorName }}</h4>
        <h4>{{ ad.location }}</h4>
        <h4 color="#f9a825">{{ ad.price }}€</h4>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mx-0">
      <v-col cols="12">
        <p>{{ ad.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from '~/plugins/axios'
import moment from 'moment'
import api from '~/services/api'

export default {
  data() {
    return {
      ad: {},
      authorName: ''
    }
  },
  computed: {
    prettyDate() {
      return moment(this.ad.created).format('MMM Do YYYY')
    }
  },
  async created() {
    const actualID = this.$route.params.id
    const ad = (await axios.get('/ads/' + actualID)).data
    this.ad = ad
    console.log({ ad })
    this.authorName = await this.nameForEmail(ad.author)
  },
  methods: {
    async newConversation(user) {
      const conversation = await api.createConversationWith(
        user,
        this.$store.getters.token
      )
      this.$router.push(`/conversation/${conversation._id}`)
    },
    async nameForEmail(email) {
      const token = this.$store.getters.token
      const user = await api.getUserByEmail(email, token)
      return user.name
    }
  }
}
</script>

<style scoped></style>
