<template>
  <v-app>
    <v-card flat width="100%"> 
      <v-col cols='12' class="mx-auto">
          <!--TITULO-->
                    <h1 :class="layout.title">
                        Todos os leiloes
                    </h1>
                    <p :class="layout.description">
                        Leiloeiro aqui se encontra todos os leiloes registrados no nosso sistema. 
                    </p>
                    <v-spacer/>
    
        <!--CARTOES-->
        <v-row 
          justify="space-around" 
          no-gutters
        >
          <v-card 
            :class="layout.card.type"
            :width="layout.card.width"
            :key="card.length" 
            v-for="card in paginacao"   
          >
          <v-img
            :height="layout.img.height"
            :width="layout.img.width"
            :src="card.imgUrl"
            :class="layout.img.type"
            :gradient="layout.img.gradient"
          >
            <v-card-title>{{card.name}}</v-card-title>
          </v-img>
          <v-row align="end" dense>
            <v-col>
              <v-card-title 
                :class="layout.card.title"
              >
                {{card.description}}
              </v-card-title>
              <v-card-subtitle
                :class="layout.card.subtitle"
              >
                {{card.startsOn}} - {{card.closedAt}}
              </v-card-subtitle>
              <v-divider />
              <v-card-subtitle 
                :class="layout.card.content"
              >
                Lotes: {{filter(card.items)}}
              </v-card-subtitle>
            </v-col>
          </v-row>

          <!-- BOTOES -->
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

    }
  },
  computed:{
    pages(){
      return  Math.ceil(this.cards.length / this.layout.pagesLimit)  
    },
    paginacao () {
      return this.cards.slice((this.page - 1) * this.layout.pagesLimit, this.page * this.layout.pagesLimit)
    },
    ...mapState({
      cards: state => state.bidApp.bids,
      layout: state => state.cards.bid,
    })
  },
  methods: {
    filter(items){
      if(!items){
        return "error"
      }else{
        return items.length
      } 
    },
  },
};
</script>
