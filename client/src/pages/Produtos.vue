<template>
    <v-card height="auto">
        <!--PRODUTOS PAGINA-->
        <v-content style="margin-left:20%">
            <!--NOME NA PESQUISA-->
            <v-title class="display-1">NOME DO PRODUTO</v-title>
            <v-divider/>
            <!--PRODUTOS-->
                <v-card 
                width="100%"
                elevation="0"
                >   
                    <v-col
                     sm="12" > 
                        <v-row
                        justify="space-around">
                            <v-card
                            style="background-color:#EFEAEA"
                            width="23%"
                            height="410"
                            v-for="n in 20"
                            :key="n"
                            class="mt-4">
                                <v-img 
                                width="100%"
                                height="280"
                                src="https://i.imgur.com/EaowRPb.jpg"
                                class="white--text align-end">
                                    <v-card-title> NOME DO PRODUTO</v-card-title>  
                                </v-img> 
                                <v-rating
                                    align="center"
                                    v-model="rating"
                                    color="yellow darken-3"
                                    background-color="grey darken-5"
                                    empty-icon="$ratingFull"
                                    half-increments
                                    class="mt-2"
                                ></v-rating>              
                                        <div align="center">            
                                            <p style="color:#EB9500" class="headline ">R$ 12.000.000.00</p>
                                            <p style="color:#EB9500" class="subtitle-1">em até 540X nos cartoes </p>
                                        </div> 
                            </v-card>
                        </v-row>
                    </v-col>
                </v-card>
                <!--PAGINAÇAO-->
                <v-pagination
                    class="mt-4 mb-5"
                    v-model="page"
                    :length="8"
                >
                </v-pagination>        
        </v-content>     
        <v-navigation-drawer 
            width="20%"
            absolute
            permanent
        >
            
                <v-list>
                    <v-list-item>
                        <v-list-item-title>CATEGORIAS</v-list-item-title>
                    </v-list-item>
                    <v-col cols="12" sm="12" md="12">
                        <v-text-field
                            v-model="Pesquisar"
                            append-icon="mdi-magnify"
                            label="Pesquisar"
                            color="#422321"  
                        >
                        </v-text-field>
                    </v-col>
                    <v-divider/>
                    <!--AVALIAÇOES-->
                    <v-list-item> 
                            <v-list><!--lista dentro de lista-->
                                <v-list-item-title>AVALIAÇÃO</v-list-item-title>
                                <v-col>
                                    <v-row>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </v-row>    
                                    <v-row>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </v-row>
                                    <v-row>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </v-row>
                                    <v-row>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </v-row>
                                </v-col>    
                            </v-list>
                    </v-list-item>
                    <v-divider/>
                    <!--LOCALIZAÇAO-->
                    <v-list-item>
                        <v-list>
                            <v-list-item-title>LOCALIZAÇAO</v-list-item-title>
                                <v-radio-group>
                                    <v-radio
                                        label="Rio de Janeiro"
                                        color="#422321"
                                        value="rj"
                                    ></v-radio>
                                
                                    <v-radio
                                        label="São Paulo"
                                        color="#422321"
                                        value="sp"
                                    ></v-radio>
                                
                                <v-radio
                                    label="Minas Gerais"
                                    color="#422321"
                                    value="mn"
                                ></v-radio>

                                <v-radio
                                    label="Mato Grosso"
                                    color="#422321"
                                    value="mt"
                                ></v-radio>
                            </v-radio-group>
                        </v-list>
                    </v-list-item>
                    <v-divider/>
                    <!--PREÇO-->
                    <v-list-item>
                        <v-list>
                            <v-list-item-title>PREÇO</v-list-item-title>
                            
                                <v-text-field
                                v-model="Min"
                                label="Valor Mínimo"
                                max="25000"
                                min="100"
                                step="100"
                                style="width: 250px"
                                type="number"
                                @keydown="false"
                                ></v-text-field>
                            
                                <v-text-field
                                v-model="Max"
                                label="Valor maximo"
                                max="25000"
                                min="100"
                                step="100"
                                style="width: 250px"
                                type="number"
                                @keydown="false"
                                ></v-text-field>
                        </v-list>
                    </v-list-item>
                </v-list>
               
        </v-navigation-drawer>
       
    </v-card>           
</template>

<script>

import homeVue from './home.vue'
export default {
    data(){
        return {
                page: homeVue,
        }
    }
}
</script>

<script>
export default {
    data () {
        return {
        circle: false,
        disabled: false,
        rating: 4.3,
        page:  homeVue,
        Min: 100,
        Max: 100,
        }
    },
}
</script>
<!--ESTRELAS-->
<script>
export default {
    data: () => ({
    rating: 1,
  }),
}
</script>>

