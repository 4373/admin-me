import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  url: []
}

export const mutations = {
  requestUrl(state, url) {
    state.url.push(url)
  },
  responseUrl(state, url) {
    const i = state.url.indexOf(url)
    if (i !== -1) {
      state.url.splice(i, 1)
    }
  }
}

export const actions = {}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
