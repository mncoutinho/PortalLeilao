//depedencias
import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";

//usuarios 
import user from "./modules/users/user";
import perfil from "./modules/users/perfil";
import login from "./modules/users/login";

//item
import item from "./modules/items/item";
import lances from "./modules/items/lances";
import info from "./modules/items/info";

//leilao
import bid from "./modules/bids/bid";

//notificacoes 
import mensagens from "./modules/mensagens";
import alerts from "./modules/alerts";

//layout
import step from "./modules/laylout/steps";
import navEfoter from "./modules/laylout/nav&foter"
import form from  "./modules/laylout/forms"

//API
import viaCep from "./modules/API/viaCep"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userApp: user,
    perfil,
    login,
    itemApp: item,
    lances,
    info,
    bidApp: bid,
    alerts,
    mensagens,
    stepApp: step,
    form,
    navEfoter,
    viaCep
  },
  state: {
    category: [],
    uf: [],
    alerts:[],
    mensagens:[],
    admView: false
  },
  mutations: {
    setCategories(state, payload) {
      state.category = payload;
    },
    setUF(state, payload) {
      state.uf = payload;
    },
    setAdmView(state, payload){
      state.admView = payload
    }
  },
  actions: {
    //categorias
    getcategories({ commit }) {
      firebase
        .firestore()
        .collection("item")
        .doc("category")
        .get()
        .then((doc) => {
          let categories = [];
          categories.push((categories = doc.data().item));
          return commit("setCategories", categories);
        });
    },
    getUF({ commit }) {
      firebase
        .firestore()
        .collection("item")
        .doc("uf")
        .get()
        .then((doc) => {
          let estados = [];
          estados = doc.data().item;
          return commit("setUF", estados);
        });
    },
  },
  getters: {},
});