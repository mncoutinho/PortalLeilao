import firebase from "firebase/app";
export default{
  state: {
     bids: [],
     bid: {},
     myBids:[]
  },
  mutations: {
    setAllBids(state, payload) {
      state.bids = payload
     },
    setBid(state, payload) {
      state.bid = payload;
    },
    setMyBids(state, payload){
      state.myBids = payload
    },
    resetBid(state) {
      state.bid = {};
    }
  },
  actions: {
      getAllBids({ commit }) {
        firebase.firestore().collection("leilao").get()
          .then(snapshot => {
            let bidsList = [];
            snapshot.forEach(doc => {
              bidsList.push({
                id:doc.id,
                name:doc.data().name,
                description:doc.data().description,
                imgUrl: doc.data().imgUrl,
                items:doc.data().items,
                startsOn: doc.data().startsOn,
                closedAt: doc.data().closedAt,
                idOrganizer: doc.data().idOrganizer
              });
              commit('setAllBids', bidsList);
            });
            
          })
          .catch((err) => {
            commit('ALGO_INESPERADO', err.message)
          });
      },
      getMyBids({commit},filter){
        firebase
        .firestore()
        .collection("leilao")
        .where('idOrganizer','==', filter)
        .onSnapshot(snapshot =>{
          let bid = []
          snapshot.forEach(doc =>{
           console.log(doc.data())
              bid.push({
                id:doc.id,
                name:doc.data().name,
                description:doc.data().description,
                imgUrl: doc.data().imgUrl,
                items:doc.data().items,
                startsOn: doc.data().startsOn,
                closedAt: doc.data().closedAt,
                idOrganizer: doc.data().idOrganizer
              })
          })
          commit('setMyBids', bid)
        })

      },
      createBid({ commit }, payload) {
        firebase
          .firestore()
          .collection("leilao")
          .add(payload)
          .then((doc) => {
            commit("setBid", doc);
            return commit('ATUALIZADO_SUCESSO', payload.name + " criado com sucesso");
          })
          .catch((err) => {
            commit('ALGO_INESPERADO', err.message);
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
            commit('DELETADO');
          })
          .catch((err) => {
            commit('ALGO_INESPERADO', err.message)
          });
      },
      updateBid( {commit} ,payload) {
        console.log(payload.id)
        console.log(payload.name)
        firebase
          .firestore()
          .collection("leilao")
          .doc(payload.id)
          .update(payload)
          .then(() => {
            return commit('MOSTRAR_CONTEUDO', payload.name + " atualizado com sucesso");
          })
          .catch((err) => {
            commit('ALGO_INESPERADO', err.message);
          });
      },
      getBidById({ commit }, payload) {
        console.log(payload)
        firebase
        .firestore()
        .collection("leilao")
        .doc(payload)
        .get()
        .then(doc =>{
          let bid = { 
            items: [],
            closedAt: doc.data().closedAt,
            local: doc.data().local,
            tel: doc.data().tel,
            startsOn: doc.data().startsOn,
            organizer: doc.data().organizer,
            idOrganizer: doc.data().idOrganizer,
            name: doc.data().name,
            imgUrl: doc.data().imgUrl,
            email: doc.data().email,
            description: doc.data().description,
            id: doc.id 
          }
          commit('setBid', bid);
        }).catch((err) => {
          commit('ALGO_INESPERADO', err.message);
        });
      },
  },
  getters:{
    pegar(state){
      return state.myBids.length
    }
  },
}