
<template >
    <v-content >
       <v-row justify="center">
           <login 
            justify="center"
            align="center" 
            titulo="Entre con..."
            :buttons="buttons"/> 
       </v-row>
    </v-content>
</template>


<script>
import login from '../components/Modal/criarUsuario/formEmailSenha'
export default {
  components:{
    login
  },
  data: () => ({
    drawer: null,
    buttons:[{text:"Voltar",click:'', color:"#422321", link:"/"},{text:"Logar", click:'',color:"#422321", link:"/"}]
  })
}
</script>