import firebase from "firebase/app";
export default {
  state: {
    items: [],
    myItems: [],
    item: {
      imgUrl: []
    },
    lances: [],
    target: null,
    msg: null,
    resultLances: []
  },
  mutations: {
    resultLances(state, payload) {
      state.resultLances = payload
    },
    setLances(state, payload) {
      state.lances = payload;
    },
    clearData(state) {
      state.lances = []
      state.item = {
        name: null,
        imgUrl: [],
        description: null,
        category: null

      }
      state.msg = null
    },
    setItem(state, payload) {
      state.item = payload;
    },
    setAllItems(state, payload) {
      state.items = payload;
    },
    setMyItems(state, payload) {
      state.myItems = payload;
    },
    setMSG(state, payload) {
      state.msg = payload;
    }
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
          commit('ALGO_INESPERADO', err.message)
        });
    },
    getMyItems({ commit }, filter) {
      firebase
        .firestore()
        .collection("artigo")
        .where("IdOrganizer", "==", filter)
        .onSnapshot(snapshot => {
          let items = []
          snapshot.forEach((doc) => {
            items.push({
              id: doc.id,
              active: doc.data().active,
              category: doc.data().category,
              description: doc.data().description,
              imgUrl: doc.data().imgUrl,
              initialBid: doc.data().initialBid,
              name: doc.data().name,
              idOrganizer: doc.data().IdOrganizer,
            })
          })
          commit('setMyItems', items)
        })
    },
    getItemByID({ commit }, payload) {
      firebase
        .firestore()
        .collection("artigo")
        .doc(payload)
        .onSnapshot(doc => {
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
    },
    createItem({ commit }, payload) {
      firebase
        .firestore()
        .collection("artigo")
        .add(payload)
        .then((doc) => {
          commit("setItem", doc);
          return commit('CREATED');
        })
        .catch((err) => {
          commit('ALGO_INESPERADO', err.message);
        });
    },
    //a testar
    updateItem({ commit }, payload) {
      console.log(payload)
      
      if(!payload.active){
        payload.active = null
      }

      firebase
        .firestore()
        .collection("artigo")
        .doc(payload.id)
        .update(payload)
        .then(() => {
          commit('UPDATED');
        })
        .catch((err) => {
          commit('ALGO_INESPERADO', err.message);
        });
    },
    deleteItem({ commit }, payload) {
      firebase
        .firestore()
        .collection("artigo")
        .doc(payload)
        .delete()
        .then(() => {
          commit('DELETED');
        })
        .catch((err) => {
          commit('ALGO_INESPERADO', err.message);
        });
    },
  },
  getters: {
    itensFinalizados(state) {
      return state.items.filter(itensAtivo => itensAtivo.active === false)
    },
    itensAtivos(state) {
      return state.items.filter(itensAtivo => itensAtivo.active === true)
    },
  },
}