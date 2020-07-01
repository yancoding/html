import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Home from '../components/Home'


const routes = [
  {
    path: '/home',
    component: Home,
  },
]

const router = new VueRouter({
  routes,
})

export default router

