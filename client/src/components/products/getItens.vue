<template>
    <v-card flat width="100%">      
        <v-col cols='12' class="mx-auto">
                    <!--nome do produto-->
                    <h1 :class="layout.title">
                        Todos os Produtos
                    </h1>
                    <p :class="layout.description">
                        Leiloeiro aqui se encontra todas peças registradas no nosso sistema. 
                    </p>
                    <v-spacer/>
                    <!--cards-->
                    <v-row justify="space-around" no-gutters>
                        <v-card
                        :elevation='1'
                        :class="layout.card.type"
                        :width="layout.card.width"
                        :heigth="layout.card.height"                         
                        v-for="card in paginacao"
                        :key="card.length">
                            <v-img 
                            :class="layout.img.type"
                            :width="layout.img.width" 
                            :height="layout.img.height" 
                            :src="card.imgUrl[0]" 
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
                                <!-- botoes -->
                                    <v-btn 
                                    outlined 
                                    rounded 
                                    @click="leilao(card.id)"
                                    color="green">
                                        Ver Mais
                                    </v-btn>
                                    <v-row no-gutters>
                                    <v-divider/>
                                    </v-row>
                            </v-list-item-content>                            
                        </v-card>
                    </v-row>
                <v-pagination
                    v-model="page"
                    :length="pages"
                    circle
                    color="#422321"
                />   
            </v-col>
    </v-card>            
</template>

<script>
import {mapState} from "vuex";
export default {
    data(){
        return{
            pesquisar:null,
            items:[],
            target:{},
            porPagina: 8, 
            page: 1,
        }
    },
    computed: {
    ...mapState({
        card: state => state.itemApp.items,
        user: state => state.userApp.user,
        layout: state => state.cards.item,
    }),
        paginacao () {
            return this.card.slice((this.page - 1) * this.porPagina, this.page * this.porPagina)
        },
        pages(){
            return  Math.ceil(this.card.length / this.porPagina)  
        }
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
        
    },
}
</script>