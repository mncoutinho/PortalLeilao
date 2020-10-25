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
                  commit('MENSAGEM_ERRO', 'salvo com sucesso')
                }).catch(err => console.log(err))
          },
          setData2({commit}, {id, endereco}){
            console.log(endereco)
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
                commit('CADASTRADO_SUCESSO')
            })
            .catch(err => console.log(err))
          },
          getData({ commit }, payload) {
            firebase
              .firestore()
              .collection("user")
              .doc(payload)
              .get()
              .then((doc) => {
                if(doc.data() != undefined){
                  console.log('tem dados')
                  return commit("setUserData", doc.data());
                }else{
                  commit('MENSAGEM_ERRO', 'Você, não completou o seu cadastro')
                  return this.$routes.push('/criar')
                } 
              })
              .catch((err) => {
                commit("setLoading", false);
                commit("setError", err);
                console.log(err);
              });
          },
          updateData({commit}, { data, id }){
              console.log(data)
              firebase
              .firestore()
              .collection("user")
              .doc(id)
              .update(data)
              .then( () =>{
                commit('ALTERADO_SUCESSO');
              })
              .catch((err)=>{
                commit("setLoading", false);
                commit("setError", err);
                console.log(err);
              })
          },
          cleanError({ commit }) {
            commit("clearError");
          },
          uploadProfileImg({ commit }, { user, photo }) {
            console.log(user);
            firebase
              .firestore()
              .collection("user")
              .doc(user)
              .update({ photoUrl: photo })
              .then(() => {
                commit;
                commit('ALTERADO_SUCESSO');
              });
          }
        }
  }