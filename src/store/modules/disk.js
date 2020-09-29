import * as types from '../mutation-types'
import disk from '@/api/disk'
import Vue from 'vue'
const state = () => ({
  currentPath: '.',
  pathContent: [],
  loading: false,
  error: false,
})

const getters = {
  separatePath({ currentPath }) {
    let separatePath = [{
      name: '根目录',
      path: '.'
    }]
    if (currentPath != '.') {
      const list = currentPath.split('/')
      for (let i = 0; i < list.length; i++) {
        separatePath.push({
          name: list[i],
          path: list.slice(0, i+1).join('/'),
        })
      }
    }
    return separatePath
  }, 
}

const mutations = {
  [types.UPDATE_CURRENT_PATH](state, path) {
    state.currentPath = path
  },
  [types.UPDATE_PATH_CONTENT](state, content) {
    state.pathContent = content
  },
  [types.UPDATE_LOADING_STATUS](state, status) {
    state.loading = status
  },
  [types.UPDATE_ERROR_STATUS](state, status) {
    state.error = status
  }
}

const actions = {
  getPathContent({
    commit,
  }, path) {
    commit(types.UPDATE_LOADING_STATUS, true)
    commit(types.UPDATE_PATH_CONTENT, [])
    commit(types.UPDATE_CURRENT_PATH, path)
    disk.getPathContent(path)
      .then(data => {
        if (data.success) {
          commit(types.UPDATE_PATH_CONTENT, data.data)
          commit(types.UPDATE_ERROR_STATUS, false)
        }
      })
      .catch(err => {
        commit(types.UPDATE_ERROR_STATUS, true)
        Vue.prototype.$message.error(`err: ${err}`)
      })
      .finally(() => commit(types.UPDATE_LOADING_STATUS, false))
  },
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
