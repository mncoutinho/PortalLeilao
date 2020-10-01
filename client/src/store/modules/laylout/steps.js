export default{
    state: {
        step: 0
    },
    mutations:{
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
            if(state.step === 2){
                alert('CADASTRADO_SUCESSO')
                state.step = 0
            }else{
                alert('ERROR')
            }
        }
    }
}