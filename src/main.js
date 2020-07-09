import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueNativeWebsocket from 'vue-native-websocket'
import VueMoment from 'vue-moment'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueNativeWebsocket, 'ws://yancoding.oicp.io/websocket', {
  store,
  format: 'json',
  reconnection: true,
})
Vue.use(VueMoment)
Vue.use(VueAxios, Axios)

new Vue({
	router,
  store,
  render: h => h(App),
}).$mount('#app')
