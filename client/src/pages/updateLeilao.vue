<template>
    <div>
        <updateLeilao/>
    </div>
</template>

<script>
import updateLeilao from "../components/bid/updateBid/update"
export default {
    components:{
        updateLeilao
    },
    created(){
        this.$store.commit('VISIBLE');
    }
}
</script>