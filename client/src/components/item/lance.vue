<template>
	<v-container class="container">			
		<v-card>
			<v-card-text justify="center">
				lances sobre o artigo <span class="badge badge-info">{{ lances.length }}</span>
			</v-card-text>	
			<v-list>
				<v-list-item 
				v-for="lance in lances" 
				:key="lance">
				<v-row>
					<v-col>
						<v-list-item-text v-text="lance.lance"/>
					</v-col>
					<v-col>
					<v-list-item-time v-text="lance.time"/>
					</v-col>
				</v-row>
				</v-list-item>
			</v-list>		
			<v-text-field v-model="lance" 
				v-on:keyup.enter="AddLance(lance)" 
				v-money="money" 
				label="Faca seu lance" />
			<v-btn color="success"
			v-on:click="AddLance(lance)"
			>
			Faça seu Lance
			</v-btn>
		</v-card>
	</v-container>
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
			lance: "",
			lances: [],
			time:"",	
		};
	},
	directives: {money: VMoney},
	methods: {
		AddLance(lance) {
			const time = new Date();
			const lanceConfirmado = {lance, time};		
			this.lances.push(lanceConfirmado);
		}, 
		DeleteLance(lance){
			this.lances.splice(this.lances.indexOf(lance), 1);
		},
	},   
}
</script>



