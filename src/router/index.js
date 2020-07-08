import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import chat from '../pages/chat'


const routes = [
  {
    path: '/chat',
    component: chat,
  },
]

const router = new VueRouter({
  routes,
})

export default router

