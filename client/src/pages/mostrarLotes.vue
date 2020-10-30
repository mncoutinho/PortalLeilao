<template>
    <div>
        <h1>view lotes n completa ainda </h1>
        
        <meusProdutos/>
        leilao
        {{bid.id}}
        {{bid.items}}
        <br>
        items
        {{items[0]}}
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
        //user: state => state.userApp.user,
        items: state => state.itemApp.myItems,
        item: state => state.itemApp.item,
        bid: state => state.bidApp.bid,
        })
    }, 
    created(){
        let items = []
        this.$store.commit('VISIBLE');
        for(let i = 0; i < this.bid.items.length; i++){
            this.$store.dispatch('getItemByID', this.bid.items[i].item).then(()=>{
            items.push(this.item)
            this.$store.commit('setMyItems',items)
            
        })
        }
        
        
    }
}
</script>
