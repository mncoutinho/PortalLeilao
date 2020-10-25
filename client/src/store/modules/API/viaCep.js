//Documentacao no site https://viacep.com.br
import axios from 'axios';
export default{
    actions:{
        getCep({commit}, cep){
            axios({
                method: 'get',
                url:'https://viacep.com.br/ws/'+cep+'/json/'  
            }).then(doc =>{
                commit('setCEP',{
                    cep: doc.data.cep,
                    cidade: doc.data.localidade,
                    bairro: doc.data.bairro,
                    endereco: doc.data.logradouro,
                    uf: doc.data.uf
                })   
            })
        }
        
    }
}