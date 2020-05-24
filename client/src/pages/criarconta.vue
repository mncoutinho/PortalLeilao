<template>
    <v-content>
        <v-row justify="center">
            <v-card color="grey" max-width="1000" class="mb-12"  :elevation="10" width="800px">
                <v-flex class="d-flex ">
                <!--CADASTRO POR API-->   
                    <v-card
                    width="50%"
                    height="530px"
                    color="blue"  
                    >               
                        <p class="white--text headline text-center">
                            CRIE SUA CONTA, FÁCIL...
                        </p>
                        <v-row justify="center fill-height" >
                            <v-icon size="50px" color="white" class="mr-5">mdi-facebook</v-icon>
                            <v-icon size="50px" color="white" class="mr-5">mdi-google</v-icon>
                            <v-icon size="50px" color="white">mdi-linkedin</v-icon>
                        </v-row>                    
                    </v-card >
                    <formulario/>
                </v-flex>     
            </v-card> 
        </v-row>
    </v-content>
</template>

<script>
    import formulario from "../components/item/cadastroCliente"
    export default {
        components:{
            formulario
        }
    }
</script>