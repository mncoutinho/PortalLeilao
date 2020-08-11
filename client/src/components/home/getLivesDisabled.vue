<template>
  <!--LIVES FUTURAS-->
        <v-flex class="mt-auto">
            <v-card 
            max-width="1550" 
            class="mx-auto"
            flat >    
                <v-row justify="center">
                    <v-col 
                    cols="12"
                    md="6"
                    align="center"
                    class="mt-12"
                    >
                        <p class="mt-8 display-1" style="color:#A64E4B">
                            Veja os proximos leiloes
                            <v-divider class="mx-8" color="white"/>
                        </p>
                    </v-col>
                </v-row>
                <!--CARDS-->
                <v-hover 
                v-slot:default="{ hover }"
                open-delay="100">
                    <v-row align="center" justify="space-around" class="mt-12">       
                        <v-card
                        :elevation="hover ? 16 : 2"
                        style="cursor:pointer"
                        class="mt-6 mb-6"
                        width="330" 
                        v-for="item in lives"
                        :key="item.nome">
                          <!--  <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>    
                            </iframe> -->
                            <v-list-item-content class="ml-5">
                                <div> 
                                <span style="color:Orange">Em Breve</span>
                                    <v-list-item-title style="color:#63432D" 
                                    class="bold headline mb-1" v-text="item.nome"/>
                                <v-list-item-subtitle style="color:#1B120C" v-text="item.informacoes"/>
                                    <v-divider class="mx-5" color="#EDE7E2"/>
                                </div>    
                                <v-row class="mr-5" justify="center">
                                    <v-btn outlined rounded class="pr-5 pl-5" color="orange">Em breve</v-btn>
                                </v-row>  
                            </v-list-item-content>   
                        </v-card>
                        <!--BOTAO-->
                        <!-- <v-btn
                        width="20%"
                        height="420"
                        color="#EDE7E2"
                        >   
                            <v-col>
                                <h1 class="display-4" style="color:#342B25">+</h1>
                                <h6 style="color:#342B25">Para ver mais...</h6>
                            </v-col>  
                        </v-btn> -->
                    </v-row>
                </v-hover>
            </v-card>
        </v-flex>
</template>

<script>
export default {
    data(){
        return{
            item:[
                {text: 'Inicio', disabled: false, to: '#'},
                {text: 'Produto', disabled: true, },
            ],
            lives:[
                {nome:'Nome Dá Prox Transmissao 1', informacoes:'Texto 1'},
                {nome:'Nome Dá Prox Transmissao 2', informacoes:'Texto 2'},
                {nome:'Nome Dá Prox Transmissao 3', informacoes:'Texto 3'},
                {nome:'Nome Dá Prox Transmissao 4', informacoes:'Texto 4'},
            ]
        }
    }
}
</script>

<style>

</style>