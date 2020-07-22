import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import chat from '../pages/chat'
import disk from '../components/disk/index'


const routes = [
  {
    path: '/chat',
    component: chat,
  },
  {
    path: '/disk',
    component: disk,
  },
]

const router = new VueRouter({
  routes,
})

export default router

