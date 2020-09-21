import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import disk from './modules/disk'

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
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
  }
})

export default store
