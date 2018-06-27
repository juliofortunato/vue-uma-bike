import * as types from '@/store/mutations/types'

export const stationsMutations = {
  [types.DISPLAY_LOADER] (state) {
    state.isLoading = true
  },

  [types.HIDE_LOADER] (state) {
    state.isLoading = false
  },

  [types.SET_STATIONS] (state, payload) {
    state.stations = payload
  }
}
