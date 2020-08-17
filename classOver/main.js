import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import api from './pages/api/index.js'

Vue.config.productionTip = false
Vue.prototype.$api = api
App.mpType = 'app'

const app = new Vue({
  store,
  render: h => h(App)
}).$mount()
