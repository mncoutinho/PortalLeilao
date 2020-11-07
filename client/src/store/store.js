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
import bidManager from "./modules/bids/bidManager";
import registro from "./modules/bids/registroLotes";


//notificacoes 
import alerts from "./modules/layout/snap_bar";

//layout
import value from "./modules/layout/valor"
import cards from "./modules/layout/cards"
import showBar from "./modules/layout/showBar"
import steps from "./modules/layout/steps"
import form from  "./modules/layout/forms"


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
    showBar,
    steps,
    bidManager,
    registro,
    alerts,
    viaCep,
    cards,
    form,
    value
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