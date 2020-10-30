<template>
    <div>
        <meusProdutos/>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import meusProdutos from "../components/products/getMyItems"
export default {
    components:{
        meusProdutos
    },
    computed: {
        ...mapState({
        user: state => state.userApp.user,
        })
    },
    created(){
        this.$store.commit('VISIBLE');
        this.$store.dispatch('getMyItems', this.user.uid) 
    }
}
</script>
