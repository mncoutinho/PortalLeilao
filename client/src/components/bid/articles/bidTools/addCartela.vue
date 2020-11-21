<template>	
	<v-card>
        {{user.uid}}
        <v-btn
            :class="btn.type"
            :color="btn.color"        
            @click="pedido()"
        >
            Fazer pedido de cartela
        </v-btn>  
    </v-card>		
</template>
<script>
import {mapState} from 'vuex';
export default {
    computed: {
        ...mapState({
            layout: state => state.form,
            user: state => state.userApp.user,
            btn: state => state.button.buttonC
        })
    },
    methods: {
        pedido(){
            alert(this.user.uid)
        }
    },
}
</script>