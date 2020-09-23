import firebase  from "firebase/app";
  export default{
        state: {
          user: {},
          loading: false,
          error: null,
          userData: {},
        },
        mutations: {
          setUser(state, payload) {
            state.user = payload;
          },
          resetUser(state) {
            state.user = {};
            state.userData = {};
          },
          setLoading(state, payload) {
            state.loading = payload;
          },
          setError(state, payload) {
            state.error = payload;
          },
          clearError(state) {
            state.error = null;
          },
          setUserData(state, payload) {
            state.userData = payload;
          },
          setCache(state, user){
            state.userData = user
          }
        },
        actions: {
          resetPassword({ commit }, payload) {
            commit;
            console.log(payload.email);
            firebase
              .auth()
              .sendPasswordResetEmail(payload.email)
              .then(() => {
                commit('VERIFICAR_CAIXA')
              });
          },
          //isso cria um usuario lucas
          signUserUp({ commit }, payload) {
            commit("setLoading", true);
            commit("clearError");
            firebase
              .auth()
              .createUserWithEmailAndPassword(payload.email, payload.senha)
              .then((user) => {
                commit("setLoading", false);
                const newUser = user.user;
                commit("setUser", newUser);
      
                const userData = {
                  bairro: payload.bairro,
                  cep: payload.cep,
                  cidade: payload.cidade,
                  complemento: payload.complemento,
                  cpf: payload.cpf,
                  endereco: payload.endereco,
                  nome: payload.nome,
                  tel: payload.tel,
                  uf: payload.uf,
                  numero: payload.numero,
                  photoUrl: "https://cdn150.picsart.com/upscale-245339439045212.png",
                };
                firebase
                  .firestore()
                  .collection("user")
                  .doc(user.user.uid)
                  .set(userData)
                  .then(commit('CADASTRADO_SUCESSO'));
              })
              .catch((err) => {
                commit("setLoading", false);
                commit("setError", err);
                console.log(err);
              });
          },
          getData({ commit }, payload) {
            firebase
              .firestore()
              .collection("user")
              .doc(payload)
              .get()
              .then((doc) => {
                
                if(doc.data() != undefined){
                  console.log('foi')
                  return commit("setUserData", doc.data());
                }else{
                  commit('MENSAGEM_ERRO', 'Você, não completou o seu cadastro')
                } 
              })
              .catch((err) => {
                commit("setLoading", false);
                commit("setError", err);
                console.log(err);
              });
          },
          updateData({commit}, id,data){
              firebase
              .firestore
              .collection("user")
              .doc(id)
              .update(data)
              .then((doc)=>{
                commit("setUserData", doc.data());
                commit('ALTERADO_SUCESSO');
              })
              .catch((err)=>{
                commit("setLoading", false);
                commit("setError", err);
                console.log(err);
              })
          },
          //isso loga o lucas
          signUserIn({ commit }, payload) {
            commit("setLoading", true);
            commit("clearError");
            firebase
              .auth()
              .signInWithEmailAndPassword(payload.email, payload.senha)
              .then((data) => {
                console.log(data.user.uid);
                commit("setLoading", false);
                let userProfile = data.user;
                commit("setUser", userProfile);
              })
              .catch((err) => {
                commit("setLoading", false);
                commit("setError", err);
                console.log(err);
              });
          },
          loginGoogle({ commit }) {
            let provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            firebase
              .auth()
              .signInWithPopup(provider)
              .then((doc) => {
                let userProfile = doc.user;
                commit("setUser", userProfile);
              });
          },
          loginFacebook({ commit }) {
            let provider2 = new firebase.auth.FacebookAuthProvider();
            provider2.addScope('user_birthday');
            firebase
              .auth()
              .signInWithPopup(provider2)
              .then(function (result) {
                let userProfile2 = result.credential.accessToken;
                commit("setUser", userProfile2);
              });
          },
          cleanError({ commit }) {
            commit("clearError");
          },
          singOut({ commit }) {
            firebase
              .auth()
              .signOut()
              .then(() => {
                commit("resetUser");
                commit('USUARIO_DESLOGAR');
              });
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
          },
        },
        getters: {
          user(state) {
            console.log(state);
            return state.user;
          },
          loading(state) {
            return state.loading;
          },
          error(state) {
            return state.error;
          },
        },
  }