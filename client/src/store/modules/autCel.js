import firebase from "firebase/app";
export default{
    state:{
        autenticarC: {},
    },
    mutation:{
        confirmarNumero(state, payload) {
            state.user = payload;
        },
    },
    action:{
        autenticarCelular(){
            const phoneNumber = this.state.userApp.userData.tel;
            const appVerifier = window.recaptchaVerifier;
            firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
                .then(function (confirmationResult) {
                    this.$store.commit('confirmarNumero', confirmationResult)
                }).catch(function (error) {
                    this.$store.commit('ALGO_INESPERADO', error)
                });
        }
    },
}