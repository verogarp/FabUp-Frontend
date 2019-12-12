export const state = () => ({
  token: '',
  username: '',
  email: '',
  ads: []
})

export const getters = {
  userName(state) {
    return state.username
  },
  token(state) {
    return state.token
  }
}
export const mutations = {
  saveToken(state, { username, email, token }) {
    state.token = token
    state.username = username
    state.email = email
  },
  clearToken(state) {
    state.token = ''
    state.username = ''
    state.email = ''
  },
  saveAds(state, ads) {
    state.ads = ads
  }
}
// import axios from '~/plugins/axios'

// export const actions = {
//   async getAds(context) {
//     const token = context.getters.token
//     debugger
//     const { data } = await axios.get('/ads/mine', {
//       headers: { access_token: context.state.token }
//     })
//     return data
//   }
// }
