import firebase from "firebase/app";
export default{
    state:{
        autenticarC: {},
    },
    mutation:{
        confirmarNumero(state, payload) {
            state.autenticarC = payload;
        },
    },
    action:{
        autenticarCelular(state, payload){
            const phoneNumber = state;
            const appVerifier = payload;
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