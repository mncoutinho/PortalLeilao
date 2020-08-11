<template>
  <v-app>
      <!--Titulo da pagina-->
          <v-row justify="center"> 
            <h1>Entre em contato conosco...</h1>
          </v-row>
          <v-row class="mt-12">
            <v-col
            align="center" 
            justify="space-around"
            :key="contato.length"
            v-for="contato in contact">
              <v-icon size="100" color="#5B2D2A">{{contato.icon}}</v-icon>
                <!--Titulo do iten-->
              <h3 class="mt-6" style="color:#422321">{{contato.tipo}}</h3>
                <p>{{contato.texto}} </p>
              <p class="title">{{contato.forma}}</p>            
            </v-col>
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
