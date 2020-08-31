import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";

const user = {
  state: {
    user: {},
    loading: false,
    error: null,
    userData: {},
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    resetUser(state) {
      state.user = {};
      state.userData = {};
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    setUserData(state, payload) {
      state.userData = payload;
    },
  },
  actions: {
    resetPassword({ commit }, payload) {
      commit;
      console.log(payload.email);
      firebase
        .auth()
        .sendPasswordResetEmail(payload.email)
        .then(() => {
          alert("Verifique sua caixa de email para altera sua senha");
        });
    },
    //isso cria um usuario lucas
    signUserUp({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.senha)
        .then((user) => {
          commit("setLoading", false);
          const newUser = user.user;
          commit("setUser", newUser);

          const userData = {
            bairro: payload.bairro,
            cep: payload.cep,
            cidade: payload.cidade,
            complemento: payload.complemento,
            cpf: payload.cpf,
            endereco: payload.endereco,
            nome: payload.nome,
            tel: payload.tel,
            uf: payload.uf,
            numero: payload.numero,
            photoUrl: "https://cdn150.picsart.com/upscale-245339439045212.png",
          };
          firebase
            .firestore()
            .collection("user")
            .doc(user.user.uid)
            .set(userData)
            .then(alert("cadastrado com sucesso"));
        })
        .catch((err) => {
          commit("setLoading", false);
          commit("setError", err);
          console.log(err);
        });
    },
    getData({ commit }, payload) {
      firebase
        .firestore()
        .collection("user")
        .doc(payload)
        .get()
        .then((doc) => {
          const dados = doc.data();
          commit("setUserData", dados);
        })
        .catch((err) => {
          commit("setLoading", false);
          commit("setError", err);
          console.log(err);
        });
    },
    //isso loga o lucas
    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.senha)
        .then((data) => {
          console.log(data.user.uid);
          commit("setLoading", false);
          let userProfile = data.user;
          commit("setUser", userProfile);
        })
        .catch((err) => {
          commit("setLoading", false);
          commit("setError", err);
          console.log(err);
        });
    },
    loginGoogle({ commit }) {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((doc) => {
          let userProfile = doc.user;
          commit("setUser", userProfile);
        });
    },
    cleanError({ commit }) {
      commit("clearError");
    },
    singOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("resetUser");
          alert("Usuario deslogou");
        });
    },
    uploadProfileImg({ commit }, { user, photo }) {
      console.log(user);
      firebase
        .firestore()
        .collection("user")
        .doc(user)
        .update({ photoUrl: photo })
        .then(() => {
          commit;
          alert("alterado com sucesso");
        });
    },
  },
  getters: {
    user(state) {
      console.log(state);
      return state.user;
    },
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
  },
};

