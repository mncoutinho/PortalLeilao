import firebase from "firebase/app";
export default{
  state: {
    items: [],
    myItems:[],
    item: {},
    lances: [],
    target: "",
    msg: null
  },
  mutations: {
    setLances(state, payload) {
      state.lances = payload;
    },
    clearData(state){
      state.lances = []
      state.item = {}
      state.msg = null
    },
    setItem(state, payload) {
      state.item = payload;
    },
    setAllItems(state, payload) {
      state.items = payload;
    },
    setMyItems(state, payload){
      state.myItems = payload;
    },
    setMSG(state, payload){
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
    getMyItems({commit}, filter){
      console.log(filter)
      firebase
      .firestore()
      .collection("artigo")
      .where("IdOrganizer", "==", filter)
      .onSnapshot(snapshot =>{
        let items = []
        snapshot.forEach((doc) => {
          console.log('achei')
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
      console.log(payload)
      firebase
        .firestore()
        .collection("artigo")
        .doc(payload)
        .onSnapshot(doc =>{
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
        commit('MOSTRAR_CONTEUDO','novo lance feito pelo '+ doc.exportVal().user);
        lances.push({
          idUser: doc.exportVal().idUser,
            lance: doc.val().lance,
            time: doc.exportVal().time,
            user: doc.exportVal().user
        })
        commit("setLances", lances);
        
      })
    },
    addInfo({commit},{info,id}){
      firebase
      .database()
      .ref("artigo/"+id+"/mensagem/")
      .push(info)
      commit
    },
    getInfo({commit},id){
      let msg = [] 
      firebase
      .database()
      .ref("artigo/"+id+"/mensagem")
      .on('child_added',doc =>{
        console.log("foi adicionado uma mensagem")
        commit('MOSTRAR_CONTEUDO',doc.exportVal().text)
        msg.push({
          text: doc.exportVal().text,
          time: doc.exportVal().time
        })
        console.log(msg)
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
  getters: {
    itensFinalizados(state){
      return state.items.filter(itensAtivo => itensAtivo.active === false)
    },
    itensAtivos(state){
      return state.items.filter(itensAtivo => itensAtivo.active === true)
    },
  },
}