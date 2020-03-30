<template>
    <v-container>
        <!--FILTRO-->
            <div justify="center" class="ml-12">
                <v-row justify="center" align="center" >  
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-select
                            v-model="Produto"
                            class="mx-4"
                            :items="Produtos"
                            label="Produto"
                            ></v-select>
                        </v-col>
                
                        <v-col cols="12" md="3">
                            <v-select
                            v-model="Marca"
                            class="mx-4"
                            :items="Marcas"
                            label="Marca"
                            ></v-select>
                        </v-col>
                
                        <v-col cols="12" md="3">
                            <v-text-field
                            v-model="Min"
                            label="Valor Mínimo"
                            max="25000"
                            min="100"
                            step="100"
                            style="width: 125px"
                            type="number"
                            @keydown="false"
                            ></v-text-field>
                        </v-col>
                
                        <v-col cols="12" md="3">
                            <v-text-field
                            v-model="Max"
                            label="Valor maximo"
                            max="25000"
                            min="100"
                            step="100"
                            style="width: 125px"
                            type="number"
                            @keydown="false"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-row>
                </div>
    <!--PAGINA-->
         <v-row class="mt-6 mb-12 " :elevation="12">
                        <v-col 
                        v-for="artigo in artigos"
                         v-bind:key="artigo"
                        justify="center"
                        align="center"
                         
         
                        >
                         <v-card
                            :loading="loading"
                            class="mx-auto my-1"
                            max-width="350"
                        >
                         <div class="my-1 subtitle-2 white--text" style="background:#3f51b5">
                          Aberto
                            </div>

                            <v-img
                            height="200"
                            src="https://i.imgur.com/EaowRPb.jpg"
                            >
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                          
                            
                            <v-row
                                align="center"
                                class="mx-0"
                                
                            >
                                <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                float="bottom"
                                ></v-rating>

                                <div class="white--text ml-4">4.5 (Nota do vendedor)</div>
                            </v-row>
                            </v-img>
                             


                            <v-card-title>{{artigo.name}}</v-card-title>

                            <v-card-text>
                           
                                <br>
                            <div>
                                {{artigo.description}}
                            </div>
                            </v-card-text>

                            <v-divider class="mx-4"></v-divider>
                                <v-card-title class="subtitle-2 " >
                            Abertura:  <data style="margin:0px 1% 0px 1%"> {{artigo.date}}</data> 
                            </v-card-title> 

                            <v-card-title class="subtitle-2 " >
                            Lance Inicial:  <data style="margin:0px 1% 0px 1%"> {{artigo.initialbid}}</data> 
                            </v-card-title> 

                            
                        <v-card-actions>
                            <v-btn class="col-12 white--text"
                                color="light-green lighten-1 "
                                @click="Lance"
                               
                            >
                             ABERTO PARA LANCES
                            </v-btn>
                            </v-card-actions>
                        </v-card>


                         
                        </v-col>
                    </v-row>

                            
                    <div class="text-center mt-12 mb-4">
                        <v-pagination
                            v-model="page"
                            :length="6"
                            circle
                        ></v-pagination>
                    </div>
    </v-container>
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
        Produto: 'navigate_next',
        Produtos: ['Carro', 'quadro', 'jarro'],
        Marca: 'navigate_before',
        Marcas: ['Coca-cola', 'Dolly', 'Fanta'],
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

