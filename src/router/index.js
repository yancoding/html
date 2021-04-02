import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import chat from '../pages/chat'
import disk from '../components/disk/index'
import togetherWatch from '../components/together/watch'
import AppLogin from '../components/login/AppLogin'
import index from '../components/index'

import Home from '../components/home/Home'
// setting
import AppSetting from '../components/AppSetting'
import SettingProfile from '../components/settinng/SettingProfile'
import SettingOther from '../components/settinng/SettingOther'

// upload
import UploadPage from '../components/upload/UploadPage'

// 文件管理
import Manage from '../components/manage/Manage'

// video
import Video from '../components/video/Video'

const routes = [
  {
    path: '/login',
    component: AppLogin,
  },
  {
    path: '/',
    component: index,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/chat',
        component: chat,
      },
      {
        path: '/disk',
        component: disk,
      },
      {
        path: '/upload',
        component: UploadPage,
      },
      {
        path: '/manage',
        component: Manage,
      },
      {
        path: '/together/watch',
        component: togetherWatch,
      },
      {
        path: '/video/:id',
        component: Video,
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
