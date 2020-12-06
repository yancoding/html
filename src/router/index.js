import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import chat from '../pages/chat'
import disk from '../components/disk/index'
import togetherWatch from '../components/together/watch'
import AppLogin from '../components/login/AppLogin'
import index from '../components/index'

// setting
import AppSetting from '../components/AppSetting'
import SettingProfile from '../components/settinng/SettingProfile'
import SettingOther from '../components/settinng/SettingOther'


const routes = [
  {
    path: '/login',
    component: AppLogin,
  },
  {
    path: '/setting',
    component: AppSetting,
    children: [
      {
        path: 'profile',
        component: SettingProfile,
      },
      {
        path: 'other',
        component: SettingOther,
      },
    ],
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
  const token = localStorage.getItem('token')
  if(to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})

export default router
