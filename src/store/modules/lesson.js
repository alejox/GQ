import axios from 'axios'

export default {
  namespaced: true,
  state: {
    lessons: []
  },
  getters: {},
  mutations: {
    SET_LESSONS (state, data) {
        state.lessons.unshift(data)
    },
    GET_LESSONS (state, data) {
      state.lessons = data
    },
    UPDATE_LESSON (state, data) {
        let objIndex = state.lessons.findIndex((obj => obj.id == data.id));
        state.lessons[objIndex] = data
    },
    REMOVE_LESSON (state, id) {
        const indexOfObject = state.lessons.findIndex(object => {
           return object.id === id;
        });
        state.lessons.splice(indexOfObject)
    }
  },
  actions: {
    async getLessons (context) {
      const response = await axios.get('/api/v1/course/lesson')
      context.commit('GET_LESSONS', response.data)
      return response.data.meta
    },
    async storeLesson (context, data) {
      const response = await axios.post('/api/v1/course/lesson', data)
      context.commit('SET_LESSONS', response.data)
      return response.data
    },
    async updateLesson (context, payload) {
      const response = await axios.post(`/api/v1/course/lesson/update/${payload.id}`, payload.data)
      context.commit('UPDATE_LESSON', response.data)
      return response.data
    },
    async destroyLesson (context, id) {
      const response = await axios.get(`/api/v1/course/lesson/delete/${id}`)
      context.commit('REMOVE_LESSON', id)
      return response.data.meta
    }
  }
}
