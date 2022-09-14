import axios from 'axios'

export default {
  namespaced: true,
  state: {
    stages: []
  },
  getters: {},
  mutations: {
    SET_STAGE (state, data) {
        state.stages.unshift(data)
    },
    GET_STAGE (state, data) {
      state.stages = data
    },
    GET_STAGE_ACTIVE (state, data) {
      state.active = data
    },
    UPDATE_STAGE (state, data) {
        let objIndex = state.stages.findIndex((obj => obj.id == data.id));
        state.stages[objIndex] = data
    },
    REMOVE_STAGE (state, id) {
        const indexOfObject = state.stages.findIndex(object => {
           return object.id === id;
        });
        state.stages.splice(indexOfObject)
    }
  },
  actions: {
    async getStages (context) {
        const response = await axios.get('/api/v1/stage')
        context.commit('GET_STAGE', response.data)
        return response.data.meta
    },
    async storeStage (context, data) {
        const response = await axios.post('/api/v1/stage', data)
        context.commit('SET_STAGE', response.data)
        return response.data
    },
    async updateStage (context, payload) {
        const response = await axios.post(`/api/v1/stage/update/${payload.id}`, payload.data)
        context.commit('UPDATE_STAGE', response.data)
        return response.data
    },
    async destroyStage (context, id) {
        const response = await axios.get(`/api/v1/stage/delete/${id}`)
        context.commit('REMOVE_STAGE', id)
        return response.data.meta
    },
    async getStageActive (context) {
      const response = await axios.get('/api/v1/stage/active')
      context.commit('GET_STAGE_ACTIVE', response.data)
      return response.data.meta
  },
  }
}
