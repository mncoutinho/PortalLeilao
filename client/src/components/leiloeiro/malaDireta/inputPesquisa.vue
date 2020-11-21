<template>
    <div>
        <v-text-field
        v-model="text" 
        label="Digite a cartela do usuário"
        />  
        <v-btn
        @click="search(text)"
        :color="btn.color"
        class="white--text ml-12"            
        >
            procurar
        </v-btn>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            text:null
        }
    },
    methods: {
        search(text){
            console.log(text)
            this.$store.dispatch('searchlance', text)
        }
    },
    created() {
        //this.search(this.$route.query.q)
    },
    computed:{
    ...mapState({
      btn: state => state.button.buttonB
    })
  },
}
</script>
