export const state = () => ({
  token: '',
  username: '',
  // user: {},
  email: '',
  ads: [],
  userLocation: '',
  userPhoto: ''
})

export const getters = {
  userName(state) {
    return state.username
  },
  token(state) {
    return state.token
  },
  userLocation(state) {
    return state.userLocation
  },
  userPhoto(state) {
    return state.userPhoto
  }
}
export const mutations = {
  saveToken(state, { user, token }) {
    state.token = token
    // state.user = user;
    state.username = user.username
    state.email = user.email
    state.userLocation = user.location
    state.userPhoto = user.photo
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

export const actions = {
  async login(context, payload) {
    const userData = payload.userData

    if (!userData.error) {
      context.commit('saveToken', userData)
      // ...
    } else {
      alert(userData.error)
    }
    return userData
  }
}
