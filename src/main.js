import Vue from 'vue'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'

import router from '@/router'

import App from '@/App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_KEY
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
