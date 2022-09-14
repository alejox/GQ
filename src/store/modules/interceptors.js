import axios from 'axios'

import store from '@/store/index'
import router from '../../router';

axios.interceptors.request.use(req => {
    store.state.interceptors.interceptor_errors = []
    return req
});

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		console.log(error.request.status)
		if(error.request.status == 401) {
			console.log("DESAUTORIZADO")
			router.push({ name: 'Signin' })
		}
		if(error.response.data.message) {
			store.state.interceptors.interceptor_errors.push(error.response.data.message)
		} else {
			error.response.data.errors.forEach(element => {
				store.state.interceptors.interceptor_errors.push(element.message)
			});
		}
	}
);

export default {
	namespaced: true,
	state: {
		interceptor_errors: []
	},
	actions: {
        setError (context, error) {
            context.commit('SET_USER_DATA', error)
        }
    },
	mutations: {
		SET_USER_DATA(state, data) {
			state.interceptor_errors = data
		}
	}
}