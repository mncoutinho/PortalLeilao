<template>
    <v-app>   
        <v-row align="center">
            <v-col cols="6">
                <artigo/>
            </v-col>
            <v-col cols="4">
                <lances/>
                <arremate/>
                <infoLote/> 
                <inputInfoLote/>       
            </v-col>
        </v-row>
        {{'usuario '+user.uid}}
        {{'oragnizador '+organizer}}
    </v-app>
</template>
<script>
import artigo from "../components/bid/articles/getArticles"
import lances from "../components/bid/articles/getLances"
import arremate from "../components/bid/articles/arrematador"
import infoLote from "../components/bid/articles/getInfoItem"
import inputInfoLote from "../components/bid/articles/inputInfoItem"
import {mapState} from 'vuex'
export default {
    components:{
        artigo,
        lances,
        arremate,
        infoLote,
        inputInfoLote
    },
    data() {
        return {
            rotar: this.$route.query
        }
    },
    created() {
        this.$store.dispatch('getLances',this.rotar.id)
        this.$store.dispatch('getItemByID', this.rotar.id)
        if(!this.user.refreshToken){
            this.$store.commit('MENSAGEM_LOGUE')
            this.$router.push('/')
        }else{
            this.verificador();
        }  
        
        
    },
    computed: {
        ...mapState({
            user: state => state.userApp.user,
            organizer: state => state.itemApp.item.idOrganizer,
        })
    },
    methods: {
        verificador(){
            if(this.user.uid != this.organizer){
               return this.$route.push('/')
           }else{
               return alert('foi')
           }
        }
    },
}
</script>