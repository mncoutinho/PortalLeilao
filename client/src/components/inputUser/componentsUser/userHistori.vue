<template>
  <v-app>
      <v-card
            width="80%"
            height="400"
            elevation="0"
            >
              <v-row justify="center">
                <h1>Historico</h1>
              </v-row>
              <!--card com as informaçoes-->
              <v-col>
                {{"Total de "+hist.length + " lances feitos em "+ contador(this.pecas, this.hist)+ " pecas"}}
                <v-card
                class="mb-6"
                width="100%"
                v-for="historico in hist"
                :key="historico.length"
                >
                  <v-row
                 >
                    <!--Imagem do Produto-->
                    <v-col sm="2">
                      <v-img
                      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      width="250"
                      height="200"
                      class="ml-3"
                      >
                      </v-img>
                    </v-col>
                    <!--Nome do produto-->
                      <v-row align="center" class="ml-6">
                        <v-col sm="6">
                          <strong class="title">{{historico.peca}}</strong>
                        </v-col>
                      </v-row>
                      <v-spacer/>
                      <v-row align="center" class="ml-6">
                        <!--Codigo do produto-->
                        <v-col sm="4">
                          <strong class="headline">{{historico.id}}</strong>
                        </v-col>
                        <!--Preço-->
                        <v-col sm="4">
                          <strong class="headline">{{"R$"+historico.lance+",00"}}</strong>
                        </v-col>
                      <!--Estado-->
                        <v-btn
                        class="title mr-2"
                        color="error"
                        disabled>
                        Lance Feito
                        </v-btn>
                      </v-row>
                  </v-row> 
                </v-card>
              </v-col>
            </v-card>
            
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      pecas:[]
    }
  },
  methods: {
    contador(peca, ponto){
      let atual = ""
      ponto = this.hist.length
      
      for (let i = 0; i < ponto; i++){
        console.log(i)
        if(atual != this.hist[i].peca){
          peca.push(this.hist[i].peca)
          atual = this.hist[i].peca
        }
        //console.log(this.hist[i].peca)
        
      }
      return peca.length
    }
  },
  created() {
    this.$store.dispatch('searchlance', this.user.uid)
  },
  computed: {
    ...mapState({
      hist: state => state.itemApp.resultLances,
      user: state => state.userApp.user
    }),
    
  },

}
</script>
