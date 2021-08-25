import axios from 'axios'

// 读取环境配置
const { VUE_APP_API_HOST, VUE_APP_API_PORT, VUE_APP_TOKEN_KEY } = process.env

// 读取本地token
const getToken = () => localStorage.getItem(VUE_APP_TOKEN_KEY)

// 创建axios实例
const instance = axios.create({
  baseURL: `${VUE_APP_API_HOST}:${VUE_APP_API_PORT}`,
  timeout: 0,
  headers: {
  },
})

// 请求拦截器
instance.interceptors.request.use(config => {
  config.headers.Authorization = getToken()
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

export default instance