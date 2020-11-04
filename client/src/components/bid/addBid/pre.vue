<template>
  <v-app>
      <v-card
      flat>
        <v-row
        justify="center">
          <v-card
          width="650px"
          class="pa-8"
          >
              <v-col>
                <!--formas de pagamentos-->
                <v-container>
                  <h3>Formas de pagamento:</h3>
                  <v-row 
                  dense 
                  class="d-flex flex-wrap justify-space-between">
                    <v-radio-group 
                    v-model="radioGroup"
                    v-for="radio in radios.pagamento"
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
                <!--Limite de Lotes-->
                <v-container>
                  <h3>Quantidade de Lotes:</h3>
                  <v-row 
                  dense>
                    <v-col 
                    cols="4">
                      <v-radio-group
                      v-for="radio in radios.lotes"
                      :key="radio.length"
                      v-model="radioLimite"
                      >
                        <v-radio
                        color=#562B28
                        :value="radio.valor"
                        :label="`${radio.nome} lotes`"
                        @change="adicionarValor(radio.valor)">
                        </v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col
                    cols="8">
                      <v-card
                      class="d-flex align-center"
                      flat
                      height="320px"
                      width="350px">
                        <v-card-title
                        class="d-flex" 
                        style="font-size:60px; color:#562B28"
                        >R$ {{numero}}</v-card-title>
                      </v-card>
                    </v-col>
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
      radioLimite: '50',
      valor:0,
      radios:{
        pagamento:[
          {icon:'fas fa-barcode',nome:'Boleto Bancário', valor:'banco'},
          {icon:'fas fa-credit-card',nome:'Cartão', valor:'cartão'},
          {icon:'fab fa-cc-paypal',nome:'PayPal', valor:'pay'},
        ],
        lotes:[
          {nome:'50', valor:'50'},
          {nome:'100', valor:'100'},
          {nome:'500', valor:'500'},
          {nome:'1000', valor:'1000'},
          {nome:'+1000', valor:'+1000'},
        ]
      }
    }
  },
  computed:{
    numero(){
      return this.$store.state.value.num
    }
  },
  methods:{
    next(){
      this.$store.commit('ADD')
    },
    adicionarValor(e){
      if(e === '50'){
        return this.$store.commit('CINQUENTA');
      }
      if(e === '100'){
        return this.$store.commit('CEM');
      }
      if(e === '500'){
        return this.$store.commit('QUINHENTOS');
      }
      if(e === '1000'){
        return this.$store.commit('MIL');
      }
    }
  }
}
</script>