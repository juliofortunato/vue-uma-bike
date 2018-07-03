import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Network from '@/views/Network'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/network',
      component: Network,
      name: 'network'
    }
  ]
})
