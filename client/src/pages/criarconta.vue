<template>
    <v-content>
        <v-row justify="center">
           <v-card max-width="30%" min-width="450" class="mb-12 pa-12"  :elevation="10" width="50%" >
               <v-flex class="d-flex">
                <!--outro-->
                    <v-card 
                    width="100%"
                    color="white"
                    :elevation="0"
                    >
                        <v-window v-model="step">
                            <!--fase 1-->
                            <v-window-item :value="1">
                                <user titulo="Cadastre-se com..."/>
                            </v-window-item>

                            <!--fase 2-->
                            <v-window-item :value="2">
                                <personal/>
                            </v-window-item>
                            <!--fase 3-->
                            <v-window-item :value="3">
                                <Address/>
                            </v-window-item>
                            <!--Button-->
                            <v-row align="end" justify="center">
                                <v-card-actions>
                                    <!--back to home-->
                                    <v-btn
                                    text
                                    large
                                    depressed
                                    color="#422321"
                                    to="/"
                                    v-if="step === 1"
                                    >
                                        voltar
                                    </v-btn>
                                    <!--back to item-->
                                    <v-btn
                                    text
                                    large
                                    depressed
                                    color="#422321"
                                    @click="step--"
                                    v-if="step != 1">
                                        voltar
                                    </v-btn>
                                    <v-spacer/>
                                    <!--next-->
                                    <v-btn
                                    color="#422321"
                                    class="white--text"
                                    depressed
                                    large
                                    v-if="step != 3"
                                    @click="step++">
                                        Proximo
                                    </v-btn>
                                    <!--next page-->
                                    <v-btn
                                    color="#422321"
                                    class="white--text"
                                    depressed
                                    large
                                    v-if="step === 3"
                                    to="/"
                                    >
                                        Finalizar
                                    </v-btn>   
                                </v-card-actions>
                            </v-row>
                        </v-window> 
                    </v-card>  
               </v-flex>    
            </v-card> 
        </v-row>
    </v-content>
</template>
<script>
import user from '../components/Modal/criarUsuario/cadastrarEmailSenha';
import personal from '../components/Modal/criarUsuario/cadastrarDadosPessoais';
import Address from '../components/Modal/endereco'
export default {
    
    components:{
        user,
        personal,
        Address
    },
    data() {
        return{
            step: 1,
            UF: ['SP', 'RJ', 'MG', 'PR', 'MN'],            
        }
    },
    computed:{

    }
}

</script>