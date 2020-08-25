<template>
    <v-form
    lazy-validation>
    <!--title-->
    <v-row justify="center" class="mt-6 mb-3">
        <h2>{{titulo}}</h2>
    </v-row>
    <!--icon-->
    <v-row justify="center">
        <v-col
        :key="i.icon"
        v-for="i in is"
        >
          <v-icon size="50" color="#422321" > {{i.icon}} </v-icon>
        </v-col>
    </v-row>
    <v-row 
    justify="center"
    class="mt-12">
        <h3>Ou :</h3>
    </v-row>
    <v-row justify="center">
        <v-col
        cols="10"
        >
            <!--Email-->
            <v-text-field
            required
            v-model="accountData.email"
            :rules="emailRules"
            @change="$emit('email', accountData)"
            autocomplete="true"
            label="E-mail"
            placeholder="exemplo@mail.com"
            color="green"/>
            <!--Password-->   
            <v-text-field
            required
            v-model="accountData.senha"
            :rules="[regras.requisicao, regras.min]"
            type="password"
            @change="$emit('email', accountData)"
            autocomplete="true"
            label="Senha"
            placeholder="**********"
            color="green"
            />
            <v-text-field
            required
            v-if="comfirmarLayout"
            :rules="[regras.requisicao, regras.min, comparePasswords]"
            type="password"
            v-model="accountData.confirmacao"
            autocomplete="true"
            label="Comfirmar Senha"
            placeholder="**********"
            />
        </v-col>
    </v-row>    
    <v-row justify="center">
        <v-col
        :key="button.text"
          v-for="button in buttons">
            <v-row justify="end" class="mr-6">
              <v-btn
                center
                depressed
                large
                class="white--text"
                v-text="button.text"
                @click="$emit('clicked',button.click)"
                :color="button.color"
                :disabled="estaDesativado"
                />
          </v-row>
        </v-col>
      </v-row>
  </v-form>

</template>
<script>
export default {
  props: ['titulo','buttons', 'comfirmarLayout'],
  computed:{
      estaDesativado(){
        return this.accountData.email && this.accountData.senha !== '' ? false : true
      },
      comparePasswords () {
        return this.accountData.senha !== this.accountData.confirmacao ? 'senha incorreta' : 'senha correta'
      },
  },
  data () {
    return {
        accountData:{
          email: '',
          senha: '',
          confirmacao: ''
        },
        regras: {
          requisicao: value => !!value || 'Valor requerido',
          min: v => v.length >= 5 || 'mínimo de 5 caractes',
        },
        emailRules: [
            v => !!v || 'Campo Vazio!',
            v => /.+@.+\..+/.test(v) || 'E-mail precisa ser valido!',
          ],
       checkbox: false,
        is:[{icon:'fab fa-facebook-f'}, {icon:'fab fa-google'},]
    };
  },
};
</script>