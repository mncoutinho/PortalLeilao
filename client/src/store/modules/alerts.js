export default {
        state: {
            text: 'texto',
            cor: '',
            tempo: '',
            mostra: false,
        },
        mutations: {
            erro(state) {
                state.text = 'erro',
                    state.cor = 'red',
                    state.tempo = 4000,
                    state.mostra = true
            },
            weelcome(state) {
                state.text = 'Seja Bem-Vindo',
                    state.cor = 'blue',
                    state.tempo = 4000,
                    state.mostra = true
            },
            verificarEmail(state) {
                state.text = 'Verifique o seu e-mail',
                    state.cor = 'red',
                    state.tempo = 4000,
                    state.mostra = true
            },
            usuarioDeslogar(state) {
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
                    state.cor = 'green',
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
        },
}