//modulo item
const item = {
  state: {
    items: [],
    item: {},
    lances: [],
    target: "",
  },
  mutations: {
    setLances(state, payload) {
      state.lances = payload;
    },
    resetLances(state) {
      state.lances = {};
    },
    resetItem(state) {
      state.item = {
        active: true,
        category: "",
        description: "",
        imgUrl: [],
        initialBid: 0,
        name: "",
        bids: [],
      };
    },
    setItem(state, payload) {
      state.item = payload;
    },
    setAllItems(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    getAllItems({ commit }) {
      firebase
        .firestore()
        .collection("artigo")
        .orderBy("name")
        .get()
        .then((snapshot) => {
          let ItemList = [];
          snapshot.forEach((doc) => {
            ItemList.push({
              id: doc.id,
              active: doc.data().active,
              category: doc.data().category,
              description: doc.data().description,
              imgUrl: doc.data().imgUrl,
              initialBid: doc.data().initialBid,
              name: doc.data().name,
              idOrganizer: doc.data().IdOrganizer,
            });
          });
          return commit("setAllItems", ItemList);
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado. " + err.message);
        });
    },
    getItemByID({ commit }, payload) {
      console.log(payload)
      firebase
        .firestore()
        .collection("artigo")
        .doc(payload)
        .get()
        .then((doc) => {
          const item = {
            id: doc.id,
            active: doc.data().active,
            category: doc.data().category,
            description: doc.data().description,
            imgUrl: doc.data().imgUrl,
            initialBid: doc.data().initialBid,
            name: doc.data().name,
            idOrganizer: doc.data().IdOrganizer,
          };
          return commit("setItem", item);
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado. " + err.message);
        });
    },
    createItem({ commit }, payload) {
      firebase
        .firestore()
        .collection("artigo")
        .add(payload)
        .then((doc) => {
          commit("setItem", doc);
          return alert(doc.id);
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado. " + err.message);
        });
    },
    addLance({ commit }, { id, payload }) {
        firebase
        .database()
        .ref("artigo/"+id)
        .push(payload)
        .then(doc => {
          commit;
          return alert(doc.uid + " lance computado");
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado. " + err.message);
        });
    },
    getLances({ commit }, payload) {
      let referencia = firebase.database().ref("artigo/" + payload);
      let lances = [];
      referencia.on('child_added', doc =>{
        console.log("foi adicionado lance")
        lances.push({
          idUser: doc.exportVal().idUser,
            lance: doc.val().lance,
            time: doc.exportVal().time,
            user: doc.exportVal().user
        })
        commit("setLances", lances);
      })
    },
    finishLance({commit}, {id,status}){
      firebase.firestore()
      .collection("artigo/")
      .doc(id)
      .update({active:status}).then(doc =>{
        commit("setItem",doc);
      })
    },
    //a testar
    updateItem({ commit }, payload) {
      firebase
        .firestore()
        .collection("artigo")
        .doc(payload.id)
        .update(payload)
        .then((doc) => {
          commit("setItem", doc);
          alert("alterado com sucesso");
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado. " + err.message);
        });
    },
    deleteItem({ commit }, payload) {
      console.log(payload);
      commit;
      firebase
        .firestore()
        .collection("artigo")
        .doc(payload)
        .delete()
        .then(() => {
          alert("Deletado com sucesso");
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado. " + err.message);
        });
    },
  },
  getters: {},
};
//leilao
const bid = {
  state: {
    bids: [],
    bid: {},
  },
  mutations: {
    setAllBids(state, payload) {
      state.bids = payload;
    },
    setBid(state, payload) {
      state.bid = payload;
    },
    resetBid(state) {
      state.bid = {
        name: "",
        description: "",
        items: [],
        local: "",
        startsOn: "",
        closedAt: "",
        organizer: "",
        mail: "",
        phone: "",
      };
    },
  },
  actions: {
    getAllBids({ commit }) {
      firebase
        .firestore()
        .collection("leilao")
        .get()
        .then((snapshot) => {
          let bidsList = [];
          snapshot.forEach((doc) => {
            bidsList.push({
              id: doc.id,
              name: doc.data().name,
              description: doc.data().description,
              items: doc.data().items.length,
              startsOn: doc.data().startsOn,
              closedAt: doc.data().closedAt,
              idOrganizer: doc.data().idOrganizer,
              imgUrl: doc.data().imgUrl,
            });
          });
          return commit("setAllBids", bidsList);
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado. " + err.message);
        });
    },
    createBid({ commit }, payload) {
      firebase
        .firestore()
        .collection("leilao")
        .add(payload)
        .then((doc) => {
          commit("setBid", doc);
          return alert(payload.name + " criado com sucesso");
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado. " + err.message);
        });
    },
    deleteBid({ commit }, payload) {
      commit;
      firebase
        .firestore()
        .collection("leilao")
        .doc(payload)
        .delete()
        .then(() => {
          alert("deletado com sucesso");
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado. " + err.message);
        });
    },
    updateBid(payload) {
      firebase
        .firestore()
        .collection("leilao")
        .doc(payload.id)
        .update(payload)
        .then((doc) => {
          return alert(doc.name + " atualizado com sucesso");
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado. " + err.message);
        });
    },
    getBidById({ commit }, payload) {
      firebase
        .firestore()
        .collection("leilao")
        .doc(payload.id)
        .then((doc) => {
          return commit("setBid", doc);
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado. " + err.message);
        });
    },
  },
};

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    userApp: user,
    itemApp: item,
    bidApp: bid,
  },
  state: {
    category: [],
    uf: [],
  },
  mutations: {
    setCategories(state, payload) {
      state.category = payload;
    },
    setUF(state, payload) {
      state.uf = payload;
    },
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
