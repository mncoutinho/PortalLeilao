<template>
  <v-app>
    <v-row class="d-flex justify-center">
    <!--INFORMAÇOES-->
      <v-col cols="10" sm="6">
      <!--FOTO DO USUARIO-->
        <v-row justify="center">
            <v-avatar size="300" class="borda">
              <v-img :src="mostrar.photoUrl" circle />
            </v-avatar>
        <!--updando a imagem-->
            <v-file-input
            clear-icon
            x-large
            height="270"
            :prepend-icon="null"
            outlined
            color="#422321"
            class="input"
            v-model="image"
            @change="onUpload" 
            >
            </v-file-input> 
            <div class="icone"></div>
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
            v-mask="['###.***.***-##']"
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
    },
  },
};
</script>
<style scoped>
.input {
  border-radius: 50%;
  position: absolute;
  width: 300px;
  height: 300px;
  min-width: 1em;
  opacity:0.01;
}
.borda{
  box-sizing: border-box;
  border: 1em solid rgb(231, 231, 231);
}
.icone::after{
  content: "\f030";
  font-family: "Font Awesome 5 Free"; 
  font-weight: 600;
  color:#422321; 
  font-size:30px;
  position: relative;
  top: 230px;
  right: 85px;
  background-color:rgb(231, 231, 231);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>