<template>
   <!--IMAGEM-->
        <v-parallax
        dark
        src="https://i.imgur.com/V5FBLN3.jpg"
        height="600">
        <!--BOTOES-->
            <v-row
                align="center"
                justify="center"
            >
            <v-col cols="12" md="6" class="text-center">
                <h1 style=" color:white" class=" display-2 font-weight-thin mb-4 ">Portal Leilão</h1>
                <v-text-field
                    v-model="pesquisar"
                    append-icon="mdi-magnify"
                    label="Pesquisar"
                    solo
                    color="white"
                ></v-text-field>
                <v-col class="text-center" cols="12" >
                    <h4 style=" color:white" class=" display-1">Venha participar do nosso site</h4>
                </v-col>
          </v-col>
                
            </v-row>
        </v-parallax>
</template>

<script>
export default {
    data() {
        return{
            pesquisar:''
        }
    }
}
</script>

<style>

</style>