<template>
    <v-main>
        <v-card flat min-height="700px" class="mt-12">
            <v-row justify="center">
                <v-window
                v-model="step"
                :touchless="true"
                >
                    <!--Primeira fase-->
                    <v-window-item :value="0">
                            <v-card
                            class="mb-12 pa-8"  
                            :elevation="10"
                            min-width="500px"
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
        this.$store.commit('NOT_VISIBLE');
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