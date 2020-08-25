<template>
    <v-app>
        <v-row justify="center" align="center">
            <v-col cols="5" class="ml-2">
                <artigo/>
            </v-col>
            <v-col cols="5" class="mr-2" align='center'>
                <lances/>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import lances from "../components/bid/articles/InputArticlesBid";
import artigo from "../components/bid/articles/getArticles"
export default {
    components:{
        artigo,
        lances
    }
}
</script>