import axios from '~/plugins/axios'

export default {
  getAllAds() {
    return axios.get('ads').then(response => response.data)
  },
  login(user) {
    return axios.post('auth/login', user).then(response => response.data)
  },
  createConversationWith(user, token) {
    return axios
      .post(
        '/messages/newConversation',
        { adEmail: user },
        {
          headers: {
            access_token: token
          }
        }
      )
      .then(response => response.data)
  },
  getMyConversations(token) {
    return axios
      .get('messages/my-conversations', {
        headers: {
          access_token: token
        }
      })
      .then(response => response.data)
  },
  getUserByEmail(email, token) {
    return axios
      .get(`/users/byEmail/${email}`, {
        headers: {
          access_token: token
        }
      })
      .then(response => response.data)
  },
  getConversationById(id, token) {
    return axios
      .get(`/messages/${id}`, {
        headers: { access_token: token }
      })
      .then(response => response.data)
  },
  sendMessage(message, conversationId, token) {
    return axios.post(
      '/messages/send',
      { message, id: conversationId },
      {
        headers: { access_token: token }
      }
    )
  }
}
