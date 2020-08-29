import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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
// import Axios from 'axios'
// import VueAxios from 'vue-axios'
import http from './axios'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueNativeWebsocket, 'ws://localhost:3000', {
  store,
  format: 'json',
  reconnection: true,
})
Vue.use(VueMoment)
// Vue.use(VueAxios, Axios)
Vue.prototype.$http = http
// Vue.prototype.$videojs = videojs

new Vue({
	router,
  store,
  render: h => h(App),
}).$mount('#app')
