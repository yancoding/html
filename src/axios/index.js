import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}`,
  timeout: 1000,
  headers: {},
})

export default instance