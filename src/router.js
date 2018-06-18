import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Network from '@/views/Network.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/network',
      name: 'network',
      component: Network
    }
  ]
})
