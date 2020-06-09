<template>
  <div>
      <p>Leiloeiro</p>
      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                    name="title"
                    label="Nome do leiloeiro*"
                    v-model="leiloeiro.nome"   
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
            data:{id:`5BarwCGpBdH6oHI9YAb9`}
        }).then(doc =>{
            this.leiloeiro ={
                nome: doc.data.name,
                mail: doc.data.email,
                tel: doc.data.tel
            }
        }).catch(error => console.log(error));  
    }
    
}
</script>
