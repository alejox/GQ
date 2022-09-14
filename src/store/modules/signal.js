import axios from 'axios'

export default {
  namespaced: true,
  state: {
    signals: []
  },
  getters: {},
  mutations: {
    SET_SIGNALS (state, data) {
        state.signals.unshift(data)
    },
    GET_SIGNALS (state, data) {
      state.signals = data
    },
    UPDATE_SIGNAL (state, data) {
        let objIndex = state.signals.findIndex((obj => obj.id == data.id));
        state.signals[objIndex] = data
    },
    REMOVE_SIGNAL (state, id) {
        const indexOfObject = state.signals.findIndex(object => {
           return object.id === id;
        });
        state.signals.splice(indexOfObject)
    }
  },
  actions: {
    async getSignals (context) {
      const response = await axios.get(`/api/v1/signal`)
      context.commit('GET_SIGNALS', response.data)
      return response.data
    },
    async storeSignal (context, data) {
      const response = await axios.post('/api/v1/signal', data)
      context.commit('SET_SIGNALS', response.data)
      return response.data
    },
    async destroySignal (context, id) {
      const response = await axios.get(`/api/v1/signal/delete/${id}`)
      context.commit('REMOVE_SIGNAL', id)
      return response.data.meta
    }
  }
}
