<template>
    <v-container>
        <artigo/>
        <arremate/>
    </v-container>
</template>
<script>
import artigo from "../components/bid/articles/getArticles"
import arremate from "../components/bid/articles/arrematador"
export default {
    components:{
        artigo,
        arremate
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