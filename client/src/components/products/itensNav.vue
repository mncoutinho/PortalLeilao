<template>
  <!--BARRA LATERAL-->
                <v-navigation-drawer
                flat
                tile
                heigth=auto
                class="ml-4 text-left hidden-sm-only hidden-xs-only"
                >
                        <v-col cols="12" md="12">
                            <h3>Categorias</h3>
                            <v-text-field
                                v-model="pesquisar"
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
                        
                        <!--Terceiro grupo-->
                        <v-list-item-group>
                            <v-list-item-title class="ml-4">PREÇO</v-list-item-title>
                            <v-col cols="12"  md="12">
                                <v-text-field
                                    label="Valor Mínimo"
                                    max="25000"
                                    min="100"
                                    step="100"
                                    style="width: 250px"
                                    type="number"
                                    @keydown="false"
                                ></v-text-field>
                                
                                <v-text-field
                                    label="Valor maximo"
                                    max="25000"
                                    min="100"
                                    step="100"
                                    style="width: 250px"
                                    type="number"
                                    @keydown="false"
                                ></v-text-field>
                            </v-col>
                        </v-list-item-group>
                    </v-list>
                </v-navigation-drawer>
            
</template>

<script>
export default {
    data(){
        return{
            pesquisar:""
        }
    }
}
</script>    