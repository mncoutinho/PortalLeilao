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
            <button class="btn btn-info" 
						v-on:click="addartigo(artigo.name, artigo.image, artigo.description)"
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
                  {{artigo.titulo}}
                </div>
                <div>
                  <small>Descrição:</small>
                  {{artigo.description}}
                </div>
                <div class="col-md text-center">
                  <button class="btn btn-info" v-on:click="deletename(name),deleteimage(image),deletedescription(description)"><span class="fa fa-trash"></span></button>
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

export default {
  name: "app",
  data() {
    return {
      artigo:{
        name: "",
        description: "",
        image: ""
      },
      artigos: [],
    };
  },
  methods: {
    addartigo(name,image,description){
      const item = {name, image, description}
      this.artigos.push(item)
    },
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
            type
            description
          }
        }
        `
      }
    }).then(response => {
      console.log(response);
    });
  }
};
</script>

<style scoped>
h5 {
  margin-top: 25px;
}
</style>
