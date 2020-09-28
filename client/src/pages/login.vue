<template >
    <v-main >
      <v-row justify="center">
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
            <v-form
            ref="form"
            v-model="validador"
            >
              <!--Email-->
              <h4 class="brown--text">E-mail:</h4>
              <v-text-field
              v-model="accountData.email"
              :rules="rules.email"
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
              :rules="rules.senha"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
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
              @click="voltar()"
              color=#562B28
              class="white--text"
              depressed
              large
              >Voltar</v-btn>
              <v-spacer/>
              <!--Botão Seguir-->
              <v-btn
              @click="clique()"
              :disabled="!validador"
              color=#562B28
              class="white--text"
              depressed
              large
              >Entrar</v-btn>
            </v-row>
          </v-card>
      </v-row>
    </v-main>
</template>
<script>
import formulario from '../components/formularios/emailValidaçao'
export default {
  components:{
    formulario
  },
  data(){
    return{
      validador:true,
      show1: false,
      accountData:{
        email: '',
        senha: '',
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
      }
    }
  },
  methods:{
    voltar(){
      this.$router.push('/')
    },
    getAccountData(accountData){
      this.accountData = accountData
    },
    async clique(){
        await this.$store.dispatch('signUserIn',this.accountData).then(
        )
    },
  },
  computed:{
    user(){
      return this.$store.getters.user
      }, 
    },
  watch:{
    user(value){
      if(value != null && value != undefined){
        this.$router.push('/')
      }
    }
  },  
}
</script>