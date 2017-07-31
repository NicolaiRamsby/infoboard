import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
        path: '/404',
        name: '404',
        component: require('@/pages/common/404')
    },
    {
        path: '*',
        redirect: '404'
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
