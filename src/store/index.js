import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  actions,
  mutations,
})

export default store

