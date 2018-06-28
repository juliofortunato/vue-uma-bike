import * as types from '@/store/actions/types'
import * as mutations from '@/store/mutations/types'

export const stationsActions = {
  [types.FETCH_STATIONS] ({ commit }) {
    commit(mutations.DISPLAY_LOADER)

    fetch('https://api.citybik.es/v2/networks/integrabike')
      .then((response) => response.json())
      .then(({ network }) => {
        commit(mutations.HIDE_LOADER)
        commit(mutations.SET_STATIONS, network.stations)
      })
  },

  [types.FOCUS_ON_STATION] ({ commit }, payload) {
    commit(mutations.FOCUS_ON_STATION, payload)
  }
}

export const filtersActions = {
  [types.SET_FILTERS] ({ commit }, payload) {
    commit(mutations.SET_FILTERS, payload)
  }
}
