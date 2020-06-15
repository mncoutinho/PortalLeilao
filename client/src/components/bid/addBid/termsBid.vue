<template>
  <div>
      <p>Termos</p>
      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                    name="title"
                    label="Termos de Frete*"
                    v-model="termos.frete"   
                />
            </v-flex>
      </v-layout>

      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                    name="title"
                    label="Termos de Pagamentos*"
                    v-model="termos.pagamento"   
                />
            </v-flex>
      </v-layout>

      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                    name="title"
                    label="Termos & Condicoes*"
                    v-model="termos.condicoes"   
                />
            </v-flex>
      </v-layout>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            termos:{
            frete:'',
            pagamento:'',
            condicoes:''
            },
        }
    },
    created(){
        axios({
            method:`get`,
            url:`https://us-central1-portalleilao-26290.cloudfunctions.net/leilao/term`,
        }).then(doc =>{
            this.termos ={
                frete: doc.data.CondicoesDeFrete,
                pagamento: doc.data.CondicoesDePagamento,
                condicoes: doc.data.TermosCondicoes
            }
        }).catch(error => console.log(error));  
    }
    
}
</script>
