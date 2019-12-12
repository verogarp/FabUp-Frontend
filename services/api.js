import axios from '~/plugins/axios'

export default {
  getAllAds() {
    return axios.get('ads').then(response => response.data)
  },
  login(user) {
    return axios.post('auth/login', user).then(response => response.data)
  }
}
