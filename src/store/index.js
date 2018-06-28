import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import { stationsMutations, filtersMutations } from '@/store/mutations'
import { stationsActions, filtersActions } from '@/store/actions'
import { stationsGetters } from '@/store/getters'

Vue.use(Vuex)

export default new Store({
  state: {
    isLoading: false,
    stations: [],
    filters: [],
    focusedStation: {
      id: null
    }
  },

  mutations: { ...stationsMutations, ...filtersMutations },

  getters: { ...stationsGetters },

  actions: { ...stationsActions, ...filtersActions }
})
