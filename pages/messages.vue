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
            class="mx-auto"
            max-width="344"
            outlined
            :to="`/conversation/${message._id}`"
          >
            <v-list-item>
              <v-list-item-avatar size="80">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="Avatar image"
                />
              </v-list-item-avatar>

              <v-list-item-content class="text-left">
                <v-list-item-title class="headline mb-1">{{
                  message.destination.name
                }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ message.messages[0].content }}
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
export default {
  data() {
    return {
      messages: []
    }
  },
  async created() {
    const token = this.$store.state.token
    const rawMessages = await axios
      .get('/messages/my-conversations', {
        headers: {
          access_token: token
        }
      })
      .then(x => x.data)
      .catch(e => console.log(e))
    if (!rawMessages) return
    rawMessages.forEach(async rawMessage => {
      const userOne = (await axios.get(`/users/byEmail/${rawMessage.userOne}`))
        .data
      const userTwo = (await axios.get(`/users/byEmail/${rawMessage.userTwo}`))
        .data
      const me = userOne.email == this.$store.state.email ? userOne : userTwo
      console.log(me)
      const destination = me === userOne ? userTwo : userOne
      console.log(destination)
      this.messages.push({
        ...rawMessage,
        me,
        destination
      })
    })
  }
}
</script>
