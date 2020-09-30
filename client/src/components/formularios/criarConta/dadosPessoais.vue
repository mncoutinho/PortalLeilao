<template>
  <v-container>
      <v-card
                    class="mb-12 pa-10"  
                    :elevation="10"
                    min-width="500px"
                    >
                        <v-row justify="center" class="pa-8">
                            <h1 class="brown--text">Dados Pessoais</h1>
                        </v-row>

                        <v-col cols="12">
                            <v-form
                            ref="form"
                            v-model="validador2"
                            >
                                <!--name-->
                                <h4 class="brown--text">Nome:</h4>
                                <v-text-field
                                v-model="personaldata.nome"
                                :rules="rules.nome"
                                color="brown"
                                placeholder="Nome Sobrenome"
                                required
                                outlined
                                >
                                </v-text-field>
                                <!--CPF-->
                                <h4 class="brown--text">CPF:</h4>
                                <v-text-field
                                :rules="rules.cpf"
                                v-model="personaldata.cpf"
                                maxlength="14"
                                v-mask="['###.###.###-##']"
                                placeholder="123-456-789-10"
                                color="brown"
                                required
                                outlined
                                ></v-text-field>
                                <!--telephone-->
                                <h4 class="brown--text">Telefone:</h4>
                                <v-text-field
                                :rules="rules.tel"
                                v-model="personaldata.tel"
                                placeholder="(12)934567890"
                                v-mask="['(##) #####-####' || '(##) ####-####']"
                                color="brown"
                                required
                                outlined
                                >
                                </v-text-field>
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
                                        @click="setPersonalData()"
                                        :disabled="!validador2"
                                        >Proximo</v-btn>
                                    </v-row>
                            </v-form>
                        </v-col>
                    </v-card>
  </v-container>
</template>

<script>
import {mask} from 'vue-the-mask'
const firebase = require('firebase/app');
export default {
    directives: {mask},
    data(){
        return{
            validador2:true,
            personaldata:{
                nome:'',
                cpf:'',
                tel:'' 
            },
            rules:{
                nome:[
                    value => !!value || 'Nome, Necessário',
                    ],
                cpf:[
                    value => !!value || 'Cpf, Necessário',
                    value => value.length >=  14 || 'Cpf, invalido', 
                    ],
                tel:[
                    value => !!value || 'Tel, Necessário',
                    value => value.length >=  14 || 'Número, Invalido',
                    ],
            }
        }
    },
    methods:{
        async setPersonalData(){
            let uid = this.$store.getters.uid
            await firebase.firestore()
                .collection("user")
                .doc(uid)
                .set({
                    cpf: this.personaldata.cpf,
                    tel: this.personaldata.tel,
                    nome: this.personaldata.nome,
                })
                .then(() => {
                    this.$store.commit('addStep')
                })
                .catch(err => console.log(err))
        },
    },
}
</script>