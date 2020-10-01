<template>
    <div>
        <updateItem/>
    </div>
</template>

<script>
import updateItem from "../components/item/updateItem";
export default {
    components:{
        updateItem
    },
    created(){
        this.$store.commit('VISIBLE');
    }
}
</script>
