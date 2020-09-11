export default{
    state:{
        color: 'success',
        texto: '',
        titulo:'',
        ver: false
    },
    mutations:{
        MSG_ERROR(state, payload){
            state.titulo = payload,
            state.color = 'error',
            state.texto = 'Erro: ' + payload,
            state.ver= true
        },
        MSG_COMFIRMACAO(state, payload) {
            state.titulo = payload,
            state.color = 'success',
            state.texto = 'Comfirmado: ' + payload,
            state.ver = true
        },
        MSG_AVISO(state, payload) {
            state.titulo = payload,
            state.color = 'warning',
            state.texto = 'Aviso: ' + payload,
            state.ver = true
        },
    }
}