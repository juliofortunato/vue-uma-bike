import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import { stationsMutations } from '@/store/mutations'

Vue.use(Vuex)

export default new Store({
  state: {
    isLoading: false,
    stations: [],
    filters: []
  },

  mutations: { ...stationsMutations },

  getters: {}
})
