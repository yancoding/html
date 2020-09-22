import {
  UPDATE_CURRENT_PATH,
  UPDATE_PATH_CONTENT,
  UPDATE_LOADING_STATUS,
  UPDATE_ERROR_STATUS,
} from '../mutation-types'
import disk from '@/api/disk'
import Vue from 'vue'
const state = () => ({
  currentPath: '.',
  pathContent: [],
  loading: false,
  error: false,
})

const getters = {}

const mutations = {
  [UPDATE_CURRENT_PATH](state, path) {
    state.currentPath = path
  },
  [UPDATE_PATH_CONTENT](state, content) {
    state.pathContent = content
  },
  [UPDATE_LOADING_STATUS](state, status) {
    state.loading = status
  },
  [UPDATE_ERROR_STATUS](state, status) {
    state.error = status
  }
}

const actions = {
  getPathContent({
    commit,
  }, path) {
    commit(UPDATE_LOADING_STATUS, true)
    disk.getPathContent(path)
      .then(res => {
        if (res.data.success) {
          commit(UPDATE_PATH_CONTENT, res.data.data)
          commit(UPDATE_ERROR_STATUS, false)
          commit(UPDATE_CURRENT_PATH, path)
        }
      })
      .catch(err => {
        commit(UPDATE_ERROR_STATUS, false)
        Vue.prototype.$message.error(`err: ${err}`)
      })
      .finally(() => commit(UPDATE_LOADING_STATUS, false))
  },
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
