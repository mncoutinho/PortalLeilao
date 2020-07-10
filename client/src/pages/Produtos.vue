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
        <v-pagination
                    v-model="page"
                    :length="6"
                    circle
                    color="#422321"
                >
            </v-pagination>
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
    data(){
        return{
            page:1
        }
    }
}
</script>    
