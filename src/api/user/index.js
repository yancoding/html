import http from '@/axios'

export default {
  register({ username, password }) {
    return http.post('/register', {
      username,
      password,
    })
  },
}