<template>
  <v-app>
    
    <v-row align='start' class="mx-auto">
      <v-col>
        <h1 class="mb-12 mt-12">Mensagens:</h1>
        <v-alert
        icon="mdi-email"
        min-width="900px"
        max-width="1100px"
        outlined
        dismissible
        close-icon="mdi-delete"
        v-for="messege in mensagem"
        :key="messege.length"
        :type="messege.color"
        class="pl-12 pr-12">
          <h3>{{messege.titulo}}</h3>
          <p class="subtitle-2">{{messege.texto}}</p>
        </v-alert>
      </v-col>
    </v-row>
    
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      mensagem:[
        {titulo:'Seja Bem-vindo',texto:'Coma AGORA', color:'info'},
        {titulo:'Texto',texto:'Coma AGORA', color:'warning'},
        {titulo:'Não comeu alho',texto:'Coma AGORA', color:'error'},
        {titulo:'Comeu Alho',texto:'brabo, brabo', color:'success'},
      ]
    }
  }
}
</script>
