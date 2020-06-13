<template>
  <v-app id="inspire">
    <NavBar/>
    <v-main>
        <router-view/>
    </v-main>
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
  }
}
</script>










