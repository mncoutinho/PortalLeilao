<template>
  <v-app>
    <v-card flat width="80%" class="mx-auto">
      <v-row justify="center" class="mt-8">
        <p class="display-2">Leiloes</p>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field outlined label="Procure aqui" append-icon="mdi-map-marker"></v-text-field>
        </v-col>
      </v-row>
      <v-divider class="mx-12" />
      <v-row justify="space-around">
        <!--CARTOES-->
        <v-card width="24%" :key="card.length" v-for="card in cards" class="mt-9 mb-3">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            class="white--text align-end bold"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <v-card-title>{{card.name}}</v-card-title>
          </v-img>
          <v-row align="end" dense>
            <v-col>
              <v-card-title class="subtitle-2">{{card.description}}</v-card-title>
              <v-card-subtitle>{{card.startsOn}} - {{card.closedAt}}</v-card-subtitle>
              <v-divider />
              <v-card-subtitle class="title">Lotes: {{ card.items }}</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cards: []
    };
  },
  computed:{
    
  },
  created() {
    axios({
      method: "get",
      url:
        "https://us-central1-portalleilao-26290.cloudfunctions.net/leilao/getAllBid"
    })
      .then(doc => {
        this.cards = doc.data;
      })
      .catch(error => console.log(error));
  }
};
</script>
