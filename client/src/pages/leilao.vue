<template>
    <v-app>
        <v-row justify="center" align="center">
            <v-col cols="5" class="ml-2">
                <artigo/>
            </v-col>
            <v-col cols="5" class="mr-2" align='center'>
                <infoLote/>
                <lances/>         
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import lances from "../components/bid/articles/InputArticlesBid";
import artigo from "../components/bid/articles/getArticles"
import infoLote from "../components/bid/articles/getInfoItem"
export default {
    components:{
        artigo,
        lances,
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