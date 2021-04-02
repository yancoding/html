import * as types from '../mutation-types'

export default {
  namespaced: true,
  state() {
    return {
      multipleSelection: [],
    }
  },
  mutations: {
    [types.UPDATE_MULTIPLE_SELECTION](state, value) {
      state.multipleSelection = value
    },
  },
  actions: {},
}