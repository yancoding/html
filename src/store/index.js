import Vuex from 'vuex'
import Vue from 'vue'
import socket from '../socket'
import createSocketPlugin from './plugins/socket'

Vue.use(Vuex)
Vue.prototype.$socket = socket

import actions from './actions'
import mutations from './mutations'
import disk from './modules/disk'
import chat from './modules/chat'
import user from './modules/user'
import fileManage from './modules/file-manage'

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    user: {},
    onlineUsers: [],
    // 邀请dialog
    inviteDialog: {
      visible: true,
      content: 'haha',
    },
    currentSource: {},
    inviteInfo: {
      from: {},
      video: {},
    },
  },
  actions,
  mutations,
  // 模块
  modules: {
    disk,
    chat,
    fileManage,
    user,
  },
  // 插件
  plugins: [ createSocketPlugin(socket) ],
})

export default store
