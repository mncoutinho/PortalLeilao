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
    }
}