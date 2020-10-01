<template>
    <div
    class="container"
     >
        <h1>
            Gestor de lances
        </h1>
        <pesquisa/>
        <result/>
    </div>
</template>

<script>
import pesquisa from "../components/leiloeiro/malaDireta/inputPesquisa"
import result from "../components/leiloeiro/malaDireta/getSearch"

export default {
components:{
        pesquisa,
        result
    },
    created() {
        this.$store.commit('VISIBLE');
    },
}
</script>
<style>
    .container  {
        width: 92%;
    }
</style>
