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
                {{this.$store.getters.user}}
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
                        @data="getPersonalData"
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
                        >Voltar</v-btn>
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
            UF: ['SP', 'RJ', 'MG', 'PR', 'MN'],            
        }
    },
    computed:{
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
            this.personalData = personalData
        },
        clique(botao){
            if(this.step===1 && botao=="signUp" ){
                this.step++
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
            await this.$store.dispatch('signUserUp', this.accountData)
        }
    }
}
</script>