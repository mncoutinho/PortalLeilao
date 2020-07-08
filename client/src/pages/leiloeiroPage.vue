<template>
  <v-app id="inspire">
    <v-row no-gutters>
      <navegacao
      @pagina='mudaPage'
      />
      <v-col> 
        <v-window v-model="page" >
          <v-window-item :value="1" >
            <produtos/>
          </v-window-item>
          <v-window-item :value="2">
            <h1>ola</h1>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-app>  
</template>

<script>
import navegacao from "../components/leiloeiro/menu"
import produtos from "../components/products/getItens"

export default {
  components:{
    navegacao,
    produtos
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