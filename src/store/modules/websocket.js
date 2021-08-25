import * as types from '../mutation-types'

export default {
  namespaced: true,
  state() {
    return {
      userList: [],
    }
  },
  getters: {
  },
  mutations: {
    [types.SOCKET_ONCONNECT]() {
    },
    [types.SOCKET_ONMESSAGE]() {
    },
    [types.SOCKET_ONDISCONNECT]() {
    },
    [types.SOCKET_ONCONNECTERROR]() {
    },
    [types.SOCKET_UPDATE_USERS](state, { userList}) {
      state.userList = userList
    },
  },
  actions: {
  },
}
