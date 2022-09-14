import axios from 'axios'

export default {
  namespaced: true,
  state: {
    wallets: [],
    assets: [],
    transactions: [],
    chart: []
  },
  getters: {
    uniqueAssets (state) {
      const ids = state.wallets.map(ele => ele.asset_id)

      console.log('IDS', ids)
      
      let arrayData = []
      for (let i = 0; i < state.assets.length; i++) {
        const element = state.assets[i];
        
        if(!ids.includes(element.id)) {
          arrayData.push(element)
        }

      }
      
      return arrayData
    },
    getOwner (state) {
      let walletsElv = []
      state.wallets.map(element => {
          if(element.currency == 'vusd' && element.is_lock == 0) {
            walletsElv.push(element)
          }
      })
      return walletsElv
    }
  },
  mutations: {
    GET_ASSETS (state, data) {
        state.assets = data
    },
    SET_WALLETS (state, data) {
        state.wallets.unshift(data)
    },
    GET_WALLETS (state, data) {
      state.wallets = data
    },
    UPDATE_WALLETS (state, data) {
        let objIndex = state.wallets.findIndex((obj => obj.id == data.id));
        state.wallets[objIndex] = data
    },
    REMOVE_WALLET (state, id) {
        const indexOfObject = state.wallets.findIndex(object => {
          return object.id === id;
        });
        state.wallets.splice(indexOfObject)
    },
    GET_TRANSACTIONS (state, data) {
        state.transactions = data
    },
    SET_CHART (state, data) {
      state.chart = data
    },
  },
  actions: {
    async getAssets (context) {
        const response = await axios.get('/api/v1/wallet/asset')
        context.commit('GET_ASSETS', response.data)
        return response.data.meta
    },
    async getWallets (context) {
      const response = await axios.get('/api/v1/wallet')
      context.commit('GET_WALLETS', response.data)
      return response.data.meta
    },
    async storeWallet (context, data) {
      const response = await axios.post('/api/v1/wallet', data)
      context.commit('SET_WALLETS', response.data)
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
