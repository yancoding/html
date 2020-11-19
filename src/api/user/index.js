import http from '@/axios'

export default {
  // 注册
  register({ username, password }) {
    return http.post('/register', {
      username,
      password,
    })
  },
  // 获取盐值
  getSalt({ username }) {
    return http.post('/login/salt', {
      username,
    })
  },
  // 登录
  login({ username, password }) {
    return http.post('/login', {
      username,
      password,
    })
  },
}