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
                v-model="validador"
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
                    />
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
                    <div id="recaptcha-container"></div>
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
                            :disabled="!validador"
                            >Proximo</v-btn>
                        </v-row>
                    </v-form>
                </v-col>
        </v-card>
  </v-container>
</template>

<script>
import {mask} from 'vue-the-mask'
import {mapState} from 'vuex'
import firebase from 'firebase'
export default {
    directives: {mask},
    data(){
        return{
            validador:true,
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
        setPersonalData(){
            let uid = this.user.uid
            let data = this.personaldata
            this.$store.dispatch('setData',{id: uid, data: data})
                .then(() => {
                    this.etapa;
                })
        },
        belowStep(){
            //this.$store.commit('belowStep')
            this.$router.push('/')
        },
        getPhoneNumberFromUserInput(){
            return 55 + this.personaldata.tel
        },
    },
    computed: {
        ...mapState({
            user: (state) => state.userApp.user
        }),
        etapa(){
            if(this.user != null){
                return this.$store.commit('addStep')
            }else{
                return this.$store.commit('MSG_ERROR',"Aconteceu algo inesperado")
            }
        }
    },
    created(){
        this.mapState
        if(this.user == undefined){
            this.$router.push('/')
        }
        setTimeout(function() {
            this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
                'size': 'normal',
                'callback': function(response) {
                    console.log("success", response);
                },
                'expired-callback': function() {
                    console.log("expired-callback");
                }
            });
            const phoneNumber = 55 + this.personaldata.tel;
            const appVerifier = this.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    this.confirmationResult = confirmationResult;
                }).catch((error)=>{
                    console.log(error)
            });

            this.recaptchaVerifier.render().then(function(widgetId) {
                window.recaptchaWidgetId = widgetId;
            });
        }, 2000)
    }
}
</script>