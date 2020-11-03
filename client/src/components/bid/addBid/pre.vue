<template>
  <v-app>
      <v-card
      flat>
        <v-row
        justify="center">
          <v-card
          width="600px"
          class="pa-10"
          >
              <v-col>
                <!--formas de pagamentos-->
                <v-container>
                  <h3>Formas de pagamento:</h3>
                  <v-row class="d-flex flex-wrap justify-space-between">
                    <v-radio-group 
                    v-model="radioGroup"
                    v-for="radio in radios"
                    :key="radio.length"
                    >
                        <v-icon size="50" color=#562B28>{{radio.icon}}</v-icon>
                        <v-radio
                          color=#562B28
                          :label="radio.nome"
                          :value="radio.valor"
                        ></v-radio>
                    </v-radio-group>
                  </v-row>
                </v-container>
                <v-btn
                  color=#562B28
                  center
                  class="white--text"
                  depressed
                  large
                  v-text="'Prosseguir'"
                  @click="next()"
                  ></v-btn>
                </v-col>
          </v-card>
        </v-row>
      </v-card>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      radioGroup: 'banco',
      radios:[
        {icon:'fas fa-barcode',nome:'Boleto Bancário', valor:'banco'},
        {icon:'fas fa-credit-card',nome:'Cartão', valor:'cartão'},
        {icon:'fab fa-cc-paypal',nome:'PayPal', valor:'pay'},
      ]
    }
  },
  methods:{
    next(){
      this.$store.commit('ADD')
    }
  }
}
</script>