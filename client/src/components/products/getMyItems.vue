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
                <v-card :elevation='1' class="mt-6 mb-6 " width="24%" max-width="300" v-for="card in card" :key="card.length">
                    <v-img width="100%" height="300" :src="card.imgUrl[0]" 
                />
            <v-list-item-content class="ml-5">   
                <span :style="color(card.active)">{{status(card.active)}}</span>
                    <v-list-item-title style="color:#63432D" class="bold headline mb-1">
                        {{card.name}}
                    </v-list-item-title>
                    <v-list-item style="color:#1B120C">
                        {{card.description}}
                    </v-list-item>
                <v-divider class="mx-5" color="#EDE7E2"/>
                    <v-btn outlined rounded @click="leilao(card.id)" color="green">
                        Pregoar Lote
                    </v-btn>
                    <v-btn outlined rounded class="pr-12 pl-12" color="red" @click="deletar(card)">
                        deletar
                    </v-btn>
                    <v-btn outlined rounded class="pr-12 pl-12" color="black" @click="editar(card)">
                        Editar
                    </v-btn>
                    <v-row no-gutters>
                        <v-divider/>
                        <div v-if="test(card.active)">
                            <v-btn 
                            class="pr-12 pl-12 mt-6" 
                            color="blue" 
                            text 
                            rounded
                            @click="registra(card)"
                            >
                                Registra em leilao
                            </v-btn>
                        </div>
                    </v-row>
                </v-list-item-content>                            
                </v-card>
            </v-row>    
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
            target:{} 
        }
    },
    computed: {
        ...mapState({
        card: state => state.itemApp.myItems,
        user: state => state.userApp.user,
        })
    },
    methods:{
        status(status){
            if(status == undefined){
              return "Aberto"
            }else{
               return "Fechado" 
            }
        },
        color(status){
            if(status == undefined){
              return "color:green"
            }else{
               return "color:red" 
            }
        },
        leilao(id){
            alert("Leiloeiro Apos entra na preogacao voce nao podera editar mais esse lote")
            this.target = id
            console.log("ativo "+ this.target)
            this.$store.dispatch('getItemByID', this.target)
            this.$store.dispatch('getLances',this.target)
            this.$store.dispatch('getInfo', this.target)
            this.$store.commit('setStep', 10)
        },
        deletar(item){
            if(item.idOrganizer === this.user.uid){
                this.target = item.id
                this.$store.dispatch('deleteItem',this.target);
                this.$store.dispatch('getAllItems', this.card);
            }else{
                this.$store.commit('MSG_FEED',"Você não pode deletar um item que não e seu.")
            }
        },
        editar(item){
            if(item.idOrganizer === this.user.uid){
                this.target = item.id
                this.$store.commit('setItem', item);
                this.$store.commit('setStep', 4)                
            }else{
                this.$store.commit('MSG_FEED',"Você não pode editar um item que não e seu.")
            }
        }
    }
}
</script>