<template>
    <div>
        <meusProdutos/>
    </div>
</template>

<script>
import meusProdutos from "../components/products/getMyItems"
export default {
    components:{
        meusProdutos
    },
    created(){
        this.$store.commit('VISIBLE');
    }
}
</script>
