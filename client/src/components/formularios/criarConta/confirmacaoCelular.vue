<template>
  <v-container>
    <v-card
    class="mb-12 pa-10"  
    :elevation="10"
    min-width="500px"
    >
        <v-row justify="center" class="pa-8">
            <h1 class="brown--text">Verifique seu número de Celular</h1>
        </v-row>
        <v-col cols="12">
            <v-form
            v-model="validador">
                <h4 class="brown--text">Digite código verificador:</h4>
                <v-text-field
                v-model="code"
                :rules="rules.codes"
                color="brown"
                placeholder="000000"
                required
                outlined
                />
            </v-form>
            <v-row dense>
                <!--Botão Voltar-->
                <v-btn
                color=#562B28
                center
                class="white--text"
                depressed
                large
                @click="belowStep()"
                >Voltar</v-btn>
                <v-spacer/>
                <!--Botão Seguir-->
                <v-btn
                color=#562B28
                center
                class="white--text"
                depressed
                large
                @click="addStep()"
                :disabled="!validador"
                >Proximo</v-btn>
            </v-row>
        </v-col>
    </v-card>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            code:null,
            validador:true,
            rules:{
                codes:[
                    value => !!value || 'Código de Verificação necessário',
                    value => value.length ===  6 || 'Número, Invalido'
                ]
            }
        }
    },
    methods:{
        belowStep(){
            this.$store.commit('belowStep')
        },
        addStep(){
            this.$store.commit('addStep')
        }
    }
}
</script>