import * as types from '../mutation-types'

export default {
  namespaced: true,
  state() {
    return {
      // 用户信息
      userInfo: {},
    }
  },
  getters: {
  },
  mutations: {
    // 用户登出
    [types.SIGN_OUT]() {
      localStorage.removeItem('token')
    },
    // 更新用户信息
    [types.UPDATE_USER_INFO](state, info) {
      state.userInfo = info
    },
  },
  actions: {
  },
}
