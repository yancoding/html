import * as types from './mutation-types'

const mutations = {
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
