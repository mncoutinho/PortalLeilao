<template>
  <v-container>
      <v-card
                    class="mb-12 pa-10"  
                    :elevation="10"
                    min-width="500px"
                    >
                        <v-row justify="center" class="pa-8">
                            <h1 class="brown--text">Endereço</h1>
                        </v-row>
                        <v-col cols="12">
                            <v-form
                            ref="form"
                            v-model="validador3"
                            >
                                <!--CEP-->
                                    <v-tooltip v-model="mostra" bottom transition="scroll-y-transition">
                                        <template v-slot:activator="{ on, attrs }">
                                            <h4 class="brown--text">CEP:</h4>
                                            <v-text-field
                                            @change="getCep(endereco.cep)"
                                            :rules="rules.cep"
                                            v-model="endereco.cep"
                                            v-bind="attrs"
                                            v-on="on"
                                            maxlength="9"
                                            v-mask="['#####-###']"
                                            placeholder="12345-678"
                                            color="brown"
                                            required
                                            outlined
                                            />
                                        </template>
                                    <span color="brown">Depois de anotar o Cep, basta apertar Enter</span>
                                    </v-tooltip>
                                <!--uf-->
                                <h4 class="brown--text">UF:</h4>
                                <v-select
                                :items="uf" 
                                v-model="endereco.uf"
                                color="brown"
                                required
                                outlined
                                />
                                <!--Cidade-->
                                <h4 class="brown--text">Cidade:</h4>
                                <v-text-field
                                v-model="endereco.cidade"
                                placeholder="Rio de Janeiro"
                                color="brown"
                                required
                                outlined
                                />
                                <!--Bairro-->
                                <h4 class="brown--text">Bairro:</h4>
                                <v-text-field
                                v-model="endereco.bairro"
                                placeholder="Leblon"
                                color="brown"
                                required
                                outlined
                                />
                                <!--rua-->
                                <h4 class="brown--text">Rua:</h4>
                                <v-text-field
                                v-model="endereco.endereco"
                                placeholder="Rua. 20 "
                                color="brown"
                                required
                                outlined
                                />
                                
                                <!--numero-->
                                <h4 class="brown--text">Numero:</h4>
                                <v-text-field
                                v-model="endereco.numero"
                                placeholder="454"
                                color="brown"
                                required
                                outlined
                                />
                                <!--Complemento-->
                                <h4 class="brown--text">Complemento:</h4>
                                <v-text-field
                                v-model="endereco.complemento"
                                placeholder="Apartamento 123"
                                color="brown"
                                outlined
                                required/>
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
                                        @click="homeStep()"
                                        :disabled="!validador3"
                                        >Proximo</v-btn>
                                    </v-row>
                            </v-form>
                        </v-col>
                    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
import {mask} from 'vue-the-mask'
import { mapState } from 'vuex'
const firebase = require('firebase/app');
export default {
    directives: {mask},
    data(){
        return{
            validador3:true,
            mostra:false,
            endereco:{
                cidade:'',
                bairro:'',
                cep:'',
                complemento:'',
                endereco:'',
                numero:'',
                uf:''
            },
            rules: {
                cep:[
                    value => !!value || 'CEP, Necessário',
                    value => value.length >=  9 || 'CEP, Invalido',
                ],
                Complemento:[
                    value => !!value || 'Complemento, Necessário',
                    value => value.length >=  1 || 'Complemento, Necessário',
                ],
                numero:[
                    value => !!value || 'Numero, Necessário',
                    value => value.length >=  1 || 'Numero, Necessário',
                ],
            }
        }
    },
    methods:{
        //pegar cep
        getCep(cep){
            console.log(cep);
            axios({
                method: 'get',
                url:'https://viacep.com.br/ws/'+cep+'/json/'  
            }).then(doc =>{
                this.endereco = {
                    cep: doc.data.cep,
                    cidade: doc.data.localidade,
                    bairro: doc.data.bairro,
                    endereco: doc.data.logradouro,
                    uf: doc.data.uf
                }
            })
        },
        async setEndereco(){
            let uid = this.$store.getters.uid
            await firebase.firestore()
            .collection("user")
            .doc(uid)
            .update({
                cidade:this.endereco.cidade,
                bairro:this.endereco.bairro,
                cep:this.endereco.cep,
                endereco:this.endereco.endereco,
                numero:this.endereco.numero,
                uf:this.endereco.uf,
                complemento:this.endereco.complemento?this.endereco.complemento:"",
            })
            .then(
                this.$store.commit('CADASTRADO_SUCESSO'),
            )
            .catch(err => console.log(err))
        },
        homeStep(){
            this.setEndereco()
            this.$store.commit('homeStep').then(()=>{
                this.$router.push('/')
            })
        }
    },
    computed:{
      ...mapState({
            uf: state => state.uf
        })
    },
}
</script>