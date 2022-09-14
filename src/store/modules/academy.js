import axios from 'axios'

export default {
  namespaced: true,
  state: {
    courses: [],
    categories: [],
    top_courses: [],
    course: null,
    subscriptions: []
  },
  getters: {},
  mutations: {
    SET_COURSES (state, data) {
        state.courses.unshift(data)
    },
    GET_COURSES (state, data) {
      state.courses = data
    },
    GET_COURSE (state, data) {
      state.course = data
    },
    GET_CATEGORIES (state, data) {
      state.categories = data
    },
    GET_TOP_COURSES (state, data) {
      state.top_courses = data
    },
    UPDATE_COURSE (state, data) {
        let objIndex = state.courses.findIndex((obj => obj.id == data.id));
        state.courses[objIndex] = data
    },
    REMOVE_COURSE (state, id) {
        const indexOfObject = state.courses.findIndex(object => {
           return object.id === id;
        });
        state.courses.splice(indexOfObject)
    },
    GET_SUBS (state, data) {
      state.subscriptions = data
  },
  },
  actions: {
    async getCourses (context) {
      const response = await axios.get('/api/v1/course')
      context.commit('GET_COURSES', response.data.data)
      return response.data.meta
    },
    async getTopCourses (context) {
      const response = await axios.get('/api/v1/course/top')
      context.commit('GET_TOP_COURSES', response.data)
      return response.data.meta
    },
    async storeCourse (context, data) {
      const response = await axios.post('/api/v1/course', data)
      context.commit('SET_COURSES', response.data)
      return response.data
    },
    async updateCourse (context, payload) {
      const response = await axios.post(`/api/v1/course/update/${payload.id}`, payload.data)
      context.commit('UPDATE_COURSE', response.data)
      return response.data
    },
    async destroyCourse (context, id) {
      const response = await axios.get(`/api/v1/course/delete/${id}`)
      context.commit('REMOVE_COURSE', id)
      return response.data.meta
    },
    async getCourse (context, data) {
      const response = await axios.get(`/api/v1/course/get/${data}`)
      context.commit('GET_COURSE', response.data)
      return response.data.meta
    },
    async getSubscribed (context) {
      const response = await axios.get('/api/v1/course/subscriptions')
      context.commit('GET_SUBS', response.data)
      return response.data.meta
    },
  }
}
