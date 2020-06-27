<template>
  <v-app id="inspire">
    <v-row no-gutters>
      <navegacao/>
      <v-col>
        <h1>TEXTO</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nulla vitae obcaecati laudantium! Aperiam sit et consectetur minima animi accusamus sapiente quas asperiores. Blanditiis, cumque.</p>
      </v-col>
    </v-row>
  </v-app>  
</template>

<script>
import navegacao from "../components/leiloeiro/menu"
export default {
  components:{
    navegacao,
  }
}
</script>