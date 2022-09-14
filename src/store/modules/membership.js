import axios from 'axios'

export default {
  namespaced: true,
  state: {
    memberships: []
  },
  getters: {},
  mutations: {
    SET_MEMBERSHIPS (state, data) {
        state.memberships.unshift(data)
    },
    GET_MEMBERSHIPS (state, data) {
      state.memberships = data
    },
    UPDATE_MEMBERSHIP (state, data) {
        let objIndex = state.memberships.findIndex((obj => obj.id == data.id));
        state.memberships[objIndex] = data
    },
    REMOVE_MEMBERSHIP (state, id) {
        const indexOfObject = state.memberships.findIndex(object => {
           return object.id === id;
        });
        state.memberships.splice(indexOfObject)
    }
  },
  actions: {
    async getMemberships (context, type) {
        const response = await axios.get(`/api/v1/membership/${type}`)
        context.commit('GET_MEMBERSHIPS', response.data)
        return response.data
    },
    async getMembershipsAdmin (context) {
      const response = await axios.get('/api/v1/membership/admin')
      context.commit('GET_MEMBERSHIPS', response.data.data)
      return response.data.meta
  },
    async storeMembership (context, data) {
        const response = await axios.post('/api/v1/membership', data)
        context.commit('SET_MEMBERSHIPS', response.data)
        return response.data
    },
    async updateMembership (context, payload) {
        const response = await axios.post(`/api/v1/membership/update/${payload.id}`, payload.data)
        context.commit('UPDATE_MEMBERSHIP', response.data)
        return response.data
    },
    async destroyMembership (context, id) {
        const response = await axios.get(`/api/v1/membership/delete/${id}`)
        context.commit('REMOVE_MEMBERSHIP', id)
        return response.data.meta
    },
    async getMembershipsActive (context) {
      const response = await axios.get('/api/v1/membership/active')
      context.commit('GET_MEMBERSHIPS', response.data)
      return response.data.meta
  },
  }
}
