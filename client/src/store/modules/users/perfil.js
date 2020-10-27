import firebase  from "firebase/app";
export default{
        actions: {
          setData({commit}, { id, data }){
            firebase.firestore()
                .collection("user")
                .doc(id)
                .set({
                    cpf: data.cpf,
                    tel: data.tel,
                    nome: data.nome,
                }).then(()=>{
                  commit('SAVED')
                }).catch(err => commit('ERRO', err))
          },
          setData2({commit}, {id, endereco}){
            firebase.firestore()
            .collection("user")
            .doc(id)
            .update({
                cidade: endereco.cidade,
                bairro: endereco.bairro,
                cep: endereco.cep,
                endereco: endereco.endereco,
                numero: endereco.numero,
                uf: endereco.uf,
                complemento: endereco.complemento?endereco.complemento:"",
            })
            .then(()=>{
                commit('CREATED')
            })
            .catch(err => {
              commit('ERRO', err);
            })
          },
          getData({ commit }, payload) {
            firebase
              .firestore()
              .collection("user")
              .doc(payload)
              .get()
              .then((doc) => {
                if(doc.data() != undefined){
                  return commit("setUserData", doc.data());
                }else{
                  commit('ALERT', 'Você, não completou o seu cadastro')
                  return this.$routes.push('/criar')
                } 
              })
              .catch((err) => {
                commit("setLoading", false);
                commit("setError", err);
                commit('ERRO', err);
              });
          },
          updateData({commit}, { data, id }){
              firebase
              .firestore()
              .collection("user")
              .doc(id)
              .update(data)
              .then( () =>{
                commit('UPDATED');
              })
              .catch((err)=>{
                commit("setLoading", false);
                commit("setError", err);
                commit('ERRO', err);
              })
          },
          cleanError({ commit }) {
            commit("clearError");
          },
          uploadProfileImg({ commit }, { user, photo }) {
            firebase
              .firestore()
              .collection("user")
              .doc(user)
              .update({ photoUrl: photo })
              .then(() => {
                commit('UPDATED');
              }).catch(err =>{
                commit('ERRO', err);
              })
          }
        }
  }