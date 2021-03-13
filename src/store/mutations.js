import Vue from 'vue'
import * as types from './mutation-types'

const mutations = {
  [types.SOCKET_ONOPEN](state, e) {
    console.log('socket open')
    Vue.prototype.$socket = e.currentTarget
    state.socket.isConnected = true
  },  
  [types.SOCKET_ONCLOSE](state, e) {
    console.log('socket close: ', e)
    state.socket.isConnected = false
  },  
  [types.SOCKET_ONERROR](state,e) {
    console.log('socket error: ', e)
  },  
  [types.SOCKET_ONMESSAGE](state, message) {
    console.log('socket received message: ', message)
    switch(message.type) {
      case 'online':
        state.onlineUsers = [ ...message.content ]
        break
      case 'chat':
        state.socket.message = message
        break
      case 'invite':
        state.inviteDialog = {
          visible: true,
          content: message.video,
        }
        state.inviteInfo = message
        break
    }
    // 
  },  
  [types.SOCKET_RECONNECT](state, count) {
    console.info('socket reconnect', count)
  },
  [types.SOCKET_RECONNECT_ERROR](state) {
    console.log('socket reconnect error')
    state.socket.reconnectError = true
  },
  updateUser(state, user) {
    state.user = user
  },
  updateInviteDialog(state, { visible, content }) {
    state.inviteDialog = { ...state.inviteDialog, visible, content }
  },
  updateCurrentSource(state, source) {
    state.currentSource = source
  },
}

export default mutations
