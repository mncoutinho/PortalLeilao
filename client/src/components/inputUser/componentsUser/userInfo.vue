<template>
  <v-app>
    <v-row class="d-flex flex-column ">
        <!--Titulo da pagina-->
          <v-row class="d-flex align-center justify-center"> 
            <h1 style="color:#5B2D2A">Entre em contato conosco...</h1>
          </v-row>
          <v-row class="flex-row flex-wrap">
            <v-col
            align="center" 
            justify="space-around"
            :key="contato.length"
            v-for="contato in contact">
              <v-icon size="130" color="#5B2D2A">{{contato.icon}}</v-icon>
                <!--Titulo do iten-->
              <h3 class="mt-6 headline font-weight-bold" style="color:#422321">{{contato.tipo}}</h3>
              <p class="font-weight-light headline">{{contato.texto}} </p>
              <p class="title">{{contato.forma}}</p>            
            </v-col>
            </v-row>
    </v-row>  
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      contact:[
        {icon:'far fa-envelope',tipo:'Email',texto:'24 horas por dia',forma:'Portal@gmail.com'},
        {icon:'fas fa-mobile-alt',tipo:'Telefone',texto:'24 horas por dia',forma:'(21)2424-2424'},
        {icon:'far fa-comment',tipo:'Chat',texto:'24 horas por dia',forma:'Chat'},
      ]
    }
  }
}
</script>
