import * as types from '@/store/actions/types'
import * as mutations from '@/store/mutations/types'

export default {
  [types.FETCH_STATIONS] ({ commit }) {
    commit(mutations.DISPLAY_LOADER)

    setTimeout(() => {
      commit(mutations.HIDE_LOADER)
    }, 3000)
  }
}
