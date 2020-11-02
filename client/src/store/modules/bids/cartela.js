export default{
    actions:{
        createCartela({commit}, {client, bid}){
            let cartela = {
                user: client,
                request: false,
                block: {
                    reason: null,
                    active: false
                },
                cartela: "teste"
            }

            //se n tiver cartela no banco
            if(bid.cartelas == undefined){
                bid.cartelas = []
            }
            bid.cartelas.push(cartela)

            firebase
            .firestore()
            .collection("leilao")
            .doc(bid.id)
            .update({items: bid.cartelas})
            .then(()=>{
                commit('MSG_FEED', "Solicitacao em avaliacao")
            })
        }
    }
}