import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
      {
          path: '/login',
          name: 'Login',
          meta: {layout: false},
          component: require('@/pages/auth/login')
      },
      {
          path: '/forgot_password',
          name: 'ForgotPassword',
          meta: {layout: false},
          component: require('@/pages/auth/forgotPassword')
      },
      {
          path: '/dashboard',
          name: 'Dashboard',
          redirect: 'Index'
      },
      {
        path: '/404',
        name: 'NotFound',
        component: require('@/pages/common/404')
    },
    {
        path: '*',
        redirect: 'NotFound'
    },
    {
        path: '/',
        name: 'Index',
        component: require('@/pages/common/index')
    },
    {
        path: '/hue',
        name: 'Hue',
        component: require('@/pages/common/hue')
    },
    {
        path: '/weather',
        name: 'Weather',
        component: require('@/pages/common/weather')
    },
    {
      path: '/spotify',
      name: 'Spotify',
      component: require('@/pages/common/spotify')
    }
  ]
})
