import axios from 'axios'

export default {
  namespaced: true,
  state: {
    plans: []
  },
  getters: {},
  mutations: {
    SET_PLAN (state, data) {
        state.plans.unshift(data)
    },
    GET_PLAN (state, data) {
      state.plans = data
    },
    UPDATE_PLAN (state, data) {
        let objIndex = state.plans.findIndex((obj => obj.id == data.id));
        state.plans[objIndex] = data
    },
    REMOVE_PLAN (state, id) {
        const indexOfObject = state.plans.findIndex(object => {
           return object.id === id;
        });
        state.plans.splice(indexOfObject)
    }
  },
  actions: {
    async getPlans (context, type) {
        const response = await axios.get(`/api/v1/plan`)
        context.commit('GET_PLAN', response.data)
        return response.data
    },
    async getPlansAdmin (context) {
      const response = await axios.get('/api/v1/plan/admin')
      context.commit('GET_PLAN', response.data.data)
      return response.data.meta
  },
    async storePlan (context, data) {
        const response = await axios.post('/api/v1/plan', data)
        context.commit('SET_PLAN', response.data)
        return response.data
    },
    async updatePlan (context, payload) {
        const response = await axios.post(`/api/v1/plan/update/${payload.id}`, payload.data)
        context.commit('UPDATE_PLAN', response.data)
        return response.data
    },
    async destroyPlan (context, id) {
        const response = await axios.get(`/api/v1/plan/delete/${id}`)
        context.commit('REMOVE_PLAN', id)
        return response.data.meta
    }
  }
}
