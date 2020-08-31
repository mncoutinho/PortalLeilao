<template>	
	<v-card width="100%" flat>
		<v-card-title>
			<strong>
				Lance Atual: {{"R$"+ lanceNow+",00" }}
			</strong>
		</v-card-title>
            <v-btn
				width="100%"
				color="#422321"
				class="white--text"
				large
                v-on:click="arremate()"
            >
                {{button(item)}}
            </v-btn>
	</v-card>		
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            status: ""
        }
    },
    computed:{
		...mapState({
            lances: state => state.itemApp.lances,
			item: state => state.itemApp.item.active,
			lanceMinimo: state => state.itemApp.item.initialBid,
        }),
        lanceNow(now){
			if(!this.lances[0]){
				if(this.lanceMinimo){
					return this.lanceMinimo
				}else{
					return "00"
				}
			}else{
				now = this.lances[0].lance;
				return  now;
			}		
		}
	},
    methods: {
        arremate(){
			let lance = null;
			if(this.status == "fechar lote"){
				lance = false
			}else{
				lance = true
			}
			this.$store.dispatch('finishLance',{id: this.$route.query.id, status: lance})
			this.$store.dispatch('getItemById', this.$route.query.id )
		},
		button(item) {
			if(item){
				return this.status = "fechar lote"
			}else{
				return this.status = "abrir lote"
			}
		},
    }
}
</script>
