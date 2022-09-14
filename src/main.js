import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import '@/assets/css/navbar.css'
import '@/assets/css/sidebar.css'
import '@/assets/css/styles.css'
import '@/assets/css/bootstrap.css'

import globalComponent from './plugins/global-components'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import vueCountryRegionSelect from 'vue3-country-region-select'
import Toaster from '@meforma/vue-toaster';

import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css

import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)

app.config.globalProperties.mode = 'prod'

const prodApi = 'https://veta.elvwalletapi.com'
const devApi = 'http://127.0.0.1:3030'

app.config.globalProperties.apiUrl = app.config.globalProperties.mode == 'dev' ? devApi : prodApi

app.use(VueApexCharts);
app.use(vue3videoPlay);
app.use(router)
app.use(store)
app.use(globalComponent)
app.use(BootstrapVue3)
app.use(Toaster)
app.use(vueCountryRegionSelect)

app.mount('#app')

import axios from 'axios'
axios.defaults.baseURL = app.config.globalProperties.apiUrl

const vuex = JSON.parse(localStorage.getItem('vuex'))
if (vuex) {
  if (vuex.auth) {
    if (vuex.auth.access_token) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + vuex.auth.access_token
    }
    if(vuex.auth.code) {
      axios.defaults.headers.common['DEVICEID'] = vuex.auth.code
    }
  }
}

// success,danger
window.openNotification = function (text = 'Transaction executed successfully', variant = 'success') {

    app.$toast.show(text,
        {
            type: variant,
            position: "top-right",
            duration: 2000,
        }
    )
}
