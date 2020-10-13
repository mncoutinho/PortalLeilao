<template>
    <addBid/>
</template>

<script>
import AddBid from "../components/bid/addBid/inputBid"
export default {
    components:{
        AddBid,
    },
    created() {
        this.$store.commit('VISIBLE');
    },
}
</script>
