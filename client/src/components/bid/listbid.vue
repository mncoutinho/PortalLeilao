<template>
  <v-app>
    <v-card flat width="67vw" class="mx-auto">

      <v-row justify="center" class="mt-8">
        <p class="display-2">Leiloes</p>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field outlined label="Procure aqui" append-icon="mdi-map-marker"></v-text-field>
        </v-col>
      </v-row>
      <v-divider class="mx-12" />
      <v-row justify="space-around" >
        <!--CARTOES-->
        <v-card width="24%" :key="card.length" v-for="card in paginacao" class="mt-9 mb-3">
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
              <v-card-subtitle class="title">Lotes: {{ pegar }}</v-card-subtitle>
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
import { mapState, mapGetters} from "vuex";
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
      console.log(this.cards)
      return  Math.ceil(this.cards.length / this.porPagina)  
    },
    paginacao () {
      return this.cards.slice((this.page - 1) * this.porPagina, this.page * this.porPagina)
    },
    ...mapGetters(['pegar']),
    ...mapState({
      cards: state => state.bidApp.bids
    })
  }
};
</script>
