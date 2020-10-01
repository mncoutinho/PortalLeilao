export default {
    state: {
        visible: null
    },
    mutations: {
        NOT_VISIBLE(state) {
            state.visible = false
        },
        VISIBLE(state) {
            state.visible = true
        },
    }
}