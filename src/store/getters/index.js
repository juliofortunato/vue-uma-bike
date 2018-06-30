export const stationsGetters = {
  stations (state, getters) {
    return state.filters.reduce((aggr, filter) => {
      return getters[filter](aggr)
    }, state.stations)
  },

  activeStations: (_) => (stations) => {
    return stations.filter(station => station.extra.open)
  },

  withAvailableBikes: (_) => (stations) => {
    return stations.filter(station => station.free_bikes > 3)
  },

  withAvailableSlots: (_) => (stations) => {
    return stations.filter(station => station.empty_slots > 3)
  }
}
