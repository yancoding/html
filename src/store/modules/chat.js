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
    // 切换聊天对象
    [types.SWITCH_TO_MESSAGE_USER](state, user) {
      state.toMessageUser = user
    }
  },
  actions: {
  },
}
