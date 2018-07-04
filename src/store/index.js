import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import mutations from '@/store/mutations'
import actions from '@/store/actions'

Vue.use(Vuex)

export default new Store({
  state: {
    isLoading: false,
    stations: []
  },

  mutations,
  actions
})
