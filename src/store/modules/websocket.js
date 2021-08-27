import * as types from '../mutation-types'
import socket from '../../socket'

export default {
  namespaced: true,
  state() {
    return {
      // 用户列表
      userList: [],
      // 当前发送消息用户
      messageUser: {},
      // 消息列表
      messageList: [],
    }
  },
  getters: {
  },
  mutations: {
    [types.SOCKET_ONCONNECT]() {
    },
    [types.SOCKET_ONMESSAGE]() {
    },
    [types.SOCKET_ONDISCONNECT]() {
    },
    [types.SOCKET_ONCONNECTERROR]() {
    },
    // 更新用户列表
    [types.SOCKET_UPDATE_USERS](state, { userList}) {
      state.userList = userList
    },
    // 更新当前发送消息用户
    [types.CHANGE_MESSAGE_USER](state, { user }) {
      state.messageUser = user
    },
    // push消息内容到messageList
    [types.PUSH_MESSAGE](state, { message }) {
      state.messageList.push(message)
    },
  },
  actions: {
    sendMessage({ commit, state }, { content }) {
      const userId = state.messageUser.id
      socket.emit('chat', userId, content, res => {
        if (res.success) {
          commit(types.PUSH_MESSAGE, {
            message: res.data,
          })
        } else {
          console.log('发送失败')
        }
      })
    },
  },
}
