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
                    <v-row justify="space-around" no-gutters>
                        <v-card
                        :elevation='1'
                        class="mt-6 mb-6 "
                        width="24%"
                        max-width="300"                        
                        v-for="card in paginacao"
                        :key="card.length ">
                            <v-img width="100%" height="300" :src="card.imgUrl[0]" 
                            />
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
                                    <v-btn 
                                    outlined 
                                    rounded 
                                    @click="leilao(card.id)"
                                    color="green">
                                        Ver Mais
                                    </v-btn>
                                    <v-row no-gutters>
                                    <v-divider/>
                                    <v-btn
                                        class="pr-12 pl-12 mt-6" 
                                        color="blue"
                                        text
                                        rounded
                                    >
                                        Informar sobre o Lote
                                    </v-btn>
                                    </v-row>
                            </v-list-item-content>                            
                        </v-card>
                    </v-row>
                <v-pagination
                    v-model="page"
                    :length="pages()"
                    circle
                    color="#422321"
                />   
            </v-col>
    </v-card>            
</template>

<script>
import Resp from './responsivo/ProdutoResponsivo';
import {mapState} from "vuex";
export default {
    components:{
        Resp,
    },
    data(){
        return{
            pesquisar:null,
            items:[],
            target:{},
            porPagina: 8, 
            page: 1    
        }
    },
    computed: {
    ...mapState({
      card: state => state.itemApp.items,
      user: state => state.userApp.user,
    }),
    paginacao () {
            return this.card.slice((this.page - 1) * this.porPagina, this.page * this.porPagina)
        },
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
        },
        leilao(id){
            this.target = id
            console.log("ativo "+ this.target)
            this.$store.dispatch('getItemByID', this.target)
            this.$store.dispatch('getLances',this.target)
            this.$router.push({path:'/leilao', query:{id:this.target}})
        },
        pages(){
            return  this.card.length / this.porPagina +1 
        }
    },
}
</script>