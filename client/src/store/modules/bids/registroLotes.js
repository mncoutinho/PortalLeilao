import firebase from "firebase/app";
export default{
    actions:{
        registroPeca({commit}, {bid, item}){
            console.log("peca "+item)
            console.log("leilao "+bid)

            let res = {
                item: item,
                comprador: null
            }
            //se tiver o items no banco
            if(bid.items == undefined){
                bid.items = []
            }
            bid.items.push(res)

            firebase
            .firestore()
            .collection("leilao")
            .doc(bid.id)
            .update({items: bid.items})
            .then(()=>{
                commit('MSG_FEED', "Adicionado peca registrada no leilao")
            })
        },
        deletarRegistro({commit}, {bid, point}){
            console.log("leilao "+bid)

            bid.items.splice(point, 1)

            firebase
            .firestore()
            .collection("leilao")
            .doc(bid.id)
            .update({items: bid.items})
            .then(()=>{
                commit('MSG_FEED', "Deletado a peca registrada do leilao")
            })
        },
        registroComprador({commit}, {bid, point ,user}){
            console.log(user)
            console.log(bid)

            bid.items[point].comprador = user
            console.log(bid.items)

            firebase
            .firestore()
            .collection("leilao")
            .doc(bid.id)
            .update({items: bid.items})
            .then(()=>{
                commit('MSG_FEED', "Arrematado!")
            })

        }
    }
}