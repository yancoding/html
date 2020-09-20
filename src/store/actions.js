import Vue from 'vue'

const actions = {
  sendMessage(context, message) {
    Vue.prototype.$socket.send(message)
  },
}

export default actions
