import * as types from '../mutation-types'

export default {
  namespaced: true,
  state() {
    return {
      // 消息列表
      messages: [],
      // 发送对象
      toMessageUser: null,
    }
  },
  getters: {
  },
  mutations: {
    [types.SOCKET_ONMESSAGE](state, message) {
      state.messages.push(message)
    },
    [types.PUSH_MESSAGE](state, message) {
      state.messages.push(message)
    },
  },
  actions: {
  },
}
