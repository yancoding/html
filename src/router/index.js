import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import chat from '../pages/chat'
import disk from '../components/disk/index'
import togetherWatch from '../components/together/watch'
import login from '../components/login'
import index from '../components/index'


const routes = [
  {
    path: '/login',
    component: login,
  },
  {
    path: '/',
    component: index,
    children: [
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
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') || ''
  if(to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})

export default router
