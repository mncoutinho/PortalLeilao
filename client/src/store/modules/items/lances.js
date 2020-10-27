import firebase from "firebase/app";
export default {
  actions: {
    addLance({ commit }, { id, payload }) {
      firebase
        .database()
        .ref("artigo/" + id + "/lances")
        .push(payload)
        .then(doc => {
          commit;
          return commit('MSG_FEED', doc.key + " lance computado");
        })
        .catch((err) => {
          commit('ALGO_INESPERADO', err.message)
        });
    },
    getLances({ commit }, payload) {
      let lances = [];
      firebase
        .database()
        .ref("artigo/" + payload + "/lances")
        .on('child_added', doc => {
          console.log("foi adicionado lance")
          commit('MSG_FEED', 'novo lance feito pelo ' + doc.exportVal().user);
          lances.push({
            idUser: doc.exportVal().idUser,
            lance: doc.val().lance,
            time: doc.exportVal().time,
            user: doc.exportVal().user
          })
          commit("setLances", lances);
        })
    },
    searchlance({ commit, state }, payload) {
      let result = []
      let items = state.items
      console.log(items)
      //dados do item
      let histItem = []
      for (let i = 0; i < items.length; i++) {
        firebase
          .database()
          .ref('artigo/' + items[i].id + '/lances')
          .orderByChild('idUser')
          .equalTo(payload)
          .on('child_added', doc => {
            //pegando o id sem repetir 
            if (!histItem[0] || histItem[-1] != items[i].id) {
              histItem.push(items[i].id)
            }
            //console.log(doc.key)
            result.push({
              peca: items[i].id,
              id: doc.key,
              user: doc.exportVal().user,
              time: doc.exportVal().time,
              lance: doc.exportVal().lance
            })
          })
      }
      console.log(histItem)
      commit('resultLances', result)
    },
    finishLance({ commit }, { id, status }) {
      firebase.firestore()
        .collection("artigo/")
        .doc(id)
        .update({ active: status }).then(() => {
          commit('MSG_FEED', "lote fechado")
        })
    },
  }
}