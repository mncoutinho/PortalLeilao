<template>
    <div>
        <h1>
            gestao de lances
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
}
</script>
