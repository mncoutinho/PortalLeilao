<template>
    <div>
        <v-text-field
            v-model="text" 
            label="Digite a cartela do usuário"
        />  
        <v-btn
            @click="search(text)"
            color="brown"
            class="white--text ml-12"            
        >
            procurar
        </v-btn>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text:null
        }
    },
    methods: {
        search(text){
            this.$store.dispatch('searchlance', text)
        }
    },
    created() {
        //this.search(this.$route.query.q)
    },

}
</script>
