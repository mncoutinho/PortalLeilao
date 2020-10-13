<template>
    <v-app>
        <v-layout row>
            <v-row> 
                <Menu/>
                <v-col>
                    <Produtos/>
                </v-col>
            </v-row>
        </v-layout>
    </v-app>
</template>      
<script>
import Produtos from "../components/products/getItens"
import Menu from "../components/products/itensNav"
export default {
    components:{
        Produtos,
        Menu
    },
    created(){
        this.$store.commit('VISIBLE');
    }
}
</script>    
