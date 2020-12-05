import * as types from '../mutation-types'

export default {
  namespaced: true,
  state() {
    return {}
  },
  mutations: {
    [types.SIGN_OUT]() {
      localStorage.removeItem('token')
    },
  },
  actions: {},
}