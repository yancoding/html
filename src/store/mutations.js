const mutations = {
  SOCKET_ONOPEN() {
    console.log('open')
  },  
  SOCKET_ONCLOSE() {
    console.log('close')
  },  
  SOCKET_ONERROR() {
    console.log('error')
  },  
  SOCKET_ONMESSAGE() {
    console.log('message')
  },  
}

export default mutations

