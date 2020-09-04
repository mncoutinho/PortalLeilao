<template>
  <v-app>
    <v-card flat width="67vw" class="mx-auto">
      <v-row justify="center" class="mt-8">
        <p class="display-2">Meus Leiloes</p>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field outlined label="Procure aqui" append-icon="mdi-map-marker"></v-text-field>
        </v-col>
      </v-row>
      <v-divider class="mx-12" />
      <v-row justify="space-around">
        <!--CARTOES-->
        <v-card width="24%" :key="card.length" v-for="card in paginacao" class="mt-9 mb-3">
          <v-img
            height="200px"
            width="100%"
            :src="card.imgUrl"
            class="white--text align-end bold"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <v-card-title>{{card.name}}</v-card-title>
          </v-img>
          <v-row align="end" dense>
            <v-col>
              <v-card-title class="subtitle-2">{{card.description}}</v-card-title>
              <v-card-subtitle>{{card.startsOn}} - {{card.closedAt}}</v-card-subtitle>
              <v-divider />
              <v-card-subtitle class="title">Lotes: {{ card.items }}</v-card-subtitle>
            </v-col>
          </v-row>
          <v-btn
            large
            color="#422321"
            class="white--text"
          >
            Ver Lotes
          </v-btn>
          <v-btn
            large
            color="#422321"
            class="white--text"
            @click="editar(card)"
          >
            Editar
          </v-btn>
          <v-btn
          large
            color="#422321"
            class="white--text"
            @click="deletar(card)"
          >
            Deletar
          </v-btn>
        </v-card>
        <v-pagination
          v-model="page"
          :length="pages"
          circle
          color="#422321"
        />
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
import { mapState} from "vuex";
export default {
  data() {
    return {
      target:"",
      card:[],
      page:1,
      porPagina: 8,
    }
  },
  computed:{
    paginacao () {
      return this.card.slice((this.page - 1) * this.porPagina, this.page * this.porPagina)
    },
    pages(){
        return  Math.ceil(this.bid.length / this.porPagina)  
      },
    ...mapState({
      bid: state => state.bidApp.bids,
      user: state => state.userApp.user
    })
  },
  methods: {
    deletar(bid){
      if(bid.idOrganizer === this.user.uid){
        this.target = bid.id
        this.$store.dispatch('deleteBid', this.target).then(()=>{
        this.$store.dispatch('getAllBids');
        })
        }else{
          this.$store.commit('SEM_PERMICAO', 'Voce n pode deletar um leilao q n e seu')
        }
    },
    editar(bid){
      this.$store.dispatch("getBidById", bid.id);
      this.$router.push("/updateLeilao")
      
    }
  },
  async created(){
        await this.$store.dispatch('getAllBids', this.bid).then(() =>{
            for (let i = 0; i < this.bid.length; i++) {
                if(this.bid[i].idOrganizer == this.user.uid){
                    this.card.push(this.bid[i])
                } 
            }
        })    
    },
};
</script>
