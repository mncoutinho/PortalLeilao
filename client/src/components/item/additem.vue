<template>
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
                label="Digite o nome do produto"/> 
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
                @change="onUpload"
                prepend-icon="mdi-camera"
                v-model="artigo.image"
                label="Insira a Imagem"/>
                
                 <v-text-field 
                 class="col-md 2" 
                v-model="artigo.link"
                label="Imagens"/>
                <span>
                Data inicial para lance
                </span>
                <v-date-picker style="color:"
                v-model="artigo.date"   
                   
                />              
                <v-text-field
                v-model="artigo.initialbid"
                v-money="money"
                label="Insira o Lance Inicial"/>
            {{artigo}}
            <v-col align="" class="mt-12">
                <v-btn class="col-12"  color="primary" @click="addartigo" >Confirmar</v-btn>
            </v-col>
          </v-col>         
        </v-card>
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
