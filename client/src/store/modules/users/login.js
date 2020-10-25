import firebase  from "firebase/app";
export default{
        actions: {
          resetPassword({ commit }, payload) {
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
                commit("setUid", newUser.uid);
                commit("setUser", newUser);
              })
              .catch((err) => {
                commit("setLoading", false);
                commit("setError", err);
                console.log(err);
              });
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
          singOut({ commit }) {
            firebase
              .auth()
              .signOut()
              .then(() => {
                commit("resetUser");
                commit('USUARIO_DESLOGAR');
              });
          }
        }
  }