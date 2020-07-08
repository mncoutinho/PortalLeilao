
<template >
    <v-main>
       <v-row justify="center">
           <login 
            justify="center"
            align="center" 
            titulo="Entre con..."
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
        click:'',
        color:"#422321",
         link:"/"
      },
      {
        text:"Logar",
        click:'',
        color:"#422321",
        link:"/"
      }
    ],
    //dados pro login 
    accountData:""
  }),
  methods:{
    getAccountData(accountData){
      this.accountData = accountData
    },
    
    loginEmail(){
        alert('123')
        //metodo de login
        this.$store.dispatch('signUserIn',this.accountData)
    }

  }
}
</script>