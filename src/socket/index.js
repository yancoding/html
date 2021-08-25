import { io } from 'socket.io-client'

// 读取环境配置
const { VUE_APP_WS_HOST, VUE_APP_WS_PORT, VUE_APP_TOKEN_KEY } = process.env

// 读取本地token
const getToken = () => localStorage.getItem(VUE_APP_TOKEN_KEY)

// 创建socket实例
const socket = io(`${VUE_APP_WS_HOST}:${VUE_APP_WS_PORT}`, {
  auth: {
    token: getToken(),
  },
})

// socket连接出错时
socket.on('connect_error', () => {
  // 3s后重新连接
  setTimeout(() => {
    // 可能是token失效导致连接出错，重新读取token
    socket.auth.token = getToken()
    socket.connect()
  }, 3000)
})

export default socket
