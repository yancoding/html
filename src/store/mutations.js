import * as types from './mutation-types'

const mutations = {
  // 更新用户信息
  [types.UPDATE_USER_INFO](state, info) {
    state.userInfo = info
  },
  [types.UPDATE_INVITE_DIALOG](state, { visible, content }) {
    state.inviteDialog = { ...state.inviteDialog, visible, content }
  },
  updateCurrentSource(state, source) {
    state.currentSource = source
  },
}

export default mutations
