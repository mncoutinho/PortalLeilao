import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
    loading:false,
    error:null
  },
  mutations: {
    setUser(state,payload){
      state.user = payload
    }
  },
  actions: {
   async getCurrentUser({commit}){
     let user = await firebase.auth().currentUser
     commit('setUser', user) 
     

    },
    signUserUp({commit},payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.senha)
      .then(
         user => {
           const newUser = {
             id:user.user,
             registered:[],
           }
           commit('setUser',newUser)
           alert('Sua conta foi cadastrada com sucesso!')
          }).catch(err => {
            alert('Aconteceu algo inesperado. ' + err.message)
          });
    },
    signUserIn({commit},payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.senha)
      .then(
        data => {
          let newUser = {
            displayname:data.user.displayname,
            email:data.user.email,
            phoneNumber:data.user.phoneNumber,
            photoUrl:data.user.photoUrl,
            refreshToken:data.user.refreshToken,
            uid:data.user.uid
          }
          commit('setUser',newUser)

        }
      )
      .catch(err => {alert('Aconteceu algo inesperado. ' + err.message)
      })
    }


  },
  getters:{
    user(state){
      console.log(state)
      return state.user
    }
  },
})