<template>
  <div>
    <div id="main">
      <div class="col-4" >
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
      </div>
    </div>
  </div>
</template>

<script>
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
        image:[],
        name:"",
        description:"",
        category:"",
        madeof:"",
        madefrom:"",
        initialbid:""
      }
    }
  },
  directives: {money: VMoney},
  methods: {
    addartigo(name, image, description, category, madefrom, initialbid, madeof){
      const artigo = {name, image, description, category, madefrom, initialbid, madeof}
      this.$emit("addItem", artigo);
      this.artigo.image="";
      this.artigo.name="";
      this.artigo.description="";
      this.artigo.category="";
      this.artigo.madeof="";
      this.artigo.madefrom="";
      this.artigo.initialbid="";
      }
      
    }
}
</script>