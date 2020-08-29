import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import chat from '../pages/chat'
import disk from '../components/disk/index'
import togetherWatch from '../components/together/watch'


const routes = [
  {
    path: '/chat',
    component: chat,
  },
  {
    path: '/disk',
    component: disk,
  },
  {
    path: '/together/watch',
    component: togetherWatch,
  },
]

const router = new VueRouter({
  routes,
})

export default router

