
<template >
    <v-main>
       <v-row justify="center">
           <login 
            justify="center"
            align="center" 
            titulo="Entre con..."
            @clicked="clique"
            @email="getAccountData"
            :buttons="buttons"/> 
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
        text:"Voltar",
        click:'voltar',
        color:"#422321",
      },
      {
        text:"Logar",
        click:'login',
        color:"#422321",
      }
    ],
    //dados pro login 
    accountData:""
  }),
  methods:{
    getAccountData(accountData){
      this.accountData = accountData
    },
    async clique(botao){
      if(botao == 'login'){
        await this.$store.dispatch('signUserIn',this.accountData)
      }
    },
  }
}
</script>