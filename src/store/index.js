import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import { stationsMutations } from '@/store/mutations'
import { stationsActions } from '@/store/actions'

Vue.use(Vuex)

export default new Store({
  state: {
    isLoading: false,
    stations: [],
    filters: []
  },

  mutations: { ...stationsMutations },

  getters: {},

  actions: { ...stationsActions }
})
