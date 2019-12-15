<template>
  <div id="main">
    <v-container class="fill-height">
      <v-row align="center" justify="center" class="mx-0">
        <v-col class="text-right" cols="12">
          <h1 class="fabup-title-font display-1">Messages</h1>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col class="text-right" cols="12">
          <v-card
            v-for="message in messages"
            :key="message._id"
            class="mx-auto mb-4"
            max-width="344"
            outlined
            :to="`/conversation/${message._id}`"
          >
            <v-list-item>
              <v-list-item-avatar size="80">
                <img :src="message.destination.photo" alt="Avatar image" />
              </v-list-item-avatar>

              <v-list-item-content class="text-left">
                <v-list-item-title class="headline mb-1">{{
                  message.destination.name
                }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ lastMessage(message) }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import api from '~/services/api'

export default {
  async asyncData({ $axios, store }) {
    const messages = []
    const token = localStorage.getItem('token')
    const { data } = await $axios.get('messages/my-conversations', {
      headers: {
        access_token: token
      }
    })
    if (!data) return
    data.forEach(async rawMessage => {
      const userOne = (await axios.get(`/users/byEmail/${rawMessage.userOne}`))
        .data
      const userTwo = (await axios.get(`/users/byEmail/${rawMessage.userTwo}`))
        .data
      const me = userOne.email == store.state.email ? userOne : userTwo
      const destination = me === userOne ? userTwo : userOne
      messages.push({
        ...rawMessage,
        me,
        destination
      })
    })
    return { messages }
  },
  data() {
    return {
      messages: []
    }
  },
  methods: {
    lastMessage(conversation) {
      return conversation.messages ? conversation.messages[0].text : ''
    },
    async getUserPhoto(email) {
      const token = this.$store.getters.token
      const user = await api.getUserByEmail(email, token)
      return user.photo
    }
  }
}
</script>
