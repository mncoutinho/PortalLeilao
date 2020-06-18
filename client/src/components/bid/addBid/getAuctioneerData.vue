<template>
  <div>
      <h4 class="brown--text" style=" margin-top: 100px; margin-bottom: 30px; text-align:center; ">Leiloeiro</h4>
      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                    name="title"
                    label="Nome do leiloeiro*"
                    v-model="leiloeiro.nome"
                    @change="$emit('nome', leiloeiro)" 
                />
            </v-flex>
      </v-layout>

      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                    name="title"
                    label="E-mail do leiloeiro*"
                    v-model="leiloeiro.mail"   
                />
            </v-flex>
      </v-layout>

      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                    name="title"
                    label="Telefone do leiloeiro*"
                    v-model="leiloeiro.tel"   
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
            leiloeiro:{
            nome:'',
            mail:'',
            tel:''
            },
        }
    },
    created(){
        axios({
            method:`post`,
            url:`https://us-central1-portalleilao-26290.cloudfunctions.net/login/getUserByID`,
            data:{id:`qF4hLp95842lNBrcyuUP`}
        }).then(doc =>{
            this.leiloeiro ={
                nome: doc.data.name,
                mail: doc.data.email,
                tel: doc.data.phone
            }
        }).catch(error => console.log(error));  
    }
    
}
</script>
