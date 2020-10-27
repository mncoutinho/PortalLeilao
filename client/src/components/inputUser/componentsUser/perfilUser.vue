<template>
  <v-app>
    <v-row justify="center">
      <!--INFORMAÇOES-->
      <v-col cols="12" sm="6">
        <!--FOTO DO USUARIO-->
        <v-row justify="center">
          <v-avatar size="300">
            <v-img :src="mostrar.photoUrl" circle />
          </v-avatar>
          <!--updando a imagem-->
            <v-file-input
              clear-icon
              x-large
              height="270"
              @change="onUpload"
              :prepend-icon="null"
              v-model="image"
              outlined
              color="#422321"
              class="input"
            />
            <div class="div-icon">
              <v-icon
              class="icone" 
              size="40">
                mdi-camera
              </v-icon>
            </div>
        </v-row>
        <!--dados do usuario-->
        <div class="mt-12">
          <h3 style="color:#5B2D2A">Nome Completo:</h3>
          <v-text-field 
          v-model="mostrar.nome"
          outlined 
          />
          <h3 style="color:#5B2D2A">CPF :</h3>
          <v-text-field
            v-model="mostrar.cpf"
            v-mask="['###.###.###-##']"
            outlined
          />
          <h3 style="color:#5B2D2A">E-mail :</h3>
          <v-text-field
            outlined
            :value="user.email"
            type="email"
          />
          <h3 style="color:#5B2D2A">Telefone :</h3>
          <v-text-field
            v-model="mostrar.tel"
            v-mask="['(##)#########']"
            type="tel"
            outlined
          />
          <v-row justify="center" class="pa-3">
            <v-btn 
              x-large 
              color="#422321" 
              class="white--text" 
              @click="updatePerfil()"
            >
              Atualizar
            </v-btn>
          </v-row>
          <v-row justify="center">
            <v-btn large text color="#422321" @click="alterarSenha">
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
import { mask } from "vue-the-mask";
import "firebase/storage";
export default {
  directives: { mask },
  computed: {
    ...mapState({
      user: (state) => state.userApp.user,
      mostrar: (state) => state.userApp.userData,
    }),
  },
  data() {
    return {
      image: [],
      input: "mdi-camera",
    };
  },
  created() {
    this.$store.dispatch("getData", this.user.uid);
    if (this.mostrar.nome === undefined) {
      return "permanecer";
    }
  },
  methods: {
    alterarSenha() {
      this.$store.dispatch("resetPassword", this.user);
    },
    async onUpload() {
      let img = this.image;
      this.$store.commit('MSG_FEED','Carregando...')
      firebase
        .storage()
        .ref("PerfilImage/" + this.user.uid + "/perfilImagem")
        .put(img)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            this.$store
              .dispatch("uploadProfileImg", { user: this.user.uid, photo: url })
              .then(() => {
                this.mostrar.photoUrl = url;
              });
          });
        });
    },
    updatePerfil() {
      this.$store.dispatch("updateData",{id:this.user.uid, data: this.mostrar })
    }
  },
};
</script>
<style scoped>
.input {
  border-radius: 50%;
  position: absolute;
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  border: 1em solid rgb(231, 231, 231);
}
.div-icon{
  position: relative;
}
div .icone{
  position: absolute;
  top: 230px;
  left: -80px;
  z-index: 1;
  background-color:  rgb(231, 231, 231);
  border:  5px solid rgb(231, 231, 231);
  border-radius: 50%;
}
</style>