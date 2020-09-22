<template>
    <v-app>
      <v-row justify="center" >
        <!--INFORMAÇOES-->
        <v-col cols="12" sm="6">
          <v-row justify="center" class="mb-12"> 
            <h1>Perfil</h1>
          </v-row>
        <!--FOTO DO USUARIO-->
          <v-row justify="center"> 
            <v-avatar color="#422321" size="280">
              <v-img :src="mostrar.photoUrl"/>
            </v-avatar>
          </v-row>
          <v-row justify="center">

          <v-btn 
            v-if="modal == false"
            outlined color="#422321" 
            @click="modalPhoto"
          >
            Alterar foto de perfil
          </v-btn>
          <v-row v-if="modal">
              <!--updando a imagem-->
            <v-file-input
              multiple
                show-size
                counter
                @change="onUpload"
                prepend-icon="mdi-camera"
                v-model="image"
                label="Insira a Imagem"
              outlined color="#422321" 
            >
            Alterar foto de perfil
            </v-file-input>
            <v-btn 
            v-if="modal == true"
            outlined color="#422321" 
            @click="modalPhoto"
          >
            cancelar
          </v-btn>
          </v-row>
        

          </v-row>
        <!--dados do usuario-->
          <div class="mt-12">  
            <v-text-field
              outlined
              label="Nome Completo"
              :value="mostrar.nome"
              readonly
            />
          <v-text-field
            :value="mostrar.cpf"
            v-mask="['###.***.***-##']"
            label="CPF :"
            outlined
            readonly
          />
          <v-text-field
            outlined
            :value="user.email"
            label="EMAIL :"
            type="email"
          />
          <v-text-field
            :value="mostrar.tel"
            label="Telefone :"
            type='tel'
            outlined
          />
          <v-row justify="center">
            <v-btn 
              outlined color="#422321"
              @click="alterarSenha" 
            >
              Alterar senha
            </v-btn>
          </v-row>
        </div>          
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import firebase from "firebase";
import { mapState } from "vuex";
import {mask} from 'vue-the-mask'
import "firebase/storage";
export default {
    directives: {mask},
  computed: {
    ...mapState({
      user: (state) => state.userApp.user,
      mostrar: (state)=> state.userApp.userData
    }),
  },
  data(){
    return{
      modal: false,
      image:""
    }
  },
  created(){
      this.$store.dispatch('getData', this.user.uid);
      if(this.mostrar.nome === undefined){
        return "permanecer"
      }
  },
  methods: {
    modalPhoto(){
      if(this.modal){
        this.modal = false;
      }else{
        this.modal = true;
      }   
    },
    alterarSenha(){
      this.$store.dispatch('resetPassword', this.user)
    },
    async onUpload() {
      let images = this.image;
      images.forEach(image => {
        firebase.storage().ref("PerfilImage/" + this.user.uid +"/perfilImagem").put(image).then(snapshot => {
            snapshot.ref.getDownloadURL().then(url => {
                this.$store.dispatch('uploadProfileImg', { user:this.user.uid ,photo:url}).then(()=>{
                  this.mostrar.photoUrl = url;
                  this.modal = false
                })
            });
          });
      });
    },
    
  }
}
</script>