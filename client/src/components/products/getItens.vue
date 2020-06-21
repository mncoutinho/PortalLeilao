<template>
    <v-layout row>
        <v-col>
            <v-row>
                <!--BARRA LATERAL-->
                <v-card 
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
                    <!--BARRA HORIZONTAL-->
                    <div class="hidden-md-only hidden-lg-only hidden-xl-only">
                        <h3>Categorias</h3>
                        <Resp/>
                    </div>
                        
                        <v-divider class="mx-8"/>
                    <!--cards-->
                    <v-row justify="space-around">
                        <v-card
                        class="mt-6 mb-6"
                        width="28%"
                        min-width="280"
                        max-width="300"
                        v-for="card in card"
                        :key="card">
                            <v-img width="100%" height="300" :src="card.imgUrl[0]" 
                            >    
                            </v-img>
                             <v-list-item-content class="ml-5">   
                                <span style="color:green">{{status(card.active)}}</span>
                                    <v-list-item-title 
                                    style="color:#63432D" 
                                    class="bold headline mb-1">
                                        {{card.name}}
                                    </v-list-item-title>
                                    <v-list-item 
                                    style="color:#1B120C"
                                    >
                                        {{card.description}}
                                    </v-list-item>
                                <v-divider class="mx-5" color="#EDE7E2"/>           
                                <v-row 
                                class="mr-5" 
                                justify="center">
                                    <v-btn 
                                    outlined 
                                    rounded 
                                    class="pr-12 pl-12" 
                                    color="green">
                                        Ver Mais
                                    </v-btn>                                  
                                </v-row>
                            </v-list-item-content>
                        </v-card>
                    </v-row>    
                </v-col>
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
    </v-layout>    
</template>
<script>
import Resp from './responsivo/ProdutoResponsivo';
import axios from 'axios';
export default {
    components:{
        Resp,
    },
    data(){
        return{
            pesquisar:null,
            page:1,
            items:[],
            card:[]
        }
    },
    created(){
        axios({
            method:'get',
            url:'https://us-central1-portalleilao-26290.cloudfunctions.net/item/getAllItem'
        }).then(doc => {
            this.card = doc.data;
        }).catch(error => console.log(error))     
        
    },
    methods:{
        status(status){
            if(status){
              return this.card.active = "Aberto"
            }else{
               return this.card.active = "Fechado" 
            }
        }
    },
}
</script>