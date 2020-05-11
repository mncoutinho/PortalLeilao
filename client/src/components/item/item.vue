<template>
<v-content>
        <addItem
        v-on:addItem="addartigo"/>
      <!--  <v-row dense>
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
                  <div>Data Inicial:{{artigo.date}}</div>
                  <div>Lance Inicial:{{artigo.initialbid}}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn v-on:click="deleteartigo(artigo)"><span class="fa fa-trash"></span></v-btn>
                </v-card-actions>
            </v-card>
          </v-col>
        </v-row> -->

      <!----NOVO PRODUTO----->
      
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
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                          
                            
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
      <!--------------------->
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
            link
            date           
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