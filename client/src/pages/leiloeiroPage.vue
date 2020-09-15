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
        </v-window>
      </v-col>
    </v-row>
  </v-app>  
</template>

<script>
import navegacao from "../components/leiloeiro/menu"
import produtos from "../components/products/getItens"
import meusProdutos from "../components/products/getMyItems"
import listBid from "../components/bid/listbid"
import listMyBid from "../components/bid/listMyBid"
import addItem from  "../components/item/additem"
import addBid from "../components/bid/addBid/inputBid"


import principalPage from "../components/leiloeiro/principalPage"

export default {
  components:{
    navegacao,
    produtos,
    meusProdutos,
    listBid,
    listMyBid,
    addItem,
    addBid,
    principalPage
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
  }
}
</script>