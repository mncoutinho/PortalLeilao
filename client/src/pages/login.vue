<template >
    <v-main>
      <v-card flat width="100%" height="110vh" class="d-flex align-center ">
        <v-row justify="center" align="center">
          <v-col md="4" xs="12" sm="10">
            <v-card
              class="pa-8"  
              :elevation="10"
              min-height="600px"
              >
                <!--Titulo-->
                <v-row justify="center" class="pa-8">
                  <h1 class="brown--text">Entre Com:</h1>
                </v-row>
                <!--Email's Validação-->
                <formulario/>
                <v-row align="center" class="mb-3">
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
                  :color='btn.color'
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
                <v-row justify="center" dense>
                  <v-dialog
                  v-model="dialog"
                  width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        text
                        v-bind="attrs"
                        v-on="on"
                        :color='btn.color'
                        class="mt-6" 
                        v-text="'Não sei minha Senha'"
                      />
                    </template>
                    <v-card
                    :elevation="0"
                    dense
                    class="pa-6"
                    >
                      <v-row justify="center" dense>
                        <h2 class="brown--text">Digite seu e-mail:</h2>
                      </v-row>
                      <!--Email-->
                      <h4 class="brown--text">E-mail:</h4>
                      <v-text-field
                      v-model="accountData.email"
                      autocomplete="true"
                      type="email"
                      placeholder="exemplo@email.com"
                      :color='btn.color'
                      required
                      outlined
                      />
                      <!--reset, de senha-->
                      <v-row justify="center" dense>
                        <v-btn
                          rigth
                          :class="btn.type"
                          :color='btn.color'
                          class="mt-6" 
                          v-text="'Enviar'"
                          v-on:click="resetPassword"
                          @click="dialog = false"
                        />
                      </v-row>
                    </v-card>
                  </v-dialog>
                </v-row> 
              </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
</template>
<script>
import { mapState } from 'vuex'
import formulario from '../components/formularios/loginProvide'
export default {
  components:{
    formulario
  },
  data(){
    return{
      dialog:false,
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
      this.$router.push('/'),
      this.$store.commit('VISIBLE') 
    },
    getAccountData(accountData){
      this.accountData = accountData
    },
    async clique(){
        await this.$store.dispatch('signUserIn',this.accountData).then(
          this.$store.commit('VISIBLE')
        )
    },
    resetPassword(){
      this.$store.dispatch('resetPassword',this.accountData)
    },
  },
  created() {
    this.$store.commit('NOT_VISIBLE');
  },
  computed:{
    ...mapState({
      btn: state => state.button.buttonB
    }),
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