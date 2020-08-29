import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8088',
  timeout: 1000,
  headers: {},
})

export default instance