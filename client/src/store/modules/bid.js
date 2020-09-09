import firebase from "firebase/app";
export default{
  state: {
     bids: [],
     bid: {},
  },
  mutations: {
    setAllBids(state, payload) {
      state.bids = payload
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
          .then((doc) => {
            return commit('MOSTRAR_CONTEUDO', doc.name + " atualizado com sucesso");
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
            phone: doc.data(),
            startsOn: doc.data().startsOn,
            organizer: doc.data().organizer,
            idOrganizer: doc.data().idOrganizer,
            name: doc.data().name,
            mail: doc.data().mail,
            description: doc.data().description,
            id: doc.id 
          }
          commit('setBid', bid);
        }).catch((err) => {
          commit('ALGO_INESPERADO', err.message);
        });
        
      },
    }
}