import axios from 'axios'

export default {
  namespaced: true,
  state: {
    team: [],
    users: []
  },
  getters: {},
  mutations: {
    GET_TEAM (state, data) {
      state.team = data
    },
    GET_USERS (state, data) {
      state.users = data
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
    async getTeam (context, id) {
      const response = await axios.get(`/api/v1/user/team/${id}`)
      context.commit('GET_TEAM', response.data)
      return response.data
    },
    async getIdUser (context, id) {
      const response = await axios.get(`/api/v1/user/username/${id}`)
      return response.data
    },
    async getTeamCounter (context) {
      const response = await axios.get(`/api/v1/user/team/counter`)
      return response.data
    },
    async getUsers (context, payload) {
      const response = await axios.get(`/api/v1/user/admin/${payload.username}/${payload.page}`)
      context.commit('GET_USERS', response.data.data)
      return response.data.meta
    },
    async getMostRef (context) {
      const response = await axios.get(`/api/v1/user/most-ref`)
      return response.data
    },
  }
}
