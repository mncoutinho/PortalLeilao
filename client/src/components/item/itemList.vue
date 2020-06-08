<template>
  <v-row class="mt-6 mb-12 " :elevation="12">
        <v-col 
        v-for="artigo in artigos"
        v-bind:key="artigo"
        justify="center"
        align="center"
        

        >
        <v-card
            :loading="loading"
            class="mx-auto my-1"
            max-width="350"
        >
        <div class="my-1 subtitle-2 white--text" style="background:#3f51b5">
          Aberto
            </div>
            <v-img
            height="200"
            >
            {{artigo.image}}
            <v-row
                align="center"
                class="mx-0"
                
            >
                <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
                float="bottom"
                ></v-rating>
                <div class="white--text ml-4">4.5 (Nota do vendedor)</div>
            </v-row>
            </v-img>
            
            <v-card-title>{{artigo.name}}</v-card-title>
            <v-card-text>
          
                <br>
            <div>
                {{artigo.description}}
                <br>
                <a v-bind:href="artigo.link" target="_blank">link do Youtube</a>
                
                
            </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
                <v-card-title class="subtitle-2 " >
            Abertura:  <data style="margin:0px 1% 0px 1%"> {{artigo.date}}</data> 
            </v-card-title> 
            <v-card-title class="subtitle-2 " >
            Lance Inicial:  <data style="margin:0px 1% 0px 1%"> {{artigo.initialbid}}</data> 
            </v-card-title> 
              <v-card-actions>
              <v-btn v-on:click="deleteartigo(artigo)"><span class="fa fa-trash"></span>Cancelar</v-btn>
              </v-card-actions>
            
        </v-card>
        
        </v-col>
    </v-row>
</template>
<script>

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import axios from "axios/dist/axios";
import {VMoney} from "v-money";
export default {
  name: "app",

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
  
  methods: {
    addartigo(artigo){  
      axios({
        method: "post",
        url: `https://us-central1-portalleilao-26290.cloudfunctions.net/item/createItem`,
        data: {
          category: artigo.category,
          date: artigo.date,
          description: artigo.description,
          imgUrl: artigo.image = "null",
          initialBid: artigo.initialBid = 2000,
          link: artigo.link,
          name: artigo.name
      }
      }).then(res => console.log(res.id));
      console.log('Posting data...');
      this.artigos.push(artigo);
    },
    deleteartigo(artigo){
      this.artigos.splice(this.artigos.indexOf(artigo), 1);
    }
  },
  created(){
      axios({
        method: "get",
        url: `https://us-central1-portalleilao-26290.cloudfunctions.net/item/getAllItem`        
      }).then(res => {
        this.artigo = {
          name: res.data.name,
          id: res.id
        }
      })
  },
  
};
</script>
<style scoped>
h5 {
  margin-top: 25px;
}
</style>