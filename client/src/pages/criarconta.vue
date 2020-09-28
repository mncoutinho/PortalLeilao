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
                            <!--Titulo-->
                            <v-row justify="center" class="pa-8">
                            <h1 class="brown--text">Entre Com:</h1>
                            </v-row>
                            <!--Email's Validação-->
                            <formulario/>
                            <v-row align="center">
                            <v-divider class="mx-10"/>
                            <h4 class="brown--text">ou</h4>
                            <v-divider class="mx-10" />
                            </v-row>
                            <v-row justify="center" class="pa-8">
                                <h1 class="brown--text">Cadastre-se</h1>
                            </v-row>
                            <v-col cols="12">
                                <v-form
                                ref="form"
                                v-model="validador"
                                >
                                    <!--Email-->
                                    <h4 class="brown--text">E-mail:</h4>
                                    <v-text-field
                                    :rules="rules.email"
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
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show ? 'text' : 'password'"
                                    :rules="rules.senha"
                                    @click:append="show = !show"
                                    v-model="accountData.senha"
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
                                    :rules="rules.confirmarSenha && [(accountData.senha === accountData.confirmacao) || 'Senha deve ser igual']"
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show ? 'text' : 'password'"
                                    @click:append="show = !show"
                                    autocomplete="true"
                                    placeholder="**********"
                                    color="brown"
                                    required
                                    outlined
                                    />
                                    <!--Termos e condição-->
                                    <v-card
                                    flat
                                    max-width="400px">
                                        <v-checkbox
                                        color="brown"
                                        v-model="checkbox"
                                        :rules="[v => !!v]"
                                        label="Eu concordo com o Termos de Serviços e política de privacidade e cookies?"
                                        required
                                        />
                                    </v-card>
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
                                    @click="signUp()"
                                    :disabled="!validador"
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
                </v-window-item>
            </v-window>
        </v-row>
    </v-main>
</template>
<script>
import formulario from '../components/formularios/loginProvide'
import {mask} from 'vue-the-mask'
import axios from 'axios'
import { mapState } from 'vuex'
const firebase = require('firebase/app');
export default {
    components:{
        formulario
    },
    directives: {mask},
    data(){
        return{
            show:true,
            step:1,
            validador:true,
            validador2:true,
            validador3:true,
            checkbox:false,
            endereco:{
                cidade:'',
                bairro:'',
                cep:'',
                complemento:'',
                endereco:'',
                numero:'',
                uf:''
            },
            accountData:{
                email: '',
                senha: '',
                confirmacao: '',
            },
            personaldata:{
                nome:'',
                cpf:'',
                tel:'' 
            },
            rules: {
                email:[
                    value => !!value || 'E-mail necessário',
                    value => /.+@.+\..+/.test(value) || 'E-mail deve ser valido' ,
                ],
                senha:[
                    value => !!value || 'Senha é necessária',
                    value => value.length >=  6 || 'Mínimo  de 6 caracteres'
                ],
                confirmarSenha:[
                    value => !!value || 'É Necessário Confirmar Senha ',
                    value => value.length >=  6 || 'Mínimo  de 6 Caracteres',
                ],
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
                this.setEndereco().then(
                    this.$router.push('/') && this.$store.commit('CADASTRADO_SUCESSO')
                )
            }else{
                this.$router.push('/')
            }
        },
        //cria o usuario
        async signUp () {
            await this.$store.dispatch('signUserUp', this.accountData).then(this.addStep());
        },
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
        //metodos para registrar usuario no banco
        getAccountData(accountData){
            this.accountData = accountData
        },
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
                    this.addStep()
                })
                .catch(err => console.log(err))
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
            .then(this.$store.commit('CADASTRADO_SUCESSO'))
            .catch(err => console.log(err))
        }
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