export default {
    state: {
        text: 'texto',
        cor: '',
        tempo: '',
        mostra: false,
        top: true,
        left: false,
        right: false,
        botton: false,
    },
    mutations: {
        ERRO(state) {
            state.text = 'erro',
            state.cor = 'red',
            state.tempo = 4000,
            state.mostra = true
        },
        VERIFICAR_EMAIL(state) {
            state.text = 'Verifique o seu e-mail',
            state.cor = 'red',
            state.tempo = 4000,
            state.mostra = true
        },
        USUARIO_DESLOGAR(state) {
            state.text = 'Usúario deslogou',
            state.cor = 'red',
            state.tempo = 5000,
            state.mostra = true
        },
        VERIFICAR_CAIXA(state) {
            state.text = 'Verifique sua caixa de email para altera sua senha',
            state.cor = 'red',
            state.tempo = 5000,
            state.mostra = true
        },
        CADASTRADO_SUCESSO(state) {
            state.text = 'Cadastrado com Sucesso',
            state.cor = 'red',
            state.tempo = 5000,
            state.mostra = true
        },
        ALTERADO_SUCESSO(state) {
            state.text = 'alterado com sucesso',
            state.cor = 'green',
            state.tempo = 5000,
            state.mostra = true
        },
        ALGO_INESPERADO(state, payload) {
            state.text = 'Algo inesperado aconteceu:' + payload,
            state.cor = 'red',
            state.tempo = 5000,
            state.mostra = true
        },
        DELETADO(state) {
            state.text = 'Deletado com Sucesso',
            state.cor = 'red',
            state.tempo = 5000,
            state.mostra = true
        },
        MOSTRAR_CONTEUDO(state, payload) {
            state.text = payload,
            state.cor = 'green',
            state.tempo = 5000,
            state.mostra = true
        },
        ATUALIZADO_SUCESSO(state, payload) {
            state.text = payload,
            state.cor = 'green',
            state.tempo = 5000,
            state.mostra = true
        },
        POSSUI_MENSAGEM(state){
            state.text = 'tem uma mensagem',
            state.cor = 'green',
            state.tempo = 5000,
            state.mostra = true
        },
        MENSAGEM_LOGUE(state) {
            state.text = 'Logue por favor',
            state.cor = 'blue',
            state.tempo = 5000,
            state.mostra = true
        },
        SEM_PERMICAO(state, payload) {
            state.text = 'Voce não tem permissão para isso :' + payload,
            state.cor = 'red',
            state.tempo = 5000,
            state.mostra = true,
            state.top = false,
            state.left = true,
            state.botton = true
        },
        MENSAGEM_FEED(state, payload){
            state.text = 'Você' + payload,
            state.top = false,
            state.tempo = 5000,
            state.cor = 'blue',
            state.left = true,
            state.botton = true
        },
        MENSAGEM_ERRO(state, payload) {
            state.text = payload,
            state.cor = 'red',
            state.tempo = 5000,
            state.mostra = true,
            state.top = false,
            state.left = true,
            state.botton = true
        }
    },
}