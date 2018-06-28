import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import { stationsMutations, filtersMutations } from '@/store/mutations'
import { stationsActions, filtersActions } from '@/store/actions'

Vue.use(Vuex)

export default new Store({
  state: {
    isLoading: false,
    stations: [],
    filters: []
  },

  mutations: { ...stationsMutations, ...filtersMutations },

  getters: {},

  actions: { ...stationsActions, ...filtersActions }
})
