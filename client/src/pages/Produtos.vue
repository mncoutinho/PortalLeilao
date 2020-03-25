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
        <v-row class="mt-6 mb-6" :elevation="12">
                        <v-col 
                        v-for="n in 20"
                        :key="n"
                        justify="center"
                        align="center"
                        >
                            
                            <v-card
                            height="280"
                            width="250"
                            color= "indigo accent-2"
                            v-model="accordion"
                            :elevation="15"
                            
                            >
                                <!--IMAGEN-->
                                <v-img
                                height="180px"
                                width="310px"
                                color="indigo lighten-5"
                                class="white--text align-end"
                                src="#"
                                >
                                    <p class="display-2 white--text">FOTO</p>
                                    <div class="text-center">
                                        <v-rating v-model="rating" color="yellow"></v-rating>
                                    </div>
                                </v-img>
                                <!--INFORMAÇOES-->
                                
                                <div align="start">                               
                                   <p class="white--text text-uppercase headline mr-2" >Nome Do Produto</p>
                                   <p class="white--text lowercase font-weight-light mr-12">informaçoes do produto</p>
                                </div>
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
export default {
    data(){
        return {
                page: 1,
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
        page:  1,
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