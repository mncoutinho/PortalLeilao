<template>
    <v-card flat max-width="1500">    
        <v-col cols='12' class="mx-auto">
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
                    <v-row justify="space-around" >
                        <v-card
                        :elevation='1'
                        class="mt-6 mb-6"
                        width="24%"
                        max-width="300"                        v-for="card in card"
                        :key="card.id">
                            <v-img width="100%" height="300" :src="card.imgUrl[0]" 
                            >    
                            </v-img>
                             <v-list-item-content class="ml-5">   
                                <span :style="color(card.active)">{{status(card.active)}}</span>
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
                                class="pt-6" 
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
            <!--paginaçao-->
    </v-card>            
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
              return "Aberto"
            }else{
               return "Fechado" 
            }
        },
        color(status){
            if(status){
              return "color:green"
            }else{
               return "color:red" 
            }
        }
    },
}
</script>