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
    this.$store.commit('VISIBLE');
  }, 
}
</script>
