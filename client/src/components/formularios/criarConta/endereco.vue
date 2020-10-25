<template>
  <v-container>
    {{endereco}}
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
                            v-model="validador"
                            >
                                <!--CEP-->
                                    <v-tooltip v-model="mostra" bottom transition="scroll-y-transition">
                                        <template v-slot:activator="{ on, attrs }">
                                            <h4 class="brown--text">CEP:</h4>
                                            <v-text-field
                                            @change="getCep(endereco.cep)"
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
                                placeholder="RJ"
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
                                placeholder="45"
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
                                        :disabled="!validador"
                                        >Finalizar</v-btn>
                                    </v-row>
                            </v-form>
                        </v-col>
                    </v-card>
  </v-container>
</template>

<script>
import {mask} from 'vue-the-mask'
import { mapState } from 'vuex'
import axios from 'axios';
export default {
    directives: {mask},
    data(){
        return{
            validador:true,
            mostra:false,
            endereco:{}
        }
    },
    methods:{
        //pegar cep
        getCep(cep){
            cep = this.endereco.cep
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
        setEndereco(){
            this.$store.dispatch("updateData",{id:this.user.uid, data: this.endereco })
        },
        belowStep(){
            this.$store.commit('belowStep')
        },
        homeStep(){
            this.$store.commit('VISIBLE')
            if(this.endereco.numero == undefined || this.endereco.complemento == undefined 
               || this.endereco.numero == "" || this.endereco.complemento == "" 
            ){
                let msg = "Complete todos os campos"
                //alert(msg)
                return this.$store.commit('ALGO_INESPERADO', msg)
            }else{
                this.setEndereco()
                this.$store.commit('homeStep')
                this.$router.push('/')
            }
        }
    },
    computed:{
      ...mapState({
            uf: state => state.uf,
            //endereco: state => state.userApp.userData,
            user: state => state.userApp.user
        })
    },
}
</script>