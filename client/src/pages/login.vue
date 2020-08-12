<template >
    <v-main>
      <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
        </v-layout>
      <v-row  justify="center">
        <v-card  class="mb-12 pa-12"  :elevation="10" width="550px"  >
          <v-row justify="center" class="ml-6">
            <login  
              titulo="Entre com..."
              @clicked="clique"
              @email="getAccountData"
              :buttons="buttons"
              @submit.prevent="onSignIn"
              />
          </v-row>
            <v-btn
              color=#422321
              center
              class="white--text"
              depressed
              large
              style="postion: absolute;top:-56px;left:100px"
              @click="voltar"
              >Voltar</v-btn>
            <v-row justify="center"> 
              <v-btn
              color="562B28"
              text
              v-on:click="resetPassword"
              >Esqueci Minha senha</v-btn>
            </v-row>
        </v-card>
       </v-row> 
        {{accountData}}
    </v-main>
</template>
<script>
import login from '../components/Modal/criarUsuario/formEmailSenha'
export default {
  components:{
    login
  },
  data: () => ({
    drawer: null,
    buttons:[
      {
        text:"Logar",
        click:'login',
        color:"#422321",
      }
    ],
    //dados pro login 
    accountData:{}
  }),
  computed:{
    user(){
      return this.$store.getters.user
      },
    error(){
      return this.$store.getters.error
      },
    loading(){
      return this.$store.getters.loading
      },  
    },
  watch:{
    user(value){
      if(value != null && value != undefined){
        this.$router.push('/')
      }
    }
  },  
  methods:{
    getAccountData(accountData){
      this.accountData = accountData
    },
    async clique(botao){
      if(botao == 'login'){
        await this.$store.dispatch('signUserIn',this.accountData).then(
        )
      }
    },
    resetPassword(){
      this.$store.dispatch('resetPassword',this.accountData)
    },
     onDismissed(){
            this.$store.dispatch('clearError')
      }
    }
}
</script>