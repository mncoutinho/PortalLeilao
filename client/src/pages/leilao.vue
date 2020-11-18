<template>
    <v-app>
        <v-row class="d-flex justify-center">
            <v-col md="5" sm="12" class="ml-2">
                <artigo/>
                <infoLote/>
            </v-col>
            <v-col md="5"  class="mr-2" align='center'>
                <v-card>
                    <div v-if="cartela">
                        <lances/>
                    </div>
                    <div v-else>
                        <pedido/>
                    </div>
                        <v-divider/>
                    <getLances/>
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