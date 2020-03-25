<template>
<v-content>
        <addItem
        v-on:addItem="addartigo"/>
        <v-row dense>
        <v-badge
          color="primary">
          Itens Para Postar
        </v-badge>
          <v-col class="mx-auto" 
          v-for="artigo in artigos" 
          v-bind:key="artigo">
              <v-card
            class="mx-auto"
            max-width="400"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title>{{artigo.name}}</v-card-title>
                </v-img>
                <v-card-text class="text--primary">
                  <div>Descrição:{{artigo.description}}</div>
                  <div>Categoria:{{artigo.category}}</div>
                  <div>Origem:{{artigo.madefrom}}</div>
                  <div>Artista:{{artigo.madeof}}</div>
                  <div>Lance Inicial:{{artigo.initialbid}}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn v-on:click="deleteartigo(artigo)"><span class="fa fa-trash"></span></v-btn>
                </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
</v-content>
</template>
<script>
import addItem from "./additem"
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import axios from "axios/dist/axios";
import {VMoney} from "v-money";
export default {
  name: "app",
  components:{
      addItem
  },
  data() {
    return {
      money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: ' ',
          precision: 2,
          masked: false
        },
      artigos: [],
      /*
6 imagens por item
Link para youtube na carrossel de imagens
*/

    };
  },
  directives: {money: VMoney},
  computed:{
      },
  methods: {
    addartigo(artigo){
      this.artigos.push(artigo);
    },
    deleteartigo(artigo){
      this.artigos.splice(this.artigos.indexOf(artigo), 1);
    }
  },
  created() {
    axios({
      url: "http://localhost:4000",
      method: "post",
      data: {
        query:`
        {
          artigos {
            id
            name
            description
            category
            madeof
            madefrom
            lances
            initialbid
          }
        }
        `
      }
    }).then(/* response => */);
  }
};
</script>

<style scoped>
h5 {
  margin-top: 25px;
}
</style>
