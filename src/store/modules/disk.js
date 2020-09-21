import {
  UPDATE_CURRENT_PATH,
} from '../mutation-types'

const state = () => ({
  currentPath: '.',
})

const getters = {
  separatePath: state => {
    let separatePath = [{
      name: '根目录',
      path: '.'
    }]
    console.log(state.currentPath)
    if (state.currentPath != '.') {
      const list = state.currentPath.split('/')
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
  [UPDATE_CURRENT_PATH](state, { path }) {
    console.log(path)
    state.currentPath = path
  },
}

const actions = {}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
