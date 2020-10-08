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
        autenticarCelular({commit}, payload){
            firebase.auth.PhoneAuthProvider.PROVIDER_ID
        
            var applicationVerifier = new firebase.auth.RecaptchaVerifier(
                'recaptcha-container');

                var provider = new firebase.auth.PhoneAuthProvider();
                provider.verifyPhoneNumber(payload, applicationVerifier).then(function(verificationId) {
                    var verificationCode = window.prompt('Please enter the verification ' + 'code that was sent to your mobile device.');
                    return firebase.auth.PhoneAuthProvider.credential(verificationId,verificationCode);
    })
    .then(function(phoneCredential) {
      const log = firebase.auth().signInWithCredential(phoneCredential);
      commit('confirmarNumero', log)
    });
        }
    },
}