// Dependencia do VUE
import Vue from "vue";
//Aponta o arquivo App
import App from "./App.vue";
// Dependencia do ROUTER
import VueRouter from "vue-router";
//Dependencia das Rotas
import routes from "./routes/routes";
// Dependencia Vuetify
import vuetify from './plugins/vuetify';
//Dependencia do Vuelidate
import Vuelidate from 'vuelidate'
//Dependencia do Vuex
import store from './store/store';
//Dependencia do FontAwesome
import '@fortawesome/fontawesome-free/css/all.css';
// Dependencia Firebase
import firebase from 'firebase';
import 'firebase/storage'
// Componente de Alerta
import Alerta from "./components/inputUser/componentsUser/Alerta.vue";
//Instancia do Vue, utilizando o ROutes
Vue.use(VueRouter,Vuelidate);
// Instancia de Rotas
const router = routes;
Vue.config.productionTip = false;
// Instancia do Componente
Vue.component("app-alert", Alerta);
// Dependencia das Configs do Firebase
const config = {  
  apiKey: "AIzaSyBbTw26fno2A6WrlJjj7FXSHcQ1xXZpMgw",
  authDomain: "portalleilao-26290.firebaseapp.com",
  databaseURL: "https://portalleilao-26290.firebaseio.com",
  projectId: "portalleilao-26290",
  storageBucket: "portalleilao-26290.appspot.com",
  messagingSenderId: "824708684017",
  appId: "1:824708684017:web:7d337614f396ff93687150",
  measurementId: "G-L29VYEQZ83"
};


new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
    created() {
      this.$store.commit('VISIBLE');
      // Instancia do Firebase
      firebase.initializeApp(config);
      //verificador do login
      firebase.auth().onAuthStateChanged((user) =>{
        if(user){
          this.$store.commit('setUser',user);
          firebase.auth().languageCode = 'pt';
          if(!user.emailVerified){
              user.sendEmailVerification().then(() => {
                this.$store.commit('MSG_FEED',"Por favor verifique sua caixa de e-mail para validar sua conta");
              });
          }
          firebase
              .firestore()
              .collection("user")
              .doc(user.uid)
              .get()
              .then((doc) => {
                if(doc.data() != undefined){
                  return this.$store.commit("setUserData", doc.data());
                }else{
                  this.$store.commit('ALERT', 'Você, não completou o seu cadastro')
                  return this.$router.push('/criar').then(()=>{
                    this.$store.commit('setStep', 1)
                  })
                } 
              })
        }
      })
      this.$store.dispatch('getAllItems');
      this.$store.dispatch('getAllBids');
      this.$store.dispatch('getUF');
    
    },
}).$mount("#app");





