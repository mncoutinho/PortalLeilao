<template>
  <v-app>
    <v-row justify="center">
      <!--INFORMAÇOES-->
      <v-col cols="12" sm="6">
        <v-row justify="center" class="mb-12">
          <h1>Perfil</h1>
        </v-row>
        <!--FOTO DO USUARIO-->
        <v-row justify="center">
          <v-avatar size="300">
            <v-img :src="mostrar.photoUrl" circle />
          </v-avatar>
          <!--updando a imagem-->
          <v-file-input
            clear-icon
            x-large
            height="300"
            @change="onUpload"
            :prepend-icon="null"
            v-model="image"
            outlined
            color="#422321"
            class="input"
          />
        </v-row>
        <!--dados do usuario-->
        <div class="mt-12">
          <v-text-field 
          v-model="mostrar.nome"
          outlined 
          label="Nome Completo" 
          />
          <v-text-field
            v-model="mostrar.cpf"
            v-mask="['###.###.###-##']"
            label="CPF :"
            outlined
          />
          <v-text-field
            outlined
            :value="user.email"
            label="EMAIL :"
            type="email"
          />
          <v-text-field
            v-model="mostrar.tel"
            v-mask="['(##)#########']"
            label="Telefone :"
            type="tel"
            outlined
          />
          <v-row justify="center">
            <v-btn outlined color="#422321" @click="updatePerfil()">
              Atualizar
            </v-btn>
          </v-row>
          <v-row justify="center">
            <v-btn outlined color="#422321" @click="alterarSenha">
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
  cursor: pointer;
}
.icone {
  position: absolute;
  opacity: 0.3;
}
</style>