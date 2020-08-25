<template>
  <v-app>
      <v-row justify="center" class="mb-12"> 
              <h1>Endereço</h1>
          </v-row>
          <!--conteudo-->
          <v-row justify="center">
            <v-col cols="12" sm="6">
                <v-text-field
                  v-model="userData.endereco"
                  label="ENDEREÇO :"
                  readonly
                />
                <v-text-field
                  v-model="userData.complemento"
                  label="COMPLETEMENTO :"
                  readonly
                />
                 <v-text-field
                  v-model="userData.cep"
                  label="CEP :"
                  readonly
                />  
                <v-text-field
                  v-model="userData.bairro"
                  label="Bairro:"
                  readonly
                />
                <v-text-field
                  v-model="userData.cidade"
                  label="Cidade:"
                  readonly
                /> 
                <v-text-field
                  v-model="userData.uf"
                  label="UF:"
                  readonly
                /> 
                <v-text-field
                  v-model="userData.numero"
                  label="Número:"
                  readonly
                />   
            </v-col>
          </v-row>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
          userData: state => state.userApp.userData
        })
    },
}
</script>
