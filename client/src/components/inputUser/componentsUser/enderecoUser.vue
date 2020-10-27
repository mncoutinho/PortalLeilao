<template>
  <v-app>
        <v-row justify="center" class="mb-12 mt-12">
          <h1 style="color:#5B2D2A">Endereço</h1>
        </v-row>
          <!--conteudo-->
          <v-row justify="center">
            <v-col cols="12" sm="6">
              <h3 style="color:#5B2D2A">Cep:</h3>
                <v-text-field
                  v-model="userData.cep"
                  @change="getCep()"
                  maxlength="9"
                  v-mask="['#####-###']"
                  placeholder="00000-00"
                  outlined
                />

              <h3 style="color:#5B2D2A">Uf:</h3>
                <v-select
                  :items="uf" 
                  v-model="userData.uf"
                  placeholder="RJ"
                  color="brown"
                  outlined                              
                />

              <h3 style="color:#5B2D2A">Cidade:</h3>
                <v-text-field
                  v-model="userData.cidade"
                  outlined
                  placeholder="Rio de Janeiro"
                />
                <h3 style="color:#5B2D2A">Bairro:</h3>
                <v-text-field
                  v-model="userData.bairro"
                  outlined
                  placeholder="Rio de Janeiro"
                />
                <h3 style="color:#5B2D2A">Rua:</h3>                
                <v-text-field
                  v-model="userData.endereco"
                  outlined
                  placeholder="Rio de Janeiro"
                />
                <h3 style="color:#5B2D2A">Número:</h3>
                <v-text-field
                  v-model="userData.numero"
                  outlined
                  placeholder="457"  
                />
                <h3 style="color:#5B2D2A">Complemento:</h3>
                <v-text-field
                  v-model="userData.complemento"
                  outlined
                  placeholder="em frente ao Rio de Janeiro" 
                />
                  
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-btn x-large 
              color="#422321" 
              class="white--text"  
              @click="update()">
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
          return this.$store.commit('ALERT', msg)
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
