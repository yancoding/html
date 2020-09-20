import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
} from './store/mutation-types'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
// import videojs from 'video.js'
import 'video.js/dist/video-js.css'
// City
import '@videojs/themes/dist/city/index.css';
// Fantasy
import '@videojs/themes/dist/fantasy/index.css';
// Forest
import '@videojs/themes/dist/forest/index.css';
// Sea
import '@videojs/themes/dist/sea/index.css';
import VueNativeWebsocket from 'vue-native-websocket'
import VueMoment from 'vue-moment'
import http from './axios'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueNativeWebsocket, `${process.env.VUE_APP_WS_HOST}:${process.env.VUE_APP_WS_PORT}`, {
  store,
  format: 'json',
  reconnection: true,
  mutations: {
    SOCKET_ONOPEN,
    SOCKET_ONCLOSE,
    SOCKET_ONERROR,
    SOCKET_ONMESSAGE,
    SOCKET_RECONNECT,
    SOCKET_RECONNECT_ERROR,
  },
})
Vue.use(VueMoment)
Vue.prototype.$http = http

new Vue({
	router,
  store,
  render: h => h(App),
}).$mount('#app')
