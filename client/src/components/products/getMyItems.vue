<template>
    <v-card flat width="100%">      
        <v-col cols='12' class="mx-auto">
        <!--titulo-->
            <h1 :class="layout.title">
                Meus Produtos
            </h1>
            <p :class="layout.description">
                Leiloeiro aqui se encontra todas suas peças registradas no nosso sistema. 
            </p>
        <!--cards-->
            <v-row justify="space-around" no-gutters>
                <v-card
                :elevation='1'
                :class="layout.card.type"
                :width="layout.card.width"
                :heigth="layout.card.height"                        
                v-for="card in paginacao"
                :key="card.length "
                >
                    <v-img 
                    :class="layout.img.type"
                    :width="layout.img.width" 
                    :height="layout.img.height" 
                    :src="card.imgUrl[0]" 
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
                <!-- botoes -->
                    <v-btn 
                    outlined 
                    rounded 
                    @click="leilao(card.id)" 
                    color="green">
                        Pregoar Lote
                    </v-btn>
                    <v-btn 
                    outlined 
                    rounded 
                    class="pr-12 pl-12" 
                    color="red" 
                    @click="deletar(card)">
                        deletar
                    </v-btn>
                    <v-btn 
                    outlined 
                    rounded 
                    class="pr-12 pl-12" 
                    color="black" 
                    @click="editar(card)">
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
            porPagina: 3, 
            page: 1,
        }
    },
    computed: {
        ...mapState({
            card: state => state.itemApp.myItems,
            user: state => state.userApp.user,
            layout: state => state.cards.bid,
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
            if(status == undefined){
              return "Aberto"
            }else{
               return "Fechado" 
            }
        },
        color(status){
            if(status == undefined){
                return "color:black"
            }
            if(status){
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