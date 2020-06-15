<template>
    <v-form
    v-model="valid"
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
            lazy-validation
            v-model="accountData.email"
            :rules="emailRules"
            @change="$emit('email', accountData)"
            autocomplete="true"
            label="E-mail"
            placeholder="exemplo@mail.com"
            required
            color="green"/>
            <!--Password-->   
            <v-text-field
            lazy-validation
            v-model="accountData.senha"
            :rules="senhaRules"
            autocomplete="true"
            type="password"
            label="Senha"
            placeholder="**********"
            required
            color="green"
            />
        </v-col>
    </v-row>    
    <v-row justify="center">
        <v-col
        :key="button.text"
          v-for="button in buttons">
                    <v-btn
                    :color="button.color"
                    center
                    class="white--text"
                    depressed
                    large
                    @click="button.click"
                    v-text="button.text"
                    />
        </v-col>
      </v-row>
  </v-form>

</template>
<script>
export default {
  props: ['titulo','buttons'],
  data () {
    return {
        valid:true,
        accountData:{
          email: '',
        senha: ''

        },
        senhaRules: [
                v => !!v || 'Este campo é necessario',
                v => !!v && v.length >= 5 || 'Digite no minimo 5 caracter'
            ],    
        emailRules: [
        v => !!v || 'Campo Vazio!',
        v => /.+@.+\..+/.test(v) || 'E-mail precisa ser valido!',
      ],
       checkbox: false,
        is:[ {icon:'fab fa-facebook-f'}, {icon:'fab fa-google'},]
    };
  },
};

</script>

<style>

</style>