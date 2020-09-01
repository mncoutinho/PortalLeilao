import firebase from "firebase/app";
export default{
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
        firebase
          .firestore()
          .collection("leilao")
          .doc(payload.id)
          .then((doc) => {
            return commit("setBid", doc);
          })
          .catch((err) => {
            commit('ALGO_INESPERADO', err.message);
          });
      },
    }
}