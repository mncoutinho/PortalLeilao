export default {
    state: {
        text: 'texto',
        cor: null,
        tempo: '',
        mostra: false,
        top: true,
        left: false,
        right: false,
        botton: false,
        icon:null,
    },
    mutations: {
        //MSG PADRAO
        CREATED(state) {
            state.text = 'Cadastrado com Sucesso',
            state.cor = 'green',
            state.tempo = 5000,
            state.mostra = true,
            state.top = true,
            state.left = false,
            state.right = false,
            state.botton = false,
            state.icon = 'mdi-check'
        },
        SAVED(state) {
            state.text = 'Salvo com sucesso',
            state.cor = 'green',
            state.tempo = 5000,
            state.mostra = true,
            state.top = true,
            state.left = false,
            state.right = false,
            state.botton = false,
            state.icon = 'mdi-check'
        },
        UPDATED(state) {
            state.text = 'Alterado com sucesso',
            state.cor = 'green',
            state.tempo = 5000,
            state.mostra = true,
            state.top = true,
            state.left = false,
            state.right = false,
            state.botton = false,
            state.icon = 'mdi-check'
        },
        DELETED(state) {
            state.text = 'Deletado com Sucesso',
            state.cor = 'red',
            state.tempo = 5000,
            state.mostra = true,
            state.top = true,
            state.left = false,
            state.right = false,
            state.botton = false,
            state.icon = 'mdi-minus'
        },
        LOADING(state) {
            state.text = "Carregando...",
            state.cor = 'blue',
            state.tempo = 5000,
            state.mostra = true,
            state.top = false,
            state.left = true,
            state.botton = true,
            state.icon = 'mdi-loading'
        },
        ERRO(state, payload) {
            state.text = payload,
            state.cor = 'red',
            state.tempo = 5000,
            state.mostra = true,
            state.top = false,
            state.left = true,
            state.botton = true,
            state.icon = 'mdi-minus'
        },
        MSG_FEED(state,payload) {
            state.text = payload,
            state.cor = 'blue',
            state.tempo = 6000,
            state.mostra = true,
            state.top = true,
            state.left = false,
            state.right = false,
            state.botton = false,
            state.icon = 'mdi-information-outline'
        },
        ALERT(state,payload) {
            state.text = payload,
            state.cor = 'red',
            state.tempo = 5000,
            state.mostra = true,
            state.top = true,
            state.left = false,
            state.right = false,
            state.botton = false,
            state.icon = 'mdi-minus'
        },        
    },
}