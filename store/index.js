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

import api from '~/services/api'

export const actions = {
  async login(context, payload) {
    const userData = await api.login(payload.user)

    if (!userData.error) {
      context.commit('saveToken', userData)
      // ...
    } else {
      alert(userData.error)
    }
    return userData
  }
}
