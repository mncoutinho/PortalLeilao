import firebase from "firebase/app";
export default {
  actions: {
    addInfo({ commit }, { info, id }) {
      firebase
        .database()
        .ref("artigo/" + id + "/mensagem/")
        .push(info)
      commit
    },
    getInfo({ commit }, id) {
      let msg = []
      firebase
        .database()
        .ref("artigo/" + id + "/mensagem")
        .on('child_added', doc => {
          console.log("foi adicionado uma mensagem")
          commit('MOSTRAR_CONTEUDO', doc.exportVal().text)
          msg.push({
            text: doc.exportVal().text,
            time: doc.exportVal().time
          })
          console.log(msg)
          commit("setMSG", msg)
        })
    },
  }
}