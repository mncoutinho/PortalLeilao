import firebase from "firebase/app";
export default{
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
              commit('ERRO', err.message)
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
              return commit('SAVED');
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
              commit('DELETED');
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
            .then(() => {
              return commit('UPDATED');
            })
            .catch((err) => {
              commit('ALGO_INESPERADO', err.message);
            });
        },
        getBidById({ commit }, payload) {
          firebase
          .firestore()
          .collection("leilao")
          .doc(payload)
          .get()
          .then(doc =>{
            let bid = { 
              items: doc.data().items,
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
}