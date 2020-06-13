
<template >
    <v-main >
       <v-row justify="center">
         <v-card max-width="30%" min-width="450" class="mb-12 pa-12"  :elevation="10" width="50%" >
           <login 
            justify="center"
            align="center" 
            titulo="Entre con..."
            :buttons="buttons"/> 
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
    buttons:[{text:"Voltar",click:'', color:"#422321", link:"/"},
    {text:"Logar", click:'',color:"#422321", link:"/"}]
  })
}
</script>