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
              <v-img :src="user.photoURL"></v-img>
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
              :value="user.displayName"
              readonly
            />
          <v-text-field
            :value="Cpf"
            label="CPF :"
            outlined
            readonly
          />
          <v-text-field
            outlined
            :value="user.email"
            label="EMAIL :"
          />
          <v-text-field
            :value="user.phoneNumber"
            label="Telefone :"
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
import "firebase/storage";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: (state) => state.userApp.user,
    }),
  },
  data(){
    return{
      Cpf:'123-***-***-01',
      modal: false,
      image:""
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
        firebase.storage().ref("PerfilImage/" + this.user.uid).put(image).then(snapshot => {
            snapshot.ref.getDownloadURL().then(url => {
                this.$store.dispatch('uploadProfileImg', url);
            });
          });
      });
    },
    
  }
}
</script>