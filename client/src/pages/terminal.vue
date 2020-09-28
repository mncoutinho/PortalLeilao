<template>
    <v-app>   
        <v-row align="center">
            <v-col cols="6">
                <artigo/>
            </v-col>
            <v-col cols="6">
                <infoLote/> 
                <inputInfoLote/>   
                <lances/>
                <arremate/>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import artigo from "../components/bid/articles/getArticles"
import lances from "../components/bid/articles/getLances"
import arremate from "../components/bid/articles/terminalTools/arrematador"
import infoLote from "../components/bid/articles/getInfoItem"
import inputInfoLote from "../components/bid/articles/terminalTools/inputInfoItem"
import {mapState} from 'vuex'
export default {
    components:{
        artigo,
        lances,
        arremate,
        infoLote,
        inputInfoLote
    },
    created() {
        this.$store.commit('clearData')
        this.$store.dispatch('getLances', this.$route.query.id)
        this.$store.dispatch('getItemByID', this.$route.query.id)
        this.$store.commit('setAdmView', true); 
    },
    computed: {
        ...mapState({
            user: state => state.userApp.user,
            organizer: state => state.itemApp.item.idOrganizer,
        })
    },
    methods: {
        verificador(){
            if(!this.user.refreshToken){
            this.$store.commit('MENSAGEM_LOGUE')
            this.$router.push('/')
            }
            if(this.user.uid != this.organizer){
               return this.$route.push('/')
            }
        }
    },
}
</script>