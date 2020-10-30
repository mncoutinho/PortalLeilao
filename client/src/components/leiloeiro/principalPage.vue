<template>
  <v-app>
    <div>
      <v-row justify="center">
        <h1>Leilões</h1>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <div>
            <v-card
            width="450px"
            height="350px"
            class="pa-4 mx-0"
            v-for="leilao in quantidade"
            :key="leilao.length">
              <v-row align="center">
                <v-col cols="10">
                  <h2>{{leilao.nome}}</h2>
                  <v-img
                  max-width="250px"
                  height="150px" 
                  :src="leilao.img"/>
                    <v-row dalign="center">
                      <h3>Quantidade de Produtos:</h3>
                        <v-text-field
                          placeholder="24"
                          type="number"
                          autocomplete="true"
                          color="brown"
                          required
                          outlined
                        />
                        <v-btn
                          x-large
                          color="#562B28"
                          class="white--text" 
                          v-text="'Enviar'"
                          >
                        </v-btn>
                    </v-row>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
    <!--Teste das funcoes criadas-->
    <div>
      <h1>Beta Bid Manager</h1>
      <div>
        <v-text-field
        placeholder="ID leilao"
        v-model="search"
        v-on:keyup.enter="searchBid()"
      />
      {{bid.name}}
      </div>

      </div>
        <v-text-field
        placeholder="ID Pecas"
        v-model="add.peca"
        /> 
        <v-btn 
        @click="registroPeca()"
        >
          Registro Peca
        </v-btn>
        {{bid.items}}
      <div>
      
      <div>
        <v-text-field
        placeholder="ID comprador"
        v-model="add.comprador"
        /> 
        <v-text-field
        placeholder="peca"
        type="number"
        v-model="add.point"
        />

        <v-btn
					@click="registroComprador(add.point, add.comprador)"
				>
					registro comprador
				</v-btn>
         <v-btn
          color="red"
					@click="del(add.point, bid)"
				>
					deletar Registro
				</v-btn>
      </div>     
    </div>
  </v-app>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      search: "waO4gTpT4mRSTPI11TH6",
      add:{
        peca: null,
        comprador: null,
        point: 0
      },
      quantidade:[
        {nome:'oi',img:'https://venngage-wordpress-es.s3.amazonaws.com/uploads/2019/01/youtube-banner-plantilla-blog-header.png'},
        {nome:'oi',img:'https://venngage-wordpress-es.s3.amazonaws.com/uploads/2019/01/youtube-banner-plantilla-blog-header.png'},
        {nome:'oi',img:'https://venngage-wordpress-es.s3.amazonaws.com/uploads/2019/01/youtube-banner-plantilla-blog-header.png'},
      ]
    }
  },
  computed:{
    ...mapState({
      bid: state => state.bidApp.bid,
    })
  },
  methods: {
    searchBid(){
      this.$store.dispatch('getBidById', this.search)
      console.log(this.bid.name)
    },
    registroPeca(){
      let peca = this.add.peca
      console.log(peca)

      console.log(this.bid)
      
      this.$store.dispatch('registroPeca',{bid: this.bid, item: peca})
    },
    registroComprador(point, user){
      console.log(point)
      console.log(user)
			this.$store.dispatch('registroComprador', {bid: this.bid , point: point ,user: user})
    },
    del(point, bid){
      this.$store.dispatch('deletarRegistro', {bid: bid, point: point})
      console.log(point)
      console.log(bid.items)

    } 
  }
}
</script>