import * as types from '../mutation-types'

export default function createSocketPlugin(socket) {
  return store => {
    // connect
    socket.on("connect", () => {
      store.commit(types.SOCKET_ONCONNECT)
    })

    // message
    socket.on('message', () => {
      store.commit(types.SOCKET_ONMESSAGE)
    })

    // disconnect
    socket.on("disconnect", () => {
      store.commit(types.SOCKET_ONDISCONNECT)
    })

    // connect_error
    socket.on('connect_error', () => {
      store.commit(types.SOCKET_ONCONNECTERROR)
    })

    // 在线用户列表更新
    socket.on('user_list_update', data => {
      store.commit(types.SOCKET_UPDATE_USERS, data)
    })
  }
}