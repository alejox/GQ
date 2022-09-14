import axios from 'axios'

export default {
  namespaced: true,
  state: {
    conversations: [],
    chats: []
  },
  getters: {},
  mutations: {
    SET_CONVERSATIONS (state, data) {
      state.conversations = data
      state.chats = []
    },
    SET_CHAT (state, data) {
        state.chats = data
    },
    SET_TO_CHAT (state, data) {
        state.chats.push(data)
    },
  },
  actions: {
    async getConversations (context) {
        try {
          const accounts = await axios.get('/api/v1/chats/conversations')
          context.commit('SET_CONVERSATIONS', accounts.data)
        } catch (e) {
          console.log(e)
        }
    },
    async getChat (context, id) {
        try {
          const accounts = await axios.get(`/api/v1/chats/chat/${id}`)
          console.log("as", accounts)
          context.commit('SET_CHAT', accounts.data)
        } catch (e) {
          console.log(e)
        }
    },
    async getUsersToChat (context) {
        try {
          const accounts = await axios.get('/api/v1/chats/users')
          context.commit('SET_CONVERSATIONS', accounts.data)
        } catch (e) {
          console.log(e)
        }
    },
    async newMessage (context, data) {
        try {
        context.rootState.errorMessages = []
        const response = await axios.post('/api/v1/chats/create',
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: function( progressEvent ) {
                context.rootState.progressBarState = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ));
                }.bind(this)
            }
        )
        context.commit('SET_TO_CHAT', response.data)
      } catch (e) {
        e.response.data.forEach(element => {
           context.rootState.errorMessages.push(element.message)
        });
        return 'error'
      }  finally {
        context.rootState.progressBarState = null;
      }
    }
  }
}
