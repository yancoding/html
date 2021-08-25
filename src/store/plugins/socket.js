import * as types from '../mutation-types'

export default function createSocketPlugin(options = {}) {
  return store => {
    const { socket, namespaces = '' } = options

    // connect
    socket.on("connect", () => {
      store.commit(`${namespaces}${types.SOCKET_ONCONNECT}`)
    })

    // message
    socket.on('message', () => {
      store.commit(`${namespaces}${types.SOCKET_ONMESSAGE}`)
    })

    // disconnect
    socket.on("disconnect", () => {
      store.commit(`${namespaces}${types.SOCKET_ONDISCONNECT}`)
    })

    // connect_error
    socket.on('connect_error', () => {
      console.log(`${namespaces}${types.SOCKET_ONCONNECTERROR}`)
      store.commit(`${namespaces}${types.SOCKET_ONCONNECTERROR}`)
    })

    // 在线用户列表更新
    socket.on('user_list_update', userList => {
      store.commit(`${namespaces}${types.SOCKET_UPDATE_USERS}`, { userList })
    })
  }
}