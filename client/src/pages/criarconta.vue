<template>
    <v-content>
        <v-row  justify="center">
            <v-window
                width="100%"
                align="center"
                v-model="step">
                <!--fase 1-->
                <v-window-item :value="1">
                    <v-card max-width="30%" min-width="450" class="mb-12 pa-12"  :elevation="10" width="50%" >
                    <user titulo="Cadastre-se com..."
                    @email="getAccountData"/>
                    </v-card>
                </v-window-item>

                <!--fase 2-->
                <v-window-item :value="2">
                    <v-card max-width="30%" min-width="450" class="mb-12 pa-12"  :elevation="10" width="50%" >
                        <personal/>
                    </v-card>
                </v-window-item>
                <!--fase 3-->
                <v-window-item :value="3">
                    <v-card max-width="30%" min-width="450" class="mb-12 pa-12"  :elevation="10" width="50%" >
                        <Address/>
                    </v-card>
                </v-window-item>
                <!--Button-->
                <v-row align="end" justify="center">
                    <v-card-actions>
                        <!--back to home-->
                        <v-btn
                        text
                        large
                        depressed
                        color="#422321"
                        to="/"
                        v-if="step === 1"
                        >
                    
                            voltar
                        </v-btn>
                        <!--back to item-->
                        <v-btn
                        text
                        large
                        depressed
                        color="#422321"
                        @click="step--"
                        v-if="step != 1">
                            voltar
                        </v-btn>
                        <v-spacer/>
                        <!--next-->
                        <v-btn
                        color="#422321"
                        class="white--text"
                        depressed
                        large
                        v-if="step != 3"
                        @click="clique()">
                            Proximo
                        </v-btn>
                        <!--next page-->
                        <v-btn
                        color="#422321"
                        class="white--text"
                        depressed
                        large
                        v-if="step === 3"
                        to="/"
                        >
                            Finalizar
                        </v-btn>   
                    </v-card-actions>
                </v-row>
            </v-window>  
        </v-row>
    </v-content>
</template>
<script>
import firebase from 'firebase/app';
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
            accountData:{
          email: '',
        senha: ''

        },
            step: 2,
            UF: ['SP', 'RJ', 'MG', 'PR', 'MN'],            
        }
    },
  
    methods:{
        getAccountData(accountData){
            this.accountData = accountData
                },
        clique(){
            if(this.step==1){
                this.signUp();
            }
        },
        signUp () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
        ( user => {
            this.$store.state.account = user;
            alert('Sua conta foi cadastrata com sucesso!')
        }),
        (err) => {
          alert('Aconteceu algo inesperado. ' + err.message)
        }
      );
    }
    }
}

</script>