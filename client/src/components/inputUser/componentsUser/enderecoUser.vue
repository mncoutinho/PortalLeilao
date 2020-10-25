<template>
  <v-app>
      <v-row justify="center" class="mb-12"> 
              <h1>Endereço</h1>
          </v-row>
          <!--conteudo-->
          <v-row justify="center">
            <v-col cols="12" sm="6">
                <v-text-field
                  v-model="userData.cep"
                  label="CEP :"
                  @change="getCep()"
                  maxlength="9"
                  v-mask="['#####-###']"
                /> 

                <v-select
                  :items="uf" 
                  v-model="userData.uf"
                  placeholder="RJ"
                  color="brown"                              
                />

                <v-text-field
                  v-model="userData.cidade"
                  label="Cidade:"
                />

                <v-text-field
                  v-model="userData.bairro"
                  label="Bairro:"
                />
                
                <v-text-field
                  v-model="userData.endereco"
                  label="RUA :"
                />

                <v-text-field
                  v-model="userData.numero"
                  label="Número:"  
                /> 

                <v-text-field
                  v-model="userData.complemento"
                  label="COMPLETEMENTO :"  
                />    
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-btn outlined color="#422321" @click="update()">
              Atualizar
            </v-btn>
          </v-row>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
import {mask} from 'vue-the-mask'
export default {
    directives: {mask},
    data(){
      return{
        
      }
    },
    computed: {
        ...mapState({
          user: (state) => state.userApp.user,
          userData: state => state.userApp.userData,
          uf: state => state.uf
        })
    },
    methods: {
      update(){
        console.log(this.userData)
        if(this.userData.numero == "" || this.userData.numero == undefined 
        || this.userData.complemento == undefined || this.userData.complemento == ""){
          const msg = " Por favor preencha o formulario todo!"
          //alert(msg)
          return this.$store.commit('ALGO_INESPERADO', msg)
        }else{
          this.$store.dispatch("updateData",{id:this.user.uid, data: this.userData })
        }  
      },
      getCep(){
      this.$store.dispatch('getCep', this.userData.cep)
      }
    } 
}
</script>
