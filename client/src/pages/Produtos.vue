<template>
    <v-layout row>
        <v-col>
            <v-row>
                <!--BARRA LATERAL-->
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
                <v-divider vertical/>
                <!--CONTEUDO-->
                <v-col>
                    <!--nome do produto-->
                    <v-row>
                        <h3 class="ml-8">NOME DO PRODUTO</h3>
                        <v-spacer/>
                    </v-row>
                    <!--links-->
                        <v-breadcrumbs :items="items" >
                            <template v-slot:divider>
                                <v-icon>mdi-chevron-right</v-icon>
                            </template>
                        </v-breadcrumbs>
                    <v-divider class="mx-8"/>
                    <!--cards-->
                    <v-row justify="space-around">
                        <v-card
                        class="mt-6 mb-6"
                        min-width="250px"
                        max-width="350px"
                        width="300"
                        v-for="card in card"
                        :key="card">
                            <iframe width="100%" height="300" src="https://www.ecovaso.com.br/wp-content/uploads/balde.jpg" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>    
                            </iframe>
                             <v-list-item-content class="ml-5">
                                <div>     
                                    <span style="color:green">Ao Vivo</span>
                                        <v-list-item-title 
                                        style="color:#63432D" 
                                        class="bold headline mb-1">
                                            {{card.nome}}
                                        </v-list-item-title>
                                        <v-list-item-subtitle 
                                        style="color:#1B120C"
                                        >
                                            {{card.sub}}
                                        </v-list-item-subtitle>
                                    <v-divider class="mx-5" color="#EDE7E2"/>
                                </div>            
                                <v-row 
                                class="mr-5" 
                                justify="center">
                                    <v-btn 
                                    outlined 
                                    rounded 
                                    class="pr-12 pl-12" 
                                    color="green">
                                        PARTICIPAR
                                    </v-btn>
                                </v-row>
                            </v-list-item-content>
                        </v-card>
                    </v-row>    
                    <!--paginaçao-->
                    <v-pagination
                        v-model="page"
                        :length="6"
                        circle
                        color="#422321"
                    >
                    </v-pagination>
                </v-col>
            </v-row>
        </v-col>
    </v-layout>    
</template>


<script>
export default {
    data(){
        return{
            page:1,
            radio:[
                {nome:'Rio'}
            ],
            items:[
                {text: 'Inicio', disabled: false, to: '#'},
                {text: 'Produto', disabled: true, },
            ],
            card:[
                {nome:'Nome da Transmissao 1',sub:'texto 1'},
                {nome:'Nome da Transmissao 2',sub:'texto 2'},
                {nome:'Nome da Transmissao 3',sub:'texto 3'},
                {nome:'Nome da Transmissao 1',sub:'texto 1'},
                {nome:'Nome da Transmissao 2',sub:'texto 2'},
                {nome:'Nome da Transmissao 3',sub:'texto 3'},
                {nome:'Nome da Transmissao 1',sub:'texto 1'},
                {nome:'Nome da Transmissao 2',sub:'texto 2'},
                {nome:'Nome da Transmissao 3',sub:'texto 3'},
                {nome:'Nome da Transmissao 1',sub:'texto 1'},
                {nome:'Nome da Transmissao 2',sub:'texto 2'},
                {nome:'Nome da Transmissao 3',sub:'texto 3'},
            ]
        }
    }
}
</script>  
    
