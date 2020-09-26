import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import disk from './modules/disk'
import chat from './modules/chat'

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    user: {
      id: 1,
      name: 'yan',
    },
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false,
    },
  },
  actions,
  mutations,
  modules: {
    disk,
    chat,
  }
})

export default store
