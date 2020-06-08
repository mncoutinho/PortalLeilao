
<template >
    <v-content >
       <v-row justify="center">
           <v-card max-width="30%" class="mb-12 pa-12"  :elevation="10" width="50%" >
               <v-flex class="d-flex">
                <!--outro-->
                    <v-card 
                    width="100%"
                    color="white"
                    :elevation="0"
                    >
                      <login 
                      max-width="30%" 
                      class="mb-12 pa-12"  
                      :elevation="10" 
                      width="50%" 
                      titulo="Entre con..."/>
                      <v-row justify="center">
                        <v-btn
                          color="#422321"
                          center
                          class="white--text"
                          depressed
                          large
                          >
                              Entrar
                          </v-btn>
                      </v-row>
                    </v-card>
               </v-flex>
           </v-card>
       </v-row>
    </v-content>
</template>


<script>
import login from '../components/Modal/criarUsuario/cadastrarEmailSenha'
export default {
  components:{
    login
  },
  data: () => ({
    drawer: null
  })
}
</script>