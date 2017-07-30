// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueMoment from 'vue-moment'
import 'es6-promise/auto'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = ''

Vue.use(VueMoment)
require('moment/locale/da')

import VueSweetAlert from 'vue-sweetalert'
Vue.use(VueSweetAlert)

Vue.config.productionTip = false

Vue.component('headline', require('./components/elements/headline.vue'))
Vue.component('section-error', require('./components/elements/section-error.vue'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
