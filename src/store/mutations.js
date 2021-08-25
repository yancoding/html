import * as types from './mutation-types'

const mutations = {
  [types.SOCKET_ONCONNECT]() {
  },
  [types.SOCKET_ONMESSAGE]() {
  },
  [types.SOCKET_ONDISCONNECT]() {
  },
  [types.SOCKET_ONCONNECTERROR]() {
  },
  [types.SOCKET_UPDATE_USERS](state, users) {
    state.onlineUsers = users
  },
  updateUser(state, user) {
    state.user = user
  },
  [types.UPDATE_INVITE_DIALOG](state, { visible, content }) {
    state.inviteDialog = { ...state.inviteDialog, visible, content }
  },
  updateCurrentSource(state, source) {
    state.currentSource = source
  },
}

export default mutations
