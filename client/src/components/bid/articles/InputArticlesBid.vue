<template>	
	<v-card 
		width="100%"
		flat
	>
		<v-card-title>
			<strong>
				Lance Atual:{{" R$"+ lanceNow+",00"}}
			</strong>
		</v-card-title>	
		<v-card 
			flat 
			v-if="lances" 
		>
			<v-row class="mt-5">
				<v-card-text 
					v-if="item.active == false" 
					class="red text-center"
				>
						<span class="white--text">
							Lote Fechado Para Lances
						</span>
				</v-card-text>
				<v-card-text v-else>
						<v-text-field 
							v-model="lance" 
							v-on:keyup.enter="AddLance()" 
							label="Faca seu lance" 
							placeholder="R$ 999,99"
						/>
						<v-btn 
							class="ma-4"
							v-on:click="AddLance()"
							color="success" 
						>
							Faça seu Lance
						</v-btn>
				</v-card-text>	
			</v-row>
		</v-card>
			<!-- Auto lance beta -->
		<v-btn
			class="ma-4"
			v-if="autolance.modal != true"
			v-on:click="autoLanceModal()"
		>
			auto lance
		</v-btn>
		<v-card
			align="center" 
			class="py-auto"
			v-if="autolance.modal"
		>
			<v-text-field
				class="mx-3 mt-5"
				v-model="autolance.limit"
				label="De limite ao seu lance :"
				v-on:keyup.enter="autolancelimit(autolance.limit,user)"
			/>
				<v-row align="start" justify="center">
					<v-btn 
					color="gray" 
					v-on:click="autoLanceModal()"
					>
						Cancelar
					</v-btn>
					<v-btn
					color="white"
					v-on:click="autolancelimit(autolance.limit,user)"
					>Confirmar
					</v-btn>
				</v-row>
		</v-card>
	</v-card>		
</template>

<script>
import {mapState} from 'vuex';
//import firebase from 'firebase';
export default {
	data(){
		return{
			lance: "",
			// teste auto lance
			autolance: {
				modal: false,
				limit: 0
			}
		};
	},
	methods: {
		AddLance() {
			//convertendo
			console.log(this.item.id)
			this.lance = parseInt(this.lance);
			if(this.lance > this.lanceNow){
				const time = new Date();
				const lanceConfirmado = {
					lance: this.lance, 
					time: `horario: ${time.getHours()}:${time.getMinutes()} data: ${time.getDay()}/${time.getMonth()}/${time.getFullYear()}`,  
					user: this.user.email , 
					idUser: this.user.uid, 
				};		
				
				this.$store.dispatch('addLance',{id:this.item.id,payload:lanceConfirmado})
				//this.$store.dispatch('getLances',this.item.id)
				//this.lanceNow = this.lance;

			}else{
				alert('vc n pode da um lance abaixo')
			}
			

		},
		// Teste
		autoLanceModal(){
			this.autolance.modal = !this.autolance.modal;	
		},
		autolancelimit(limit,user){
			limit = parseInt(limit);
			console.log(limit);
			if(limit > this.lanceMinimo){
				this.lanceMinimo = this.lanceMinimo + 20;
				const lance = this.lanceMinimo;
				const time = new Date();
				const lanceConfirmado = {lance,time,user};
				console.log("autolance say: ",lance);
				this.lances.push(lanceConfirmado);
			}
		}	
	},
	created() {
		this.$store.dispatch('getLances',this.item.id)
	},
	computed:{
		...mapState({
			user: state => state.userApp.user,
			lances: state => state.itemApp.lances,
			item: state => state.itemApp.item,
			lanceMinimo: state => state.itemApp.item.initialBid
		}),
		// funcoes de leitura rapida na tela	
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
	}
}
</script>





