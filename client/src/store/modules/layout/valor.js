export default {
    state:{
        num: 0
    },
    mutations:{
        CINQUENTA(state){
            state.num = 50
        },
        CEM(state){
            state.num = 100
        },
        QUINHENTOS(state){
            state.num = 500
        },
        MIL(state){
            state.num = 1000
        },
        MAIS_DE_MIL(state, payload){
            state.num = payload
        },
    }
}