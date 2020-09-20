import Vue from 'vue'
import {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
} from './mutation-types'

const mutations = {
  [SOCKET_ONOPEN](state, e) {
    console.log('socket open')
    Vue.prototype.$socket = e.currentTarget
    state.socket.isConnected = true
  },  
  [SOCKET_ONCLOSE](state, e) {
    console.log('socket close: ', e)
    state.socket.isConnected = false
  },  
  [SOCKET_ONERROR](state,e) {
    console.log('socket error: ', e)
  },  
  [SOCKET_ONMESSAGE](state, message) {
    console.log('socket received message: ', message)
    state.socket.message = message
  },  
  [SOCKET_RECONNECT](state, count) {
    console.info('socket reconnect', count)
  },
  [SOCKET_RECONNECT_ERROR](state) {
    console.log('socket reconnect error')
    state.socket.reconnectError = true
  },
}

export default mutations
