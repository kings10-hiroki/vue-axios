import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.config.productionTip = false

axios.defaults.baseURL =
  'https://firestore.googleapis.com/v1/projects/vue-axios-bb81d/databases/(default)/documents';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
