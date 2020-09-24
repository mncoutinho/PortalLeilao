<template>
    <v-main>
        <v-row justify="center">
            <v-window
            v-model="step">
                <!--Primeira fase-->
                <v-window-item :value="1">
                        <v-card
                         class="mb-12 pa-8"  
                         :elevation="10"
                         min-width="500px"
                        >
                            <v-row justify="center" class="pa-8">
                                <h1 class="brown--text">Cadastre-se</h1>
                            </v-row>
                            <v-col cols="12">
                                <v-form
                                ref="form"
                                >
                                    <!--Email-->
                                    <h4 class="brown--text">E-mail:</h4>
                                    <v-text-field
                                    @change="accountData"
                                    v-model="accountData.email"
                                    autocomplete="true"
                                    type="email"
                                    placeholder="exemplo@email.com"
                                    color="brown"
                                    required
                                    outlined
                                    />
                                    <!--senha-->
                                    <h4 class="brown--text">Senha:</h4>
                                    <v-text-field
                                    v-model="accountData.senha"
                                    type="password"
                                    autocomplete="true"
                                    placeholder="**********"
                                    color="brown"
                                    required
                                    outlined
                                    />
                                    <!--Confirmar senha-->
                                    <h4 class="brown--text">Confirmar Senha:</h4>
                                    <v-text-field
                                    v-model="accountData.confirmacao"
                                    type="password"
                                    autocomplete="true"
                                    placeholder="**********"
                                    color="brown"
                                    required
                                    outlined
                                    />
                                </v-form>
                                <v-row dense>
                                    <!--Botão Voltar-->
                                    <v-btn
                                    color=#562B28
                                    class="white--text"
                                    depressed
                                    large
                                    @click="homeStep()"
                                    >Voltar</v-btn>
                                    <v-spacer/>
                                    <!--Botão Seguir-->
                                    <v-btn
                                    color=#562B28
                                    class="white--text"
                                    depressed
                                    large
                                    @click="addStep()"
                                    >Proximo</v-btn>
                                </v-row>
                            </v-col>
                        </v-card>
                </v-window-item>
                <!--Segunda fase-->
                <v-window-item :value="2">
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
                            >
                                <!--name-->
                                <h4 class="brown--text">Nome:</h4>
                                <v-text-field
                                v-model="accountData.nome"
                                color="brown"
                                placeholder="Nome Sobrenome"
                                required
                                outlined
                                >
                                </v-text-field>
                                <!--CPF-->
                                <h4 class="brown--text">CPF:</h4>
                                <v-text-field
                                v-model="accountData.cpf"
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
                                v-model="accountData.tel"
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
                                        @click="addStep()"
                                        >Proximo</v-btn>
                                    </v-row>
                            </v-form>
                        </v-col>
                    </v-card>
                </v-window-item>
                <!--Terceira fase-->
                <v-window-item :value="3">
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
                            >
                                <!--CEP-->
                                <h4 class="brown--text">CEP:</h4>
                                <v-text-field
                                v-model="accountData.cep"
                                maxlength="9"
                                v-mask="['#####-###']"
                                placeholder="12345-678"
                                color="brown"
                                required
                                outlined
                                @change="getCep(accountData.cep)"
                                />
                                <!--Endereço-->
                                <h4 class="brown--text">Endereço:</h4>
                                <v-text-field
                                v-model="accountData.endereco"
                                placeholder="Rua. 20 "
                                color="brown"
                                required
                                outlined
                                />
                                <!--Complemento-->
                                <h4 class="brown--text">Complemento:</h4>
                                <v-text-field
                                v-model="accountData.complemento"
                                placeholder="Zona Sul"
                                color="brown"
                                outlined
                                required/>
                                <!--Rua-->
                                <h4 class="brown--text">Bairro:</h4>
                                <v-text-field
                                v-model="accountData.bairro"
                                placeholder="Leblon"
                                color="brown"
                                required
                                outlined
                                />
                                <!--Rua-->
                                <h4 class="brown--text">Cidade:</h4>
                                <v-text-field
                                v-model="accountData.cidade"
                                placeholder="Rio de Janeiro"
                                color="brown"
                                required
                                outlined
                                />
                                <!--uf-->
                                <h4 class="brown--text">UF:</h4>
                                <v-select
                                :items="uf" 
                                v-model="accountData.uf"
                                color="brown"
                                required
                                outlined
                                />
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
                                        >Proximo</v-btn>
                                    </v-row>
                            </v-form>
                        </v-col>
                    </v-card>
                </v-window-item>
            </v-window>
        </v-row>
    </v-main>
</template>
<script>
import {mask} from 'vue-the-mask'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    directives: {mask},
    data(){
        return{
            step:1,
            accountData:{
                email: '',
                senha: '',
                confirmacao: '',
                nome:'',
                cpf:'',
                tel:'',
                cidade:'',
                bairro:'',
                cep:'',
                complemento:'',
                endereco:'',
                numero:'',
                uf:''
            },
        }
    },
    methods: {
        //metodos para botao
        addStep(){
            this.step++
        },
        belowStep(){
            this.step--
        },
        homeStep(){
            if(this.step === 3){
                this.signUp().then(
                    this.$router.push('/') && this.$store.commit('CADASTRADO_SUCESSO')
                )
            }else{
                this.$router.push('/')
            }
        },
        //cria o usuario
        async signUp () {
            console.log(this.accountData)
            await this.$store.dispatch('signUserUp', this.accountData)
        },
        //pegar cep
        getCep(cep){
            console.log(cep);
            axios({
                method: 'get',
                url:'https://viacep.com.br/ws/'+cep+'/json/'  
            }).then(doc =>{
                this.accountData = {
                    cep: doc.data.cep,
                    cidade: doc.data.localidade,
                    bairro: doc.data.bairro,
                    endereco: doc.data.logradouro,
                    uf: doc.data.uf
                }
            })
        },
        //metodos para registrar usuario no banco
        getAccountData(accountData){
            this.accountData = accountData
        },
        getPersonalData(personalData){
            this.accountData.cpf = personalData.cpf,
            this.accountData.tel = personalData.tel,
            this.accountData.nome = personalData.nome
        },
        getEndereco(parametro){
            this.accountData.cidade = parametro.cidade
            this.accountData.bairro = parametro.bairro
            this.accountData.cep = parametro.cep
            this.accountData.complemento = parametro.complemento
            this.accountData.endereco = parametro.endereco
            this.accountData.uf = parametro.uf
            this.accountData.numero = parametro.numero
        },
    },
    computed:{
      ...mapState({
            uf: state => state.uf
        })
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