import axios from 'axios'

export default {
  namespaced: true,
  state: {
    stakings: [],
    plans: []
  },
  getters: {},
  mutations: {
    SET_STAGE (state, data) {
        state.stakings.unshift(data)
    },
    GET_STAGE (state, data) {
      state.stakings = data
    },
    GET_STAKING_ADMIN (state, data) {
      state.stakings = data.purchases.data
      state.chart = data.chart
    },
    GET_PLAN (state, data) {
      state.plans = data
    },
    GET_STAGE_ACTIVE (state, data) {
      state.active = data
    },
    UPDATE_STAGE (state, data) {
        let objIndex = state.stakings.findIndex((obj => obj.id == data.id));
        state.stakings[objIndex] = data
    },
    REMOVE_STAGE (state, id) {
        const indexOfObject = state.stakings.findIndex(object => {
           return object.id === id;
        });
        state.stakings.splice(indexOfObject)
    }
  },
  actions: {
    async getStakings (context, type) {
        const response = await axios.get(`/api/v1/staking`)
        context.commit('GET_STAGE', response.data)
        return response.data
    },
    async getStakingsAdmin (context) {
      const response = await axios.get(`/api/v1/staking/admin`)
      context.commit('GET_STAGE', response.data)
      return response.data
    },
    async getPlans (context) {
      const response = await axios.get('/api/v1/staking/plans')
      context.commit('GET_PLAN', response.data)
      return response.data
    },
    async storeStaking (context, data) {
        const response = await axios.post('/api/v1/staking', data)
        context.commit('SET_STAGE', response.data)
        return response.data
    },
    async updateStaking (context, data) {
        const response = await axios.post('/api/v1/staking/update', data)
        context.commit('SET_STAGE', response.data)
        return response.data
    },
    async destroyStaking (context, type) {
      const response = await axios.get(`/api/v1/staking/delete/${type}`)
      return response.data
    },
    async getTotalsAdmin (context, payload) {
      const response = await axios.get(`/api/v1/staking/admin/${payload.type}`)
      return response.data
    },
    async downloadFile (context, payload) {
      const response = await axios.get(`/api/v1/staking/purchases-download/${payload.type}/${payload.username}/${payload.page}`)
      return response.data
    },
    async subStaking (context, data) {
      const response = await axios.post('/api/v1/staking/subs', data)
      return response.data
    },
    async getSubStakings (context, data) {
      const response = await axios.get(`/api/v1/staking/subs`)
      context.commit('GET_STAGE', response.data)
      return response.data
    }
  }
}
