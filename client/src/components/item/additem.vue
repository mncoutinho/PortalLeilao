<template>
  <v-container row>
      <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <h4 class="brown--text" >Bem-vindo leiloeiro</h4>
            <p >
              Cadastrar seu leilão ficou ainda mais fácil, basta apenas preencher o formulário
              e em breve estará no ar.
            </p>
          </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12>
          <form>
              <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-text-field
                    name="title"
                    label="Nome do produto*"
                    id="title"
                    v-model="artigo.name"
                    required/>             
                  </v-flex>
              </v-layout>

              <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                      <v-text-field
                      name="Descricao"
                      label="Descrição do produto*"
                      id="title"
                      v-model="artigo.description"
                      required/>             
                  </v-flex>
              </v-layout>

              <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                          <v-select
                          :items="categories"
                          v-model="artigo.category"
                          label="Defina a categoria"
                          ></v-select>
                        </v-flex>
              </v-layout>

              <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                      <v-file-input
                        multiple
                        show-size
                        counter
                        @change="onUpload"
                        prepend-icon="mdi-camera"
                        v-model="artigo.image"
                        label="Insira a Imagem"/>
                        
                        <v-text-field 
                        class="col-md 2" 
                        v-model="artigo.link"
                        label="Imagens"
                        disabled
                        />
                  </v-flex>
              </v-layout>

              <v-layout>
                  <v-flex xs12 sm6 offset-sm3>
                      <v-text-field
                      name="title"
                      label="Valor inicial para lance*"
                      id="title"
                      v-model="artigo.initialbid"
                      required/>             
                  </v-flex>
              </v-layout>
    
              <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                      <v-btn class="col-12"  color="primary" @click="addartigo" >Confirmar</v-btn>
                  </v-flex>
              </v-layout>
      {{artigo}}

        </form>
      </v-flex>
    </v-layout>     
  </v-container>      
</template>

<script>
import axios from 'axios'
import firebase from 'firebase';
import 'firebase/storage'
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
      categories:[],
      artigo:{
        name:"teste",
        description:"",
        image:[],
        link:[],
        picker:"",
        initialbid:""
      },
      user:{
        uid:'JoseTestando'
      }
    }
  },
  
  directives: {money: VMoney},
  created(){
    axios.get('https://us-central1-portalleilao-26290.cloudfunctions.net/item/category')
      .then(response => this.categories = response.data)
      .catch(error => console.log(error))  
  },
  methods: {
  async onUpload(){
    this.artigo.link = []
    let images = this.artigo.image;
    images.forEach(image => {
      firebase.storage()
      .ref('items/' + this.user.uid + '/' + this.artigo.name + '/'+ image.name)
      .put(image)
      .then(snapshot => {
        snapshot.ref.getDownloadURL().then(url => {
        this.artigo.link.push(url)
    })
    })
    })
 
      
  },
    async addartigo() {
      const artigo = {
        name:this.artigo.name,
        active:true,
        description:this.artigo.description,
        images:this.artigo.link,
        date:this.artigo.date,
        initialbid:this.artigo.initialbid
      }
      const criaItem = firebase.firestore().collection('item');
      await criaItem
      .doc()
      .set(artigo)
      .then(doc => {
        console.log(doc)
        this.artigo.name="";
        this.artigo.description="";
        this.artigo.image=[];
        this.artigo.link=[];
        this.artigo.date="";
        this.artigo.initialbid="";

        })
      }
      
    }
}
</script>
