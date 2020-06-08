<template>
    <v-layout row>
        <v-col>
            <v-row>
                <v-card 
                flat
                tile
                min-width="250"
                heigth=auto
                class="ml-4 text-left"
                >
                    
                        <v-col cols="12" md="12">
                            <h3>Categorias</h3>
                            <v-text-field
                                v-model="Pesquisar"
                                append-icon="mdi-magnify"
                                label="Pesquisar"
                                color="#422321"
                            ></v-text-field>   
                        </v-col>
                        <v-divider/>
                    <v-list>
                        <!--Primeiro grupo-->
                        <v-list-item-group>
                            <v-list-item-title class="ml-4">AVALIAÇÃO</v-list-item-title>
                            <v-col>
                                <v-row>
                                    <v-rating
                                        background-color="orange "
                                        color="orange"
                                        medium
                                        readonly
                                    ></v-rating>
                                </v-row>
                            </v-col>
                            <v-divider/>
                        </v-list-item-group>
                        <!--Segundo grupo-->
                        <v-list-tem-group>
                            <v-list-item-title class="ml-4">LOCALIZAÇAO</v-list-item-title>
                            <v-radio-group>
                                <v-radio
                                    class="ml-4"
                                    :v-for="radio in radio"
                                    key="radio"
                                    label=""
                                    color="#422321"    
                                ></v-radio>
                            </v-radio-group>
                            <v-divider/>
                        </v-list-tem-group>
                        <!--Terceiro grupo-->
                        <v-list-tem-group>
                            <v-list-item-title class="ml-4">PREÇO</v-list-item-title>
                            <v-col cols="12"  md="12">
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
                            </v-col>
                        </v-list-tem-group>
                    </v-list>
                </v-card>
            </v-row>
        </v-col>
    </v-layout>    
</template>

<script>
export default {
    data(){
        return{
            radio:[
                {nome:'Rio'}
            ],
        }
    }
}
</script>  
    
