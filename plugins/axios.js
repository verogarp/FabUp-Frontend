import axios from 'axios'

export default axios.create({
  baseURL: process.env.API_URL || 'http://localhost:2222/api'
  // headers: {
  //   access_token: store.getters.token
  // }
})
