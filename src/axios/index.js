import axios from 'axios'

const AUTH_TOKEN = 'token'
const instance = axios.create({
  baseURL: `${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}`,
  timeout: 1000,
  headers: {
    // Authorization: localStorage.getItem(AUTH_TOKEN),
  },
})

instance.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.getItem(AUTH_TOKEN)
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

export default instance