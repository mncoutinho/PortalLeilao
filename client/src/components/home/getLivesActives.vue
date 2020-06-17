<template>
      <!-- BOX-->
        <v-flex class="mt-auto">
            <v-card 
            max-width="1550"
            class="mx-auto"
            flat>
                <v-row justify="center">
                        <v-col 
                        cols="12"
                        md="6"
                        align="center"
                        class="mt-12"
                        >
                            <p 
                            class="display-1"
                            style="color:#A64E4B;">
                                Veja quem está ao vivo, agora
                                <v-divider class="mx-8" color="white"/>
                            </p>
                        </v-col>
                </v-row >
                <!--TRANSMISSOES-->
                    <v-row 
                    align="center" 
                    justify="space-around" 
                    class="mt-12"
                    >     
                        <v-card
                        hover
                        class="mt-6 mb-6"
                        style="cursor:pointer"
                        width="330"
                        v-for="stream in streams"
                        :key="stream.nome"
                        >
                          <!--   <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                            </iframe> -->
                                
                                    <v-list-item-content class="ml-5">
                                    <div>     
                                        <span style="color:green">Ao Vivo</span>
                                        <v-list-item-title style="color:#63432D" class="bold headline mb-1">{{stream.nome}}</v-list-item-title>
                                        <v-list-item-subtitle style="color:#1B120C">{{stream.sub}}</v-list-item-subtitle>
                                            <v-divider class="mx-5" color="#EDE7E2"/>
                                    </div>            
                                        <v-row class="mr-5" justify="center">
                                            <v-btn outlined rounded class="pr-12 pl-12" color="green">PARTICIPAR</v-btn>
                                        </v-row>
                                    </v-list-item-content>   
                        </v-card>
                    </v-row>
                <v-row align="center" justify="space-around" class="mt-12">
                <!--Botao para ver mais-->
                    <!-- <v-btn
                    width="20%"
                    height="420"
                    color="#EDE7E2"
                    >   
                        <v-col>
                        <h1 class="display-4" 
                            style="color:#342B25" >
                            +
                            </h1>
                        <h6 style="color:#342B25"
                        >
                        Para ver mais...
                        </h6>
                        </v-col>  
                    </v-btn> -->
                </v-row>
            </v-card>
        </v-flex>
</template>

<script>
export default {
    data(){
        return{
            streams:[
                {nome:'Nome da Transmitgrtt 1',sub:'texto 1'},
                {nome:'Nome da Transmissao 2',sub:'texto 2'},
                {nome:'Nome da Transmissao 3',sub:'texto 3'},
                {nome:'Nome da Transmissao 4',sub:'texto 4'},
                {nome:'Nome da Transmissao 5',sub:'texto 5'},
                {nome:'Nome da Transmissao 6',sub:'texto 6'},
                {nome:'Nome da Transmissao 7',sub:'texto 7'},
                {nome:'Nome da Transmissao 8',sub:'texto 8'},
            ]
        }
    }

}
  
</script>
    
    <style>
    
    </style>
<style>

</style>