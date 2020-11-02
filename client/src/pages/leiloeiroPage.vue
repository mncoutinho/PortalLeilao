<template>
  <v-app id="inspire">
    <v-row no-gutters>
      <navegacao
      />
      {{page}}
      <v-col> 
        <v-window 
        v-model="page" 
        :touchless="true"
        >
          <v-window-item :value="0" >
            <principalPage/>
          </v-window-item>
          <!-- item -->
          <v-window-item :value="1" >
            <produtos/>
          </v-window-item>
          <v-window-item :value="2">          
            <addItem/>           
          </v-window-item>
          <v-window-item :value="3">           
            <meusProdutos/>
          </v-window-item>
          <v-window-item :value="4">           
            <updateItem/>
          </v-window-item>
          <v-window-item :value="10">           
            <terminal/>
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
          <v-window-item :value="8">           
            <updateLeilao/>
          </v-window-item>
          <v-window-item :value="9">           
            <mostrarLotes/>
          </v-window-item>

          <!-- mala direta -->
          <v-window-item :value="20">           
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

import updateItem from "../pages/updateItem"
import updateLeilao from "../pages/updateLeilao"
import terminal from "../pages/terminal"
import mostrarLotes from "../pages/mostrarLotes"
import { mapState } from 'vuex'

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
    gestor,
    updateItem,
    updateLeilao,
    terminal,
    mostrarLotes
  },
  computed: {
    ...mapState({
      page: state => state.stepApp.step
    })
  },
  created() {
    this.$store.commit('clearData');
    this.$store.commit('VISIBLE');
  }
}
</script>