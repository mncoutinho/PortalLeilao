<template>
  <v-container justify="center">
     <v-form
      ref="form"
      
      >
      <!--CRIAÇAO DE ITEN-->
      <v-card  
      class="mx-auto "
      max-width="500"
      
      >
          <v-col cols="12"
          class="grey lighten-5 pt-12 pl-12 pr-12 "
          
          >  
                <v-text-field 
                v-model="artigo.name"
                label="Digite o Título"
              />  
                  
                <v-text-field  
                v-model="artigo.description"
                label="Digite a Descrição"/>
                <v-file-input
                multiple
                show-size
                counter
                prepend-icon="mdi-camera"
                v-model="artigo.image"
                label="Insira a Imagem"/>
                <v-text-field
                v-model="artigo.category"
                label="Insira a Categoria"/>
                <v-text-field
                v-model="artigo.madefrom"
                label="Insira a Origem"/>
                <v-text-field 
                v-model="artigo.madeof"
                label="Insira o Artista"/>
                <v-text-field
                v-model="artigo.initialbid"
                v-money="money"
                label="Insira o Lance Inicial"/>

            <v-col align="end" class="mt-4">
              <button class="btn btn-info" 
                  v-on:click="addartigo(artigo.name, artigo.image, artigo.description, artigo.category, artigo.madefrom, artigo.initialbid, artigo.madeof)"
                  >
                  <div class="my-1">
          <v-btn depressed small color="primary" >+</v-btn>
        </div>
              </button>
            </v-col>

          </v-col>         
        </v-card>
      </v-form>
  </v-container>
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
