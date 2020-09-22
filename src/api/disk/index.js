import http from '@/axios'

export default {
  getPathContent(dir) {
    return http.post('/disk/dir', { dir })
  } 
}