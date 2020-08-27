<template>
    <v-app>
        {{verificador}}
        <v-row align="center">
            <v-col cols="6">
                <artigo/>
            </v-col>
            <v-col cols="4">
                <arremate/>
                <infoLote/>    
            </v-col>
        </v-row>
        {{user}}
        {{organizer}}
    </v-app>
</template>
<script>
import artigo from "../components/bid/articles/getArticles"
import arremate from "../components/bid/articles/arrematador"
import infoLote from "../components/bid/articles/getInfoItem"
import {mapState} from "vuex"
export default {
    components:{
        artigo,
        arremate,
        infoLote
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
    computed: {
       ...mapState({
           user: state => state.userApp.user.uid,
           organizer: state=> state.itemApp.item.idOrganizer
       }),
       // ainda em teste
       verificador(){
           if(this.user == this.organizer){
               return alert('ok')
           }else{
               return alert('nao ok')
           }
       }
    },
}
</script>