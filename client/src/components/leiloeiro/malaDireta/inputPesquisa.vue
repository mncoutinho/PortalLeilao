<template>
    <div>
        <v-text-field
            v-model="text" 
            label="digite o que procura"
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
            text:""
        }
    },
    methods: {
        search(text){
            alert("procurando por "+text)
        }
    },

}
</script>
