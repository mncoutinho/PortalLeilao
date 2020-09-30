export default{
    state: {
        step: 0
    },
    mutations:{
        belowStep(state){
            state.step--
        },
        addStep(state){
            state.step++
        },
        resetStep(state){
            state.step = 0
        },
        homeStep(state){
            if(state.step === 2){
                alert('CADASTRADO_SUCESSO')
                state.step = 0
            }else{
                alert('ERROR')
            }
        },
    }
}