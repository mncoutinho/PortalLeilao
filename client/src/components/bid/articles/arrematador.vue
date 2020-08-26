<template>	
	<v-card width="100%" flat>
		<v-card-title>
			<strong>Lance Atual: {{"R$"+ lanceNow+",00" }}</strong>
		</v-card-title>
		<v-card-text>
			<small v-if="lances.length" 
			justify="center">
				<span class="badge badge-info">{{ lances.length }}</span> lances sobre o artigo.</small>
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
					<small>{{"R$"+lance.lance+",00"}}</small>
				</v-col>
				<v-col>
					<small v-text="lance.time"/>
				</v-col>
			</v-row>
            <v-btn
                v-on:click="arremate()"
            >
                {{status}}
            </v-btn>
		</v-card>
        {{item}}
	</v-card>		
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            status: this.button(this.item)
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
				return this.lanceMinimo
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
            if(this.status == "fechar"){
                return this.status = "abrir"
            }else{
                return this.status = "fechar"
            }
        },
        button(item){
            if(item){
                return "fechar"
            }else{
                return "abrir"
            }
        }
    }
}
</script>