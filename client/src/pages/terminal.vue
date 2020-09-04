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
        {{user}}
        {{organizer}}
    </v-app>
</template>
<script>
import artigo from "../components/bid/articles/getArticles"
import lances from "../components/bid/articles/getLances"
import arremate from "../components/bid/articles/arrematador"
import infoLote from "../components/bid/articles/getInfoItem"
import inputInfoLote from "../components/bid/articles/inputInfoItem"
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
    },
    methods: {
        verificador(){
            if(this.user == this.organizer){
               return this.$store.commit('MENSAGEM_FEED',this.user+ " "+ this.organizer)
           }else{
               return this.$route.push('/')
           }
        }
    },
}
</script>