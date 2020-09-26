import * as types from '../mutation-types'

export default {
  state() {
    return {
      messages: [],
    }
  },
  mutations: {
    [types.SOCKET_ONMESSAGE](state, message) {
      state.messages.push(message)
    },
    [types.PUSH_MESSAGE](state, message) {
      state.messages.push(message)
    },
  },
}
