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
                label="Digite o nome do produto"
              />  
                  
                <v-text-field  
                v-model="artigo.description"
                label="Digite a Descrição"/>

                <v-flex>
                  <v-select
                  :items="categories"
                  v-model="artigo.category"
                  label="Defina a categoria"
                  ></v-select>
                </v-flex>

                <v-file-input
                multiple
                show-size
                counter
                @click="onUpload"
                prepend-icon="mdi-camera"
                v-model="artigo.image"
                label="Insira a Imagem"/>
                 <br>
                <div class="input-group">
                    <div class="input-group-prepend">
                      <v-btn 
                      class="bg-danger text-white"
                      href="https://www.youtube.com" 
                      target="_blank"
                      >
                          <svg class="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"/>
                          </svg>
                      </v-btn>
                    </div>
                    <input
                     class="form-control" 
                    v-model="artigo.link"
                    label="link do Youtube"/>
                    
                </div>
                <br>
                <span>
                Data inicial para lance
                </span>
                <br> <br> 
                <v-date-picker style="color:"
                v-model="artigo.date"   
                   
                />    
                <br><br>           
                <v-text-field
                v-model="artigo.initialbid"
                v-money="money"
                label="Insira o Lance Inicial"/>

            <v-col align="" class="mt-12">
              <button class="btn col-12" 
                  v-on:click="addartigo(artigo.name,artigo.description,artigo.category,artigo.image,artigo.link,artigo.date, artigo.initialbid)"
                  >
                  <div >
          <v-btn class="col-12"  color="primary" >Confirmar</v-btn>
        </div>
              </button>
            </v-col>

          </v-col>         
        </v-card>
      </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';
import {VMoney} from "v-money";
export default {
  name: "app",
  data() {
    return {
      categories:[],
      money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: ' ',
          precision: 2,
          masked: false
        },
      artigo:{
        name:"",
        category:"",
        description:"",
        image:[],
        link:"",
        picker:"",
        initialbid:""
      },
      selectedFile:null
    }
  },
  
  directives: {money: VMoney},
  created() {
      axios.get('https://us-central1-portalleilao-26290.cloudfunctions.net/item/category')
      .then(response => this.categories = response.data)
      .catch(error => console.log(error))
},
  methods: {
    onFileSelected(event){
      this.selectedFile = event.target.files[0];
  },
  onUpload(){
      const fd = new FormData();
      fd.append('image',this.selectedFile)
      
      
  },
    addartigo(name,description,category,image,link,date,initialbid){
      const artigo = {name,description,category,image,link,date,initialbid}
      this.$emit("addItem", artigo);
      this.artigo.name="";
      this.artigo.description="";
      this.artigo.category="";
      this.artigo.image="";
      this.artigo.link="";
      this.artigo.date="";
      this.artigo.initialbid="";
      }
      
    }
}
</script>



<style scoped>
v-content{width:80%;}
</style>