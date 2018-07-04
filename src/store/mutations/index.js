import * as types from '@/store/mutations/types'

export default {
  [types.DISPLAY_LOADER] (state) {
    state.isLoading = true
  },

  [types.HIDE_LOADER] (state) {
    state.isLoading = false
  }
}
