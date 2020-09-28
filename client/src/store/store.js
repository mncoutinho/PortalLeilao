import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import alerts from "./modules/alerts";
import user from "./modules/user";
import item from "./modules/item";
import bid from "./modules/bid";
import mensagens from "./modules/mensagens"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userApp: user,
    itemApp: item,
    bidApp: bid,
    alerts,
    mensagens
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