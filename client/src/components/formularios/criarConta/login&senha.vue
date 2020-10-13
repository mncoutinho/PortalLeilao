<template>
  <v-container>
  {{user}}
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
                @click="voltar()"
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
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    
    data(){
        return{
            show:false,
            validador: true,
            checkbox:false,
            accountData:{
                email: '',
                senha: '',
                confirmacao: '',
            },
            rules:{
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
            }
        }
    },
    methods:{
        //cria o usuario
        async signUp () {
            await this.$store.dispatch('signUserUp', this.accountData)
            this.etapa;   
        },
        getAccountData(accountData){
            this.accountData = accountData
        },
        voltar(){
            this.$router.push('/'),
            this.$store.commit('VISIBLE')  
        }
    },
    computed: {
        ...mapState({
        user: (state) => state.userApp.user
        }),
        etapa(){
            if(this.user != null){
                return this.$store.commit('addStep')
            }
        }
    }
}
</script>