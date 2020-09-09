<template>
  <v-app>
    <v-row align='start' class="mx-auto">
      <v-col>
        <h1 class="mb-12 mt-12">Mensagens:</h1>
        <v-alert
        v-model="mensagem.ver"
        icon="mdi-email"
        min-width="900px"
        max-width="1100px"
        outlined
        dismissible
        close-icon="mdi-email"
        :type="mensagem.color"
        class="pl-12 pr-12">
          <h3>{{mensagem.titulo}}</h3>
          <p class="subtitle-2">{{mensagem.texto}}</p>
        </v-alert>
      </v-col>
    </v-row>
    
  </v-app>
</template>

<script>
export default {
  computed:{
    mensagem(){
      return this.$store.state.mensagens
    }
  },
}
</script>