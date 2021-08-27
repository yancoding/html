import * as types from '../mutation-types'

export default {
  namespaced: true,
  state() {
    return {
    }
  },
  getters: {
  },
  mutations: {
    // 用户登出
    [types.SIGN_OUT]() {
      localStorage.removeItem('token')
    },
  },
  actions: {
  },
}
