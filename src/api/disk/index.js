import http from '@/axios'

export default {
  getPathContent(path) {
    console.log(path)
    return http.get('/disk', {
      params: { path: path || '.' },
    })
  } 
}