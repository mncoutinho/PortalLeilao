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

export default {
    data(){
        return{
            leiloeiro:{
            nome:'Joao',
            mail:'Joao@exemple.com',
            tel:'(XX)XXXX-XXXX'
            },
        }
    }
    
}
</script>
