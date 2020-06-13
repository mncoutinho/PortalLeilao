<template>	
	<v-card width="100%">
		<v-card-title>
			<strong>Lance Atual: {{ lanceNow }}</strong>
		</v-card-title>
		<v-card-text >
			<small v-if="lances.length" justify="center"><span class="badge badge-info">{{ lances.length }}</span> lances sobre o artigo </small>
			<small v-else>Sem lances sobre o artigo</small>
		</v-card-text>
		<v-card v-if="lances != []">
			<v-row>
				<v-col>Usuário</v-col>
				<v-col>Lance</v-col>
				<v-col>Hora</v-col>
			</v-row>
			<v-row v-for="lance in lances" 
				:key="lance">
				<v-col>
					<small v-text="lance.user"/>
				</v-col>
				<v-col>
					<small v-text="lance.lance"/>
				</v-col>
				<v-col>
					<small v-text="lance.time"/>
				</v-col>
			</v-row>
		<v-text-field v-model="lance" 
		v-on:keyup.enter="AddLance(lance,user)" 
		v-money="money" 
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
		class="my-4"
		v-if="autolance.modal"
		>
			<v-text-field
			class="ma-3"
			v-model="autolance.limit"
			v-money="money"
			label="De limite ao seu lance :"
			v-on:keyup.enter="autolancelimit()"
			/>
			<v-btn 
			color="gray" 
			block
			v-on:click="autoLanceModal()"
			>
				Cancelar
			</v-btn>
			<v-btn
			block 
			color="white" 
			>Confirmar
			</v-btn>
		</v-card>
	</v-card>		
</template>

<script>

import {VMoney} from "v-money";
export default {

	data(){
		return{
			money: {
				decimal: ',',
				thousands: '.',
				prefix: 'R$ ',
				suffix: ' ',
				precision: 2,
				masked: false
			},
			lance: '',
			lances: [],
			user:"Joao Claudio",
			
			// teste auto lance
			autolance: {
				modal: false,
				limit: 0
			}
		};
	},
	directives: {money: VMoney},
	methods: {
		AddLance(lance,user) {
			const time = new Date();
			const lanceConfirmado = {lance, time, user};		
			this.lances.push(lanceConfirmado);


		},
		// Teste
		
		autoLanceModal(){

				this.autolance.modal = !this.autolance.modal;
			
		},
		autolancelimit(){
			
		}	
	},
	computed:{
		// funcoes de leitura rapida na tela
		
		lanceNow(){
			var now = 0;
			for (var i = 0; i < this.lances.length; i++) {
				now = this.lances[i].lance;
			}	
			return now;
		}
	}
}
</script>




