import * as types from '@/store/types'

export const stationsMutations = {
  [types.DISPLAY_LOADER] (state) {
    state.isLoading = true
  },

  [types.HIDE_LOADER] (state) {
    state.isLoading = false
  }
}
