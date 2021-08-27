import http from '../axios'
import router from '../router'
import * as types from './mutation-types'

const actions = {
  // 获取用户信息
  getUserInfo({ commit }) {
    http.get('/user')
      .then(res => {
        if (res.success) {
          commit(types.UPDATE_USER_INFO, res.data)
        } else {
          // 跳转到登陆页
          router.push('/login')
        }
      })
      .catch(err => {
        console.error(err)
      })
  },
}

export default actions
