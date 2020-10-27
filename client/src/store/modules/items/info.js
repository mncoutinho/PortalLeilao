import firebase from "firebase/app";
export default {
  actions: {
    addInfo({ commit }, { info, id }) {
      firebase
        .database()
        .ref("artigo/" + id + "/mensagem/")
        .push(info)
      commit('MSG_FEED', "Mensagem enviada pro lote")
    },
    getInfo({ commit }, id) {
      let msg = []
      firebase
        .database()
        .ref("artigo/" + id + "/mensagem")
        .on('child_added', doc => {
          commit('MSG_FEED', doc.exportVal().text)
          msg.push({
            text: doc.exportVal().text,
            time: doc.exportVal().time
          })
          commit("setMSG", msg)
        })
    },
  }
}