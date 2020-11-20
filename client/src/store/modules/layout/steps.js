export default{
    state: {
        step: 0,
        add: 0
    },
    mutations:{
        ADD(state){
            state.step++
        },
        belowStep(state){
            state.step--
        },
        setStep(state, payload){
            state.step = payload
        },
        addStep(state){
            state.step++
        },
        homeStep(state){
            if(state.step == 2){
                state.step = 0
                //return commit('MSG_COMFIRMACAO','CADASTRADO_SUCESSO')
            }else{
                //commit('ERRO')
            }
        }
    }
}