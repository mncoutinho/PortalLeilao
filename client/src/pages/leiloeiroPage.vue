<template>
  <v-app id="inspire">
    <v-row no-gutters>
      <navegacao
      @pagina='mudaPage'
      />
      <v-col> 
        <v-window v-model="page" >
          <v-window-item :value="1" >
            <principalPage/>
          </v-window-item>
          <!-- item -->
          <v-window-item :value="2" >
            <produtos/>
          </v-window-item>
          <v-window-item :value="3">          
            <addItem/>           
          </v-window-item>
          <v-window-item :value="4">           
            <meusProdutos/>
          </v-window-item>
          <!-- leilao -->
          <v-window-item :value="5">           
            <listBid/>
          </v-window-item>
          <v-window-item :value="6">           
            <addBid/>
          </v-window-item>
          <v-window-item :value="7">           
            <listMyBid/>
          </v-window-item>
          <!-- mala direta -->
          <v-window-item :value="8">           
            <gestor/>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-app>  
</template>

<script>
import navegacao from "../components/leiloeiro/menu"
import produtos from "../components/products/getItens"
import listBid from "../components/bid/listbid"
import listMyBid from "../components/bid/listMyBid"
import principalPage from "../components/leiloeiro/principalPage"

import addBid from "../pages/addLeilao"
import addItem from  "../pages/adicionarItem"
import meusProdutos from "../pages/meusProdutos"
import gestor from "../pages/gestor"
export default {
  components:{
    navegacao,
    produtos,
    meusProdutos,
    listBid,
    listMyBid,
    addItem,
    addBid,
    principalPage,
    gestor
  },
  data(){
    return{
      page: 0,
    }
  },
  methods:{
    mudaPage(page){
      this.page = page;
    }
  },
  created() {
    this.$store.commit('clearData');
  },
}
</script>