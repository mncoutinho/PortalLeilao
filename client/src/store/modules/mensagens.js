export default{
    state:{
        color: 'success',
        texto: '',
        titulo:'',
        ver: false
    },
    mutations:{
        MSG_ERROR(state, payload){
            state = {
                titulo: payload,
                color: 'error',
                texto: 'Erro: ' + payload,
                ver: true
            }   
        },
        MSG_COMFIRMACAO(state, payload) {
            state = {
                titulo: payload,
                color: 'success',
                texto: 'Comfirmado: ' + payload,
                ver: true
            }  
        },
        MSG_AVISO(state, payload) {
            state = {
                titulo: payload,
                color: 'warning',
                texto: 'Aviso: ' + payload,
                ver: true
            } 
        },
    }
}