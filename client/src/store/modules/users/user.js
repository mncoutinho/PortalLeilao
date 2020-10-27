export default{
        state: {
          user: {},
          uid:'',
          loading: false,
          error: null,
          userData: {},
        },
        mutations: {
          setUser(state, payload) {
            state.user = payload;
          },
          resetUser(state) {
            state.user = {};
            state.userData = {};
            state.uid = '';
          },
          setLoading(state, payload) {
            state.loading = payload;
          },
          setError(state, payload) {
            state.error = payload;
          },
          clearError(state) {
            state.error = null;
          },
          setCEP(state, payload){
            state.userData.cep = payload.cep
            state.userData.bairro = payload.bairro
            state.userData.cidade = payload.cidade
            state.userData.uf = payload.uf
            state.userData.endereco = payload.endereco
            state.userData.numero = payload.numero
            state.userData.complemento = payload.complemento
          },
          setUserData(state, payload) {
            state.userData = payload;
          },
          setCache(state, user){
            state.userData = user
          },
          setUid(state, payload){
            state.uid = payload
          }
        },
        actions: {
          cleanError({ commit }) {
            commit("clearError");
          }
        },
        getters: {
          user(state) {
            return state.user;
          },
          uid(state){
            return state.uid;
          },
          loading(state) {
            return state.loading;
          },
          error(state) {
            return state.error;
          },
        },
  }