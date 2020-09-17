<template>
    <v-main>
        <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
        </v-layout>
        <v-row  justify="center">
            <v-window
                width="100%"
                align="center"
                v-model="step">
                <!--fase 1-->
                <v-window-item :value="1">
                    <v-card max-width="30%" min-width="450" class="mb-12 pa-12"  :elevation="10" width="50%" >
                        <user titulo="Cadastre-se com..."
                            @email="getAccountData"
                            :buttons="buttons" 
                            @clicked="clique"
                            :comfirmarLayout ="comfirmar"
                        />
                        <v-btn
                            color=#422321
                            center
                            class="white--text"
                            depressed
                            large
                            style="postion: absolute;top:-55px;left:-100px"
                            @click="voltar"
                        >Voltar</v-btn>
                    </v-card>
                </v-window-item>
                <!--fase 2-->
                <v-window-item :value="2">
                    <v-card max-width="30%" min-width="450" class="mb-12 pa-12"  :elevation="10" width="50%" >
                        <personal
                        @data="getPersonalData"
                        :buttons="dataButtons"
                        @clicked="clique"/>
                        <v-btn
                            color=#422321
                            center
                            class="white--text"
                            depressed
                            large
                            style="postion: absolute;top:-55px;left:-100px"
                            @click="voltarStep"
                        >Voltar</v-btn>
                    </v-card>
                </v-window-item>
                <!--fase 3-->
                <v-window-item :value="3">
                    <v-card max-width="30%" min-width="450" class="mb-12 pa-12"  :elevation="10" width="50%" >
                        <Address
                        @endereco="getEndereco"
                        :buttons="finnalyButtons"
                        @clicked="clique"/>
                        <v-btn
                            color=#422321
                            center
                            class="white--text"
                            depressed
                            large
                            style="postion: absolute;top:-68px;left:-100px"
                            @click="voltarStep"
                        >
                            Voltar
                        </v-btn>
                    </v-card>
                </v-window-item>
                <!--Button-->
                <v-row align="end" justify="center">
                </v-row>
            </v-window>  
        </v-row>
    </v-main>
</template>
<script>
import user from '../components/Modal/criarUsuario/formEmailSenha';
import personal from '../components/Modal/criarUsuario/cadastrarDadosPessoais';
import Address from '../components/Modal/endereco'
import {mapState} from 'vuex'
export default {
    
    components:{
        user,
        personal,
        Address
    },
    
    data() {
        return{
            personalData:{},
            accountData:{},
            enderecoData:{},
            //botoes
            comfirmar:true,
            buttons:[
                {
                    text:"Criar",
                    click:'signUp',
                    color:"#422321",
                }
            ],
            dataButtons:[
                {
                    text:"Salvar",
                    click:'dado',
                    color:"#422321",
                },  
            ],
            finnalyButtons:[
                {
                    text:"Finaliza",
                    click:'finalizar',
                    color:"#422321",
                }
            ],
            step: 1,           
        }
    },
    computed:{
            ...mapState({
                uf: state => state.uf
            }),
            user(){
                return this.$store.getters.user
            },
            error(){
                return this.$store.getters.error
            },
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
    methods:{
        voltar(){
            this.$router.push('/')
        },
        voltarStep(){
            this.step--
        },
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
         clique(botao){
            if(this.step===1 && botao=="signUp" ){
                this.step++
            }else{
                console.log("err")
            }
            if(this.step===2 && botao=="dado"){
                this.step++
            }
            if(this.step===3 && botao=="finalizar"){
                this.signUp().then(
                )    
            }    
        },
        async signUp () {
            console.log(this.accountData)
            await this.$store.dispatch('signUserUp', this.accountData)
        }
    }
}
</script>