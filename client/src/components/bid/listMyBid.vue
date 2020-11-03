<template>
  <v-app>
    <v-card flat width="100%"> 
      <v-col cols='12' class="mx-auto">
          <!--nome do produto-->
                    <h1 :class="layout.title">
                        Todos meus leiloes
                    </h1>
                    <p :class="layout.description">
                        Leiloeiro aqui se encontra todos os seus leiloes registrados no nosso sistema. 
                    </p>
                    <v-spacer/>
    
        <!--CARTOES-->
        <v-row justify="space-around" no-gutters>
          <v-card 
            class="mt-6 mb-6 "
            width="24%"
            max-width="300"
            :key="card.length" 
            v-for="card in paginacao"  
          >
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
              <v-card-subtitle class="title">Lotes: {{filter(card.items)}}</v-card-subtitle>
            </v-col>
          </v-row>
          <v-row  justify="center"> 
            <v-col cols="6" align="center">
              <v-btn
                large
                color="#422321"
                class="white--text"
                @click="mostrar(card)"
              >
                Ver Lotes
              </v-btn>
              <v-btn
                large
                color="#422321"
                class="white--text mt-2"
                @click="editar(card)"
              >
                Editar
              </v-btn>
              <v-btn
              large
                color="#422321"
                class="white--text mt-2"
                @click="deletar(card)"
              >
                Deletar
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

        </v-row>
    <v-pagination
          v-model="page"
          :length="pages"
          circle
          color="#422321"
        />

      </v-col>
    </v-card>
  </v-app>
</template>

<script>
import { mapState, mapGetters} from "vuex";
export default {
  data() {
    return {
      target:null,
      page:1,
      porPagina: 8,
    }
  },
  computed:{
    paginacao () {
      return this.card.slice((this.page - 1) * this.porPagina, this.page * this.porPagina)
    },
    pages(){
        return  Math.ceil(this.card.length / this.porPagina)  
      },
    ...mapGetters(['pegar']),
    ...mapState({
      card: state => state.bidApp.myBids,
      user: state => state.userApp.user,
      layout: state => state.cards.bid,
    })
  },
  methods: {
    filter(items){
      if(!items){
        return "error"
      }else{
        return items.length
      } 
    },
    deletar(bid){
      if(bid.idOrganizer === this.user.uid){
        this.target = bid.id
        this.$store.dispatch('deleteBid', this.target).then(()=>{
        this.$store.dispatch('getAllBids');
        })
        }else{
          this.$store.commit('RESTRICT', 'Você não pode deletar um leilao que não e seu.')
        }
    },
    editar(bid){
      this.$store.dispatch("getBidById", bid.id);
      this.$store.commit('setStep', 8)
    },
    mostrar(bid){
      this.$store.commit('setBid', bid)
      this.$store.commit('setStep', 9)
    }
  },
  async created(){
       await this.$store.dispatch('getMyBids', this.user.uid)
    }
};
</script>
