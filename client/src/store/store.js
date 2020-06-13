import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
    loading:false,
    error:null
  },
  user:{
id:'sdadasdasd',
registered:['dssadadsa']
  },
  mutations: {
    setUser(state,payload){
      state.user = payload
    }
  },
  actions: {
    signUserUp({commit},payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.senha)
      .then(
         user => {
           const newUser = {
             id:user.uid,
             registered:[],
             
           }
           commit('setUser',newUser)
        }
     )
     .catch(
       error => {
         console.log(error)
       }
     )
    },
    signUserIn({commit},payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.senha)
      .then(
        user => {
          const newUser = {
            id:user.uid,
            registered:[],
          }
          commit('setUser',newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }      
      )
    }

  },
  modules: {
  },
  getters:{
    user(state){
      return state.user
    }
  }
})
