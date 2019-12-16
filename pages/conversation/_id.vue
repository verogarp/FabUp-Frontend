<template>
  <div id="main">
    <v-container class="fill-height mb-12">
      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="4" class="text-left">
          <v-btn text to="/messages">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col class="text-right" cols="8">
          <h1 class="fabup-title-font display-1">
            {{ destination ? destination.name : '' }}
          </h1>
        </v-col>
      </v-row>
      <v-row
        v-for="message in conversationMessages"
        :key="message._id"
        align="center"
        justify="center"
        class="mx-0"
      >
        <v-col :class="isMyEmail(message.sender) ? 'text-right' : ''" cols="12">
          <v-chip
            class="ma-2"
            large
            :color="isMyEmail(message.sender) ? '#f9a825' : ''"
            >{{ message.text }}</v-chip
          >
        </v-col>
      </v-row>

      <v-bottom-navigation fixed float padless class="font-weight-medium">
        <v-col cols="12">
          <v-text-field
            v-model="messageToSend"
            append-outer-icon="mdi-send"
            dense
            label="Message"
            type="text"
            @click:append-outer="sendMessage"
          ></v-text-field>
        </v-col>
      </v-bottom-navigation>
    </v-container>
  </div>
</template>

<script>
import api from '~/services/api'
export default {
  data() {
    return {
      conversation: {},
      destination: {},
      messageToSend: ''
    }
  },
  computed: {
    conversationMessages() {
      return this.conversation ? this.conversation.message : []
    }
  },
  async created() {
    const token = this.$store.getters.token
    await this.refreshConversation(token)
    if (this.conversation.userOne == this.$store.state.email) {
      this.destination = await api.getUserByEmail(
        this.conversation.userTwo,
        token
      )
    } else {
      this.destination = await api.getUserByEmail(
        this.conversation.userOne,
        token
      )
    }
  },
  methods: {
    isMyEmail(email) {
      return email == this.$store.state.email
    },
    async sendMessage() {
      const token = localStorage.getItem('token')
      await api.sendMessage(this.messageToSend, this.conversation._id, token)
      await this.refreshConversation(token)
      this.messageToSend = ''
    },
    async refreshConversation(token) {
      this.conversation = await api.getConversationById(
        this.$route.params.id,
        token
      )
    }
  }
}
</script>
