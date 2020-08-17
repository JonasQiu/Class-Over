import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './moduleStore/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  module: {
    // 模块store
    userStore
  }
})
