import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import api from './pages/api/index.js'

// 全局组件
import back from './pages/component/return'
import floatNavTo from './pages/component/floatNavTo'
import tip from './pages/component/tip'
import loading from './pages/component/loading'
// 全局注册
Vue.component('back', back)
Vue.component('floatNavTo', floatNavTo)
Vue.component('loading', loading)
Vue.component('tip', tip)

Vue.config.productionTip = false
Vue.prototype.$api = api
App.mpType = 'app'

const app = new Vue({
  store,
  render: h => h(App)
}).$mount()
