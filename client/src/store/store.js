import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    account: undefined,
    logged: false,
  },

  mutations: {
    logged(account){
      this.state.account = account;
      this.state.logged = true
    }
  },
  actions: {
  },
  modules: {
  }
})
