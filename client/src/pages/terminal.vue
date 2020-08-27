<template>
    <v-app>
        <v-row align="center">
            <v-col cols="6">
                <artigo/>
            </v-col>
            <v-col cols="4">
                <arremate/>
                <infoLote/>    
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import artigo from "../components/bid/articles/getArticles"
import arremate from "../components/bid/articles/arrematador"
import infoLote from "../components/bid/articles/getInfoItem"
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
}
</script>