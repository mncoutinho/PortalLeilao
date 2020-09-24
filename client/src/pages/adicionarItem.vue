<template>
  <v-container>
     <addItem/>
  </v-container>
</template>
<script>
import addItem from "../components/item/additem"

export default {
  components:{
    addItem
  },
  created() {
    this.$store.commit('clearData');
    if(!this.user.refreshToken){
      this.$store.commit('MENSAGEM_LOGUE')
      this.$router.push('/')
    }  
  }  
}
</script>
