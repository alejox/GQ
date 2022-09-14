import axios from 'axios'

export default {
  namespaced: true,
  state: {
    access_token: null,
    user: null,
    abilities: [],
    routeApi: '',
    code: null
  },
  getters: {},
  mutations: {
    SET_USER_DATA (state, data) {
      state.user = data
    },
    SET_ACCESS_TOKEN (state, data) {
      state.access_token = data.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + data.token
    },
    SET_CODE (state, data) {
      console.log("DATA STORE", data)
      state.code = data
      axios.defaults.headers.common['DEVICEID'] = data
    },
    CLEAR_USER_DATA (state) {
      state.access_token = null
      state.user = null
      state.abilities = []
      localStorage.removeItem('vuex')
    },
    CHANGE_URL_IMAGE_USER (state, url) {
      state.user.image = url
    },
    UPDATE_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    async login (context, data) {
        const response = await axios.post('/api/v1/signin', data)
        context.commit('SET_ACCESS_TOKEN', response.data)
        const accounts = await axios.get('/api/v1/user/getInfo')
        context.commit('SET_USER_DATA', accounts.data)
        return response.data
    },
    async sendVerification (context, data) {
      const response = await axios.post('/api/v1/verification-mail')
      return response.data
    },
    async verificateMail (context, data) {
      try {
        const response = await axios.post('/api/v1/verificate-mail', data)
        return response.data
      } catch (e) {
        return 'Verification code not match'
      }
    },
    async register (context, data) {
        const response = await axios.post('/api/v1/signup', data)
        return response.data
    },
    async getUserInfo (context) {
      const accounts = await axios.get('/api/v1/user/getInfo')
      context.commit('SET_USER_DATA', accounts.data)
    },
    async logout (context) {
      context.commit('CLEAR_USER_DATA')
      return 'success'
    },
    async recoverPassword (context, email) {
      try {
        const response = await axios.post('/api/recover-password', { email })
        return Promise.resolve(response.data)
      } catch (e) {
        const errorMessages = Object.values(e.response.data.errors)
        context.rootState.errorMessages = errorMessages
        return 'error'
      }
    },
    async resetPassword (context, data) {
      const response = await axios.post('/api/v1/reset-password', data)
      return response
    },
    async passwordReset (context, payload) {
      const response = await axios.post('/api/v1/restore-password', payload)
      return response.data
    },
    async getIdUser (context, user) {
      try {
        const accounts = await axios.get(`/api/v1/id-by-username/${user}`)
        return accounts.data
      } catch (e) {
      } finally {
      }
    },
    async validateAccount (context, payload) {
      try {
        const response = await axios.post('/api/v1/validate-account', payload)
        console.log(response.data)
        return Promise.resolve(response.data)
      } catch (e) {
        const errorMessages = Object.values(e.response.data.errors)
        context.rootState.errorMessages = errorMessages
        return 'error'
      }
    },
    async updateUser (context, payload) {
      const response = await axios.post(`/api/v1/user/update/${payload.id}`, payload.data)
      /* dispatch('getUserInfo') */
      return Promise.resolve(response.data)
    },
    async password (context, payload) {
      const response = await axios.post(`/api/v1/user/password`, payload)
      return response.data
    },
    async verificateKyc (context, payload) {
      const response = await axios.post(`/api/v1/user/kyc`, payload)
      return response.data
    },
    async getVerificateKyc (context, type) {
      const response = await axios.get(`/api/v1/user/kyc/${type}`)
      return response.data
    },
    async sendValidation (context) {
      const response = await axios.post(`/api/v1/user/sendValidation`)
      return response.data
    },
    async validateCode (context, data) {
      const response = await axios.post(`/api/v1/user/validateCode`, data)
      return response.data
    },
    async saveLocation (context, data) {
      const response = await axios.post(`/api/v1/user/newLocation`, data)
      return response.data
    },
    async validateQrCode (context, data) {
      const response = await axios.post(`/api/v1/active-sessions/validate-qr`, data)
      return response.data
    },
    async saveQrCode (context, data) {
      const response = await axios.post(`/api/v1/active-sessions/save-validated-qr`, data)
      context.commit('SET_CODE', data.code)
      return response.data
    },
    async createSession (context, data) {
      const response = await axios.post(`/api/v1/active-sessions/save-session`, data)
      context.commit('SET_ACCESS_TOKEN', response.data)
      const accounts = await axios.get('/api/v1/user/getInfo')
      context.commit('SET_USER_DATA', accounts.data)
      return response.data
    },
  }
}
