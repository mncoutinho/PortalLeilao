<template>
  <v-app id="inspire">
    <v-row no-gutters>

      <navegacao
      @pagina='mudaPage'
      />
      <v-window v-model="page">
        <v-window-item :value="1">
          <h1>oi</h1>
        </v-window-item>
        <v-window-item :value="2">
          <h1>ola</h1>
        </v-window-item>
      </v-window>
    </v-row>
  </v-app>  
</template>

<script>
import navegacao from "../components/leiloeiro/menu"
export default {
  components:{
    navegacao,
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