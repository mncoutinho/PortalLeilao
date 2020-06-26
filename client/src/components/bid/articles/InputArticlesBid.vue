<template>	
	<v-card width="100%">
		<v-card-title>
			<strong>Lance Atual: {{"R$"+ lanceNow+",00" }}</strong>
		</v-card-title>
		<v-card-text>
			<small v-if="lances.length" 
			justify="center">
				<span class="badge badge-info">{{ lances.length }}</span> lances sobre o artigo.</small>
			<small v-else>Sem lances sobre o artigo</small>
		</v-card-text>
		<v-card :elevation=5 v-if="lances != []">
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
		<v-text-field v-model="lance" 
		v-on:keyup.enter="AddLance(lance,user)" 
		label="Faca seu lance" />
		<v-btn 
		class="ma-4"
		v-on:click="AddLance(lance,user)"
		color="success" >
			Faça seu Lance
		</v-btn>
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
		:elevation = 10
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
		{{lances}}
	</v-card>		
</template>

<script>
import axios from 'axios';

export default {

	data(){
		return{
			lanceMinimo: 300,
			lance: 0,
			lances: [],
			user:"Adalto Silva",
			//id herdado do pai
			IDitem:'A5zfqb6in8HoIm99CMmt',
			
			// teste auto lance
			autolance: {
				modal: false,
				limit: 0
			}
		};
	},
	
	methods: {
		AddLance(lance,user) {
			//convertendo
			lance = parseInt(lance);
			console.log(this.lanceMinimo);

			if(lance > this.lanceMinimo){
				this.lanceMinimo = lance;
				const time = new Date();
				const lanceConfirmado = {lance, time, user};		
				this.lances.push(lanceConfirmado);

				//postando no banco
				axios({
					method:`patch`,
					url:'https://us-central1-portalleilao-26290.cloudfunctions.net/item/bidding',
					data:{
						item: this.IDitem,
						bid: this.lances
					},
				})
				.then(() =>{
					return alert("lance feito");
				})
				.catch(error => console.log(error));
				
			}else{
				alert("Voce nao pode fazer um lance abaixo do minimo");
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
	computed:{
		// funcoes de leitura rapida na tela
		
		lanceNow(){
			var now = 0;
			for (var i = 0; i < this.lances.length; i++) {
				now = this.lances[i].lance;
			}	
			return  now;
		}
	},
	created(){
		axios({
			method:`post`,
			url:'https://us-central1-portalleilao-26290.cloudfunctions.net/item/getBidItem',
			data:{item: this.IDitem},
		})
		.then(response => {
				this.lances = response.data
			})
		.catch(error => console.log(error));
	}
}
</script>




