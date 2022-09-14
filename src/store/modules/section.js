import axios from 'axios'

export default {
  namespaced: true,
  state: {
    sections: []
  },
  getters: {},
  mutations: {
    SET_SECTIONS (state, data) {
        state.sections.push(data)
    },
    GET_SECTIONS (state, data) {
      state.sections = data
    },
    UPDATE_SECTION (state, data) {
        let objIndex = state.sections.findIndex((obj => obj.id == data.id));
        state.sections[objIndex] = data
    },
    REMOVE_SECTION (state, id) {
        const indexOfObject = state.sections.findIndex(object => {
           return object.id === id;
        });
        state.sections.splice(indexOfObject)
    }
  },
  actions: {
    async getSections (context, id) {
      console.log("TESTING")
      const response = await axios.get(`/api/v1/course/section/${id}`)
      console.log(response.data)
      context.commit('GET_SECTIONS', response.data)
      return response.data.meta
    },
    async storeSection (context, data) {
      const response = await axios.post('/api/v1/course/section', data)
      context.commit('SET_SECTIONS', response.data)
      return response.data
    },
    async updateSection (context, payload) {
      const response = await axios.post(`/api/v1/course/section/update/${payload.id}`, payload.data)
      context.commit('UPDATE_SECTION', response.data)
      return response.data
    },
    async destroySection (context, id) {
      const response = await axios.get(`/api/v1/course/section/delete/${id}`)
      context.commit('REMOVE_SECTION', id)
      return response.data.meta
    }
  }
}
