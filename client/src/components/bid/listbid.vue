<template>
  <v-app>
    <v-card flat width="100%"> 
      <v-col cols='12' class="mx-auto">
          <!--nome do produto-->
                    <h1 :class="layout.title">
                        Todos os leiloes
                    </h1>
                    <p :class="layout.description">
                        Leiloeiro aqui se encontra todos os leiloes registrados no nosso sistema. 
                    </p>
                    <v-spacer/>
    
        <!--CARTOES-->
        <v-row justify="space-around" no-gutters>
          <v-card 
            class="mt-6 mb-6 "
            width="24%"
            max-width="300"
            :key="card.length" 
            v-for="card in paginacao"  
          >
          <v-img
            height="200px"
            width="100%"
            :src="card.imgUrl"
            class="white--text align-end bold"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <v-card-title>{{card.name}}</v-card-title>
          </v-img>
          <v-row align="end" dense>
            <v-col>
              <v-card-title class="subtitle-2">{{card.description}}</v-card-title>
              <v-card-subtitle>{{card.startsOn}} - {{card.closedAt}}</v-card-subtitle>
              <v-card-subtitle class="title">Lotes: {{ card.items.length }}</v-card-subtitle>
            </v-col>
          </v-row>
          <v-divider/>
          <v-row justify="center" class="mt-2 mb-2">
            <v-btn 
            large
            color="#422321"
            class="white--text">Ver Lotes</v-btn>
          </v-row>
        </v-card>
      </v-row>
      </v-col>
    </v-card>
      <v-pagination
        v-model="page"
        :length="pages"
        circle
        color="#422321"
      />
  </v-app>
</template>

<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      target:null,
      page:1,
      porPagina: 2, 
    }
  },
  computed:{
    pages(){
      return  Math.ceil(this.cards.length / this.porPagina)  
    },
    paginacao () {
      return this.cards.slice((this.page - 1) * this.porPagina, this.page * this.porPagina)
    },
    ...mapState({
      cards: state => state.bidApp.bids,
      layout: state => state.cards.bid,
    })
  }
};
</script>
