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
        .ref("artigo/"+id+"/lances")
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
        alert("computado "+ doc.key);
      })
    },
    getInfo({commit},id){
      firebase
      .database()
      .ref("info/"+id)
      .on('child_added',doc =>{
        alert("tem uma mensagem")
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
}