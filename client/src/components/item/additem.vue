<template>
  <v-container row>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="brown--text">Bem-vindo leiloeiro</h4>
        <p>
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
                required
              />
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="Descricao"
                label="Descrição do produto*"
                id="title"
                v-model="artigo.description"
                required
              />
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-select :items="categories" v-model="artigo.category" label="Defina a categoria"></v-select>
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
                v-model="image"
                label="Insira a Imagem"
              />
              <v-carousel>
                <v-carousel-item
                v-for="img in artigo.imgUrl"
                :key="img"
                :src="img"/>
              </v-carousel>
              <v-text-field class="col-md 2" v-model="artigo.imgUrl" label="Imagens" disabled />
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Valor inicial para lance*"
                id="title"
                v-model="artigo.initialBid"
                required
              />
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="col-12" color="primary" @click="addartigo">Confirmar</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase";
import "firebase/storage";
import { mapState} from "vuex";
export default {
  name: "app",
  data() {
    return {
      image: [],
    };
  },
  computed: {
    ...mapState({
      artigo: state => state.itemApp.item,
      user: state => state.userApp.user,
      categories: state => state.category
      
    }),
  },
  created() {
    this.$store.commit('resetItem');
    this.$store.dispatch('getcategories', this.categories);
    if(!this.user.refreshToken){
      alert('Logue por favor');
      this.$router.push('/')
    }  
  },
  methods: {
    async onUpload() {
      if(this.artigo.name){
      let images = this.image;
      images.forEach(image => {
        firebase
          .storage()
          .ref(
            "artigo/" + this.user.uid + "/" + this.artigo.name + "/" + image.name
          )
          .put(image)
          .then(snapshot => {
            snapshot.ref.getDownloadURL().then(url => {
              this.artigo.imgUrl.push(url);
            });
          });
      });
      }else{
        alert('Porfavor defina o nome do artigo antes');
      }
    },
    addartigo() {
      this.artigo.IdOrganizer = this.user.uid;     
      this.$store.dispatch('createItem', this.artigo);
      this.$router.push('/')
    }
  }
};
</script>
