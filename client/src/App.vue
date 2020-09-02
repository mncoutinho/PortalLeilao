<template>
  <v-app id="inspire">
    <NavBar/>
    <v-main>
        <router-view/>
    </v-main>
    <v-snackbar
          v-model="msg.mostra"
          :color="msg.cor"
          top
          :timeout="msg.tempo"
          class="pa-2"
        >
          <v-row justify="center">
            <h3 style="text-weight:0">{{msg.text}}</h3>
          </v-row>
        </v-snackbar>
    <Footer/>
  </v-app>
</template>
<script>
import NavBar from './components/layout/navbar';
import Footer from './components/layout/footer';
export default {
  name: 'App',
  components:{
    NavBar,
    Footer
  },
    data:()=>({
    mensagem: true,
  }),
  computed:{
    msg(){
      return this.$store.state.alerts
    }
  },
}
</script>










