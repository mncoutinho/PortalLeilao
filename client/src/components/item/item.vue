<template>
  <div>
    <div id="main">
      <div class="container" >
        <br />
        <addItem
        v-on:addItem="addartigo"       />
        <h5>
          Itens para Visitação
          <span class="badge badge-info">{{ parseInt(artigos.length) }}</span>
        </h5>
        <div class="row">
          <div class="card" 
          v-for="artigo in artigos" 
          v-bind:key="artigo">
            <div class="col-sm">
              <div class="card-header" 
              v-if="artigo.image">{{artigo.image}}
              </div>
              <div class="card-header" v-else>
                <p>sem imagem</p>
              </div>
              <div class="card-body">
                <div>
                  <small>Título:</small>
                  {{artigo.name}}
                </div>
                <div>
                  <small>Descrição:</small>
                  {{artigo.description}}
                </div>
                <div>
                  <small>Categoria:</small>
                  {{artigo.category}}
                </div>
                <div>
                  <small>Origem:</small>
                  {{artigo.madefrom}}
                </div>
                <div>
                  <small>Artista:</small>
                  {{artigo.madeof}}
                </div>
                <div>
                  <small>Lance Inicial:</small>
                  {{artigo.initialbid}}
                </div>
                <div class="col-md text-center">
                  <button class="btn btn-info" v-on:click="deleteartigo(artigo)"><span class="fa fa-trash"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    }).then(/*response => */);
  }
};
</script>

<style scoped>
h5 {
  margin-top: 25px;
}
</style>
