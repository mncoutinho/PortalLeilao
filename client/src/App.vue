<template>
  <v-app id="inspire">
    <NavBar v-if="visivel.visible"/>
    <v-main>
        <router-view/>
    </v-main>
    <v-snackbar
          v-model="msg.mostra"
          :color="msg.cor"
          :top='msg.top'
          :left='msg.left'
          :right='msg.right'
          :botton='msg.botton'
          :timeout="msg.tempo"
          class="pa-4 mx-auto"
        >
          <v-row justify="center">
            <v-icon size="20" class="mr-4">{{msg.icon}}</v-icon>
            <h3 style="text-weight:0">{{msg.text}}</h3>
          </v-row>
        </v-snackbar>
          <Footer v-if="visivel.visible"/>
  </v-app>
</template>
<script>
import NavBar from './components/layout/navbar';
import Footer from './components/layout/footer';
export default {
  name: 'App',
  components:{
    NavBar,
    Footer,
  },
    data:()=>({
    mensagem: true,
  }),
  computed:{
    msg(){
      return this.$store.state.alerts
    },
    visivel(){
      return this.$store.state.showBar
    }
  },
}
</script>










