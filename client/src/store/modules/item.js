import firebase from "firebase/app";
export default{
  state: {
    items: [],
    item: {},
    lances: [],
    target: "",
    msg: null
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
    setMSG(state, payload){
      state.msg = payload
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
          commit('ALGO_INESPERADO', err.message);
        });
    },
    createItem({ commit }, payload) {
      firebase
        .firestore()
        .collection("artigo")
        .add(payload)
        .then((doc) => {
          commit("setItem", doc);
          return commit('MOSTRAR_CONTEUDO', doc.id);
        })
        .catch((err) => {
          commit('ALGO_INESPERADO', err.message);
        });
    },
    addLance({ commit }, { id, payload }) {
        firebase
        .database()
        .ref("artigo/"+id+"/lances")
        .push(payload)
        .then(doc => {
          commit;
          return commit('MOSTRAR_CONTEUDO', doc.key + " lance computado");
        })
        .catch((err) => {
          commit('ALGO_INESPERADO', err.message)
        });
    },
    getLances({ commit }, payload) {
      let lances = [];
      firebase
      .database()
      .ref("artigo/" + payload+"/lances")
     
      .on('child_added', doc =>{
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
    addInfo({commit},{id,msg}){
      firebase
      .database()
      .ref("info/"+id)
      .push(msg)
      .then((doc)=>{
        commit;
        commit('ALGO_INESPERADO', doc.key)
      })
    },
    getInfo({commit},id){
      firebase
      .database()
      .ref("info/",id)
      .on('child_added',doc =>{
        commit('POSSUI_MENSAGEM')
        let msg = [] 
        msg.push(doc.msg)
        commit("setMSG", msg)
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
          commit('ALTERADO_SUCESSO');
        })
        .catch((err) => {
          commit('ALGO_INESPERADO', err.message);
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
          commit('DELETADO');
        })
        .catch((err) => {
          commit('ALGO_INESPERADO', err.message);
        });
    },
  },
  getters: {},
}