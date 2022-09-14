import axios from 'axios'

export default {
  namespaced: true,
  state: {
    swaps: []
  },
  mutations: {
    GET_SWAPS (state, data) {
      state.swaps = data
    }
  },
  actions: {
    async storeSwap (context, data) {
      const response = await axios.post('/api/v1/swap', data)
      return response.data
    },
    async getSwapsAdmin (context, payload) {
      const response = await axios.get(`/api/v1/swap/${payload.username}/${payload.from}/${payload.to}/${payload.page}`)
      context.commit('GET_SWAPS', response.data)
      return response.data
    },
    async destroyWallet (context, id) {
      const response = await axios.get(`/api/v1/wallet/delete/${id}`)
      context.commit('REMOVE_WALLET', id)
      return response.data.meta
    },
    async getBalance (context, payload) {
        const response = await axios.get(`/api/v1/wallet/balance/${payload.address}/${payload.currency}`)
        return response.data
    },
    async sendTransaction ({dispatch}, data) {
      const response = await axios.post('/api/v1/wallet/transaction', data)
      return response.data
    },
    async getTransactions (context, payload) {
        const response = await axios.get(`/api/v1/wallet/transactions/${payload.address}/${payload.currency}`)
        context.commit('GET_TRANSACTIONS', response.data)
        return response.data
    },
    async getPrice (context, payload) {
      const response = await axios.get(`/api/v1/wallet/price/${payload}`)
      return response.data
    },
    async getGraphic (context, payload) {
      const accounts = await axios.get(`/api/v1/wallet/chart/${payload}`)
      console.log('Data', accounts.data)
      context.commit('SET_CHART', accounts.data)
    }
  }
}
