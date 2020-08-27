<template>	
	<v-card width="100%" flat>
		<v-card-title>
			<strong>
				Lance Atual: {{"R$"+ lanceNow+",00" }}
			</strong>
		</v-card-title>
		<v-card-text>
			<small v-if="lances.length" 
			justify="center">
				<span class="badge badge-info">
					{{ lances.length }} lances sobre o artigo.
				</span> 	
			</small>
			<small v-else>Sem lances sobre o artigo</small>
		</v-card-text>
		<v-card flat v-if="lances != []" >
			<v-row>
				<v-col>Usuário</v-col>
				<v-col>Lance</v-col>
				<v-col>Hora</v-col>
			</v-row>
			<v-row v-for="lance in lances" 
				:key="lance.length">
				<v-col>
					<small v-text="lance.user"/>
				</v-col>
				<v-col>
					<small>
						{{"R$"+lance.lance+",00"}}
					</small>
				</v-col>
				<v-col>
					<small v-text="lance.time"/>
				</v-col>
			</v-row>
            <v-btn
				color="#422321"
				class="white--text"
				large
                v-on:click="arremate()"
            >
                {{button(item)}}
            </v-btn>
		</v-card>
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
            lanceMinimo: state => state.itemApp.item.initialBid
        }),
        lanceNow(now){
			if(!this.lances[0]){
				if(this.lanceMinimo){
					return this.lanceMinimo
				}else{
					return "00"
				}	
			}else{
				for (var i = 0; i < this.lances.length; i++) {
				now = this.lances[i].lance;
				}	
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
			//atualiza o status do lote
           this.$store.dispatch('getItemByID', this.$route.query.id)
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