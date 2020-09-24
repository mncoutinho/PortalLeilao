  <template>
  <v-app>
    <v-card flat width="100%">
      <v-row xs12 sm6 offset-sm3>
        <v-flex class="mt-10">
            <h1 class="brown--text text-center">Bem-vindo leiloeiro</h1>
                <p class="text-center">
                Cadastrar seu leilão ficou ainda mais fácil, basta apenas preencher o formulário e em breve estará no ar.
                </p>
            <v-form class="mx-0">
              <v-col 
                class="mx-auto mt-8" 
                cols="6">
                  <!--nome do produto-->
                  <v-text-field
                  name="title"
                  label="Nome do produto*"
                  id="title"
                  v-model="artigo.name"
                  required
                  />
                  <!--descriçao-->
                  <v-text-field
                    name="Descricao"
                    label="Descrição do produto*"
                    id="title"
                    v-model="artigo.description"
                    required
                  />
                  <!--Categoria-->
                  <v-select 
                    :items="categories" 
                    v-model="artigo.category" 
                    label="Defina a categoria"
                  />
                  <!--imagem-->
                  <v-file-input
                    multiple
                    show-size
                    counter
                    @change="onUpload"
                    prepend-icon="mdi-camera"
                    v-model="image"
                    label="Insira a Imagem"
                  />
                  <!--Carrossel -->
                  <v-carousel>
                    <v-carousel-item
                    v-for="img in artigo.imgUrl"
                    :key="img"
                    :src="img"/>
                  </v-carousel>
                  <v-text-field 
                    class="col-md 2" 
                    v-model="artigo.imgUrl" 
                    label="Imagens" 
                    disabled 
                  />
                  <!--Valor Inicial-->
                  <v-text-field
                    name="title"
                    label="Valor inicial para lance*"
                    id="title"
                    v-model="artigo.initialBid"
                    required
                  />
                  <!--Botão-->
                  <v-btn 
                    class="col-12 white--text" 
                    color="brown"
                    @click="addartigo"
                  >
                    Confirmar
                  </v-btn>
                </v-col>
            </v-form>
        </v-flex>
      </v-row>
    </v-card>
  </v-app>

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
    this.$store.commit('clearData');
    this.$store.dispatch('getcategories', this.categories);
    if(!this.user.refreshToken){
      this.$store.commit('MENSAGEM_LOGUE')
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
        this.$store.commit('MENSAGEM_FEED','Porfavor defina o nome do artigo antes')
      }
    },
    addartigo() {
      this.artigo.IdOrganizer = this.user.uid;     
      this.$store.dispatch('createItem', this.artigo).then(()=>{
        this.$store.commit('MSG_COMFIRMACAO', `confirmado criação do lote de ${this.user.uid}`)
        this.$router.push("/")
      })  
    }
  },
  created() {
    this.$store.dispatch('getcategories');
  }
};
</script>
