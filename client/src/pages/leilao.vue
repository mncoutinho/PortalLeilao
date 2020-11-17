<template>
    <v-app>
        <v-row justify="center" align="center">
            <v-col cols="5" class="ml-2">
                <artigo/>
            </v-col>
            <v-col cols="5" class="mr-2" align='center'>
                <v-card class="pa-12">
                    <div v-if="cartela">
                        <lances/>
                    </div>
                    <div v-else>
                        <pedido/>
                    </div>
                    <getLances/>
                    <infoLote/>
                </v-card>        
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import lances from "../components/bid/articles/bidTools/InputArticlesBid";
import pedido from "../components/bid/articles/bidTools/addCartela"
import artigo from "../components/bid/articles/getArticles"
import infoLote from "../components/bid/articles/getInfoItem"
import getLances from "../components/bid/articles/getLances"
export default {
    components:{
        artigo,
        lances,
        getLances,
        infoLote,
        pedido
    },
     data() {
        return {
            cartela: true
        }
    },
    created() {
        this.$store.commit('clearData')
        this.$store.dispatch('getLances',this.$route.query.id)
        this.$store.dispatch('getItemByID', this.$route.query.id)
        this.$store.dispatch('getInfo', this.$route.query.id)
        this.$store.commit('VISIBLE');
    },
}
</script>