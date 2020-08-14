<template>
  <v-container id="container">
    <v-layout row>
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
              <v-text-field name="title" label="Nome do leilao*" v-model="leilao.name" />
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-file-input
                multiple
                show-size
                counter
                v-model="image"
                label="Banner do leilao*"
                @change="onUpload"
              />  
            </v-flex>
            <v-row justify="center">
              <v-img
                  max-width="600px"
                  heigth="400px"
                  :src="leilao.imgUrl"
                />
            </v-row>   
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="title" label="Local do leilao*" v-model="leilao.local" />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea name="title" label="Descricao do Leilao*" v-model="leilao.description" />
            </v-flex>
          </v-layout>
          <v-layout row style="margin-top: 30px;">
            <v-flex xs12 sm3 offset-sm3>
              <h4 class="brown--text">Data de abertura</h4>
              <v-date-picker color="#422321" class="col-12" v-model="leilao.startsOn" />
            </v-flex>

            <v-flex xs12 sm3>
              <h4 class="brown--text">Data de fechamento</h4>
              <v-date-picker color="#422321" class="col-12" v-model="leilao.closedAt" />
            </v-flex>
          </v-layout>

          <dadosLeiloeiro @formLeiloeiro="getLeiloeiro" />

          <termos @formTermos="getTermos" />

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="col-12"
                color="success"
                v-on:click="addLeilao(leilao,leiloeiro,termos);"
              >Confirmar</v-btn>
              {{leilao}}
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase";
import dadosLeiloeiro from "./getAuctioneerData";
import termos from "./termsBid";
import {mapState} from 'vuex'
export default {
  components: {
    dadosLeiloeiro,
    termos,
  },
  data() {
    return {
      image:[],
      leiloeiro: {},
      termos: {},
    };
  },
  computed: {
    ...mapState({
      user: state => state.userApp.user,
      leilao: state => state.bidApp.bid
    }),
  },
  created() {
    this.$store.commit('resetBid')
    //if (!this.user.refreshToken) {
    //  alert("Logue por favor");
    //  this.$router.push("/");
    //}
  },
  methods: {
    addLeilao(bid) {
      this.leilao.idOrganizer = this.user.uid;
      this.$store.dispatch('createBid', bid).then(()=>{
        this.$router.push("/")
      })   
    },
    getLeiloeiro(leiloeiro) {
      this.leilao.organizer = leiloeiro.displayname;
      this.leilao.mail = leiloeiro.email;
      this.leilao.phone = leiloeiro.phoneNumber;
    },
    getTermos(termos) {
      this.termos = termos;
    },
    async onUpload() {
        if(this.leilao.name){
        let file = this.image[0];
        firebase
          .storage()
          .ref(
            "leilaoBanner/" + this.user.uid + "/" + this.leilao.name + "/" + file.name
          )
          .put(file)
          .then(snapshot => {
            snapshot.ref.getDownloadURL().then(url => {
              this.leilao.imgUrl = url
              console.log(url)
            });
          });      
        }else{
          alert('Porfavor defina o nome do leilao antes');
        }
    }
  }, 
};
</script>

<style scoped>
#container {
  margin-top: 40px;
  margin-bottom: 100px;
  text-align: center;
}
</style>