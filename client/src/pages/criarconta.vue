<template>
    <v-main>
        <v-card flat width="100%" height="110vh" class="d-flex align-center ">
            <v-row class="d-flex justify-center">
                <v-col md="4" xs="12" sm="10">
                    <v-window
                    v-model="step"
                    :touchless="true"
                    >
                        <!--Primeira fase-->
                        <v-window-item :value="0">
                            <v-card
                            class="pa-8 d-block"  
                            :elevation="10"
                            >
                                <!--Titulo-->
                                <v-row justify="center" class="pa-8">
                                    <h1 class="brown--text">Cadastre-se</h1>
                                </v-row>
                                <!--Email's Validação-->
                                <formulario/>
                                <v-row align="center">
                                    <v-divider class="mx-10"/>
                                        <h4 class="brown--text">ou</h4>
                                    <v-divider class="mx-10" />
                                </v-row>
                                <v-col cols="12">
                                    <primeiroStep/>
                                </v-col>   
                            </v-card>
                        </v-window-item>
                        <!--Segunda fase-->
                        <v-window-item :value="1">
                            <segundoStep/>
                        </v-window-item>
                        <!--Terceira fase-->
                        <v-window-item :value="2">
                            <terceiroStep/>
                        </v-window-item>
                    </v-window>
                </v-col>
            </v-row>
        </v-card>
    </v-main>
</template>
<script>
import formulario from '../components/formularios/loginProvide'
import primeiroStep from '../components/formularios/criarConta/login&senha'
import segundoStep from '../components/formularios/criarConta/dadosPessoais'
import terceiroStep from '../components/formularios/criarConta/endereco'
import {mapState} from 'vuex'
export default {
    components:{
        formulario,
        primeiroStep,
        segundoStep,
        terceiroStep,
    },
    computed: {
        ...mapState({
            step: state => state.steps.step
        })
    },
    created() {
        this.$store.commit('NOT_VISIBLE')
    },
    watch:{
      user(value){
          if(value !== null && value !== undefined){
                this.signUp().then(
                   this.$router.push('/')
            )  
          }
        }
    },
}
</script>