<template >
    <v-main >
      <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
        </v-layout>
      <v-row justify="center">
        <v-card  max-width="30%" min-width="450" class="mb-12 pa-12 mx-auto"  :elevation="10" width="50%">
          <v-col>
              <login
                class="text-center"  
                titulo="Entre com..."
                @clicked="clique"
                @email="getAccountData"
                :buttons="buttons"
                :confirmarLayout = "confirmar"
                @submit.prevent="onSignIn"
              />
            <v-btn
              color=#422321
              center
              class="white--text"
              depressed
              large
              style="postion: absolute;top:-56px;left:30px"
              @click="voltar"
              >Voltar</v-btn>
            <v-row justify="center"> 
              <v-btn
              color="562B28"
              text
              v-on:click="resetPassword"
              >Esqueci Minha senha</v-btn>
            </v-row>
          </v-col>
        </v-card>
       </v-row>
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
    confirmar:false,
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
    voltar(){
          this.$router.push('/')
        },
    getAccountData(accountData){
      this.accountData = accountData
    },
    getConfirmar(){
      false
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