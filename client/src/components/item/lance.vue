<template>
	<v-container class="container">			
		<v-card>
			<clock></clock>
			<v-text class="form-control text-center">
				lances sobre o artigo <span class="badge badge-info">{{ lances.length }}</span>
			</v-text>	
			<v-list>
				<v-list-item 
				v-for="lance in lances" 
				v-bind:key="lance">
					{{lance}}
				</v-list-item>
			</v-list>		
			<v-text-field v-model="lance" 
				v-on:keyup.enter="AddLance(lance)" 
				v-money="money" 
				label="Faca seu lance" />
			<v-btn v-on:click="AddLance(lance)">Fazer Lance</v-btn>
		</v-card>
	</v-container>
</template>

<script>
import clock from "./clock";
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
			lance: "",
			lances: [],
			
		};
	},
	component:{
		clock
	},
	directives: {money: VMoney},
	methods: {
		AddLance(lance) {		
			this.lances.push(lance);
		}, 
		DeleteLance(lance){
			this.lances.splice(this.lances.indexOf(lance), 1);
		},
	},   
}
</script>



