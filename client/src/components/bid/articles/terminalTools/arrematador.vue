<template>	
	<v-card width="100%" flat>
		<v-card-title>
			<strong>
				Lance Atual: {{"R$"+ lanceNow+",00" }}
			</strong>
		</v-card-title>
			<div>
				<h4>Painel de operacoes</h4>
				<div>
					<h3>operadores</h3>
					<v-btn
					width="50%"
					color="blue"
					class="white--text"
					v-on:click="alert('fechamento')"
					large
					>
						Aviso Fechamento
					</v-btn>

					<v-btn
					width="50%"
					color="red"
					class="white--text"
					v-on:click="alert('martelo')"
					large
					>
						Aviso Martelo
					</v-btn>
				</div>

				<div>
					<h3>Controles sobre o Lote</h3>
					<v-btn
					width="50%"
					color="yellow"
					class="black--text"
					large
					>
						Martelo Automatico
					</v-btn>

					<v-btn
					width="50%"
					:color="color"
					class="white--text"
					large
					v-on:click="arremate()"
				>
					{{button(item.active)}}
				</v-btn>
				</div>
			</div>
            
	</v-card>		
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {

			status: null,
			color:null,
        }
    },
    computed:{
		...mapState({
            lances: state => state.itemApp.lances,
			item: state => state.itemApp.item,
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
				for (let i = 0; i < this.lances.length; i++) {
					now = this.lances[i].lance;
				}	
				return  now;
			}				
		}
	},
    methods: {
        arremate(){
			console.log('ativado')
			let lance = null;
			if(this.status == "fechar lote"){
				lance = false
			}else{
				lance = true
			}
			this.$store.dispatch('finishLance',{id: this.item.id, status: lance})
			
		},
		button(item) {
			if(item){
				this.color = "red"
				return this.status = "fechar lote" 
			}else{
				this.color = "green"
				return this.status = "reabrir lote" 
			}
		},
		alert(type){
			const time = new Date();
			let msg = {
                time: `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}-${time.getHours()}:${time.getMinutes()}`
            }
			switch (type) {
				case 'fechamento':
					msg.text = "O leiloeiro esta preste a fechar o lote"
					break;
				case 'martelo':
					msg.text = "O leiloeiro estara batendo o martelo"
					break;
				default:
					msg.text = "error"
					break;
			}
			this.$store.dispatch('addInfo',{info: msg, id: this.item.id})
		},
		
    }
}
</script>
