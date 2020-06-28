<template>
  <v-app id="inspire">
    <v-row no-gutters>

      <navegacao
      @to='this.page'
      />
      <v-windonw v-model="page">
        <v-windonw-item :value="1">
          <h1>oi</h1>
        </v-windonw-item>
        <v-windonw-item :value="2">
          <h1>ola</h1>
        </v-windonw-item>
      </v-windonw>
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
  }

}
</script>