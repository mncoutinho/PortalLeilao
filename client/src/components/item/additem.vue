<template>
  <div>
    <div id="main">
      <div class="container">
        <br />
        <div class="input-list">
          <div class="input-group">
            <input class="form-control" 
            type="text" 
            v-model="artigo.name"
            placeholder="Digite o Título"/>
          </div>
          <div class="input-group">
            <input class="form-control" 
            type="text" 
            v-model="artigo.description"
            placeholder="Digite a Descrição"/>
          </div>
          <div class="input-group">
            <input class="form-control" 
            type="text"
            v-model="artigo.image"
            placeholder="Insira a Imagem"/>
          </div>
          <div class="input-group">
            <input class="form-control" 
            type="text"
            v-model="artigo.category"
            placeholder="Insira a Categoria"/>
          </div>
          <div class="input-group">
            <input class="form-control" 
            type="text"
            v-model="artigo.madefrom"
            placeholder="Insira a Origem"/>
          </div>
          <div class="input-group">
            <input class="form-control" 
            type="text"
            v-model="artigo.madeof"
            placeholder="Insira o Artista"/>
          </div>
          <div class="input-group">
            <input class="form-control" 
            type="text"
            v-model="artigo.initialbid"
            v-money="money"
            placeholder="Insira o Lance Inicial"/>
          </div>
					<div class="input-group">
            <button class="btn btn-info" 
						v-on:click="addartigo(artigo.name, artigo.image, artigo.description, artigo.category, artigo.madefrom, artigo.initialbid, artigo.madeof)"
            >
							<span class="fa fa-plus">
							</span>
						</button>
          </div>
        </div>
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
      artigo:{
        image: "",
        name: "",
        description: "",
        category:"",
        madeof:"",
        madefrom:"",
        lances:"",
        initialbid:""
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
    addartigo(name, image, description, category, madefrom, initialbid, madeof){
      const item = {name, image, description, category, madefrom, initialbid, madeof}
      this.artigos.push(item)
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
