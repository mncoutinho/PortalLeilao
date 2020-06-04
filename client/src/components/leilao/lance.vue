<template>	
	<div>
		<v-card-title class="subtitle-2 " >
			Lance Atual:
			<data style="margin:0px 1% 0px 1%">
				{{ lanceNow }}
			</data> 
		</v-card-title>
		<v-card-text v-if="lances.length" justify="center">
			<span class="badge badge-info">{{ lances.length }}</span> lances sobre o artigo 
		</v-card-text>

		<v-card-text v-else justify="center">
			Sem lances sobre o artigo
		</v-card-text>
		<div style="overflow: auto; height: 80px" >
			<v-list>
				<v-list-item 
				v-for="lance in lances" 
				:key="lance">
					<v-row>
						<v-col>
							<v-list-item-time v-text="lance.user"/>
						</v-col>
						<v-col>
							<v-list-item-text v-text="lance.lance"/>
						</v-col>
						<v-col>
							<v-list-item-time v-text="lance.time"/>
						</v-col>
					</v-row>
				</v-list-item>
			</v-list>
		</div>	

		<v-text-field v-model="lance" 
		v-on:keyup.enter="AddLance(lance,user)" 
		v-money="money" 
		label="Faca seu lance" />

			<v-btn 
			v-on:click="AddLance(lance,user)"
			color="success" class="col-12">
				Faça seu Lance
			</v-btn>

				<!-- Auto lance beta -->
				<br>
				<br>
			<v-btn
			v-if="autolance.modal != true"
			v-on:click="autoLanceModal(autolance.modal)"
			>
				auto lance
			</v-btn>

			<div 
			v-if="autolance.modal"
			style="box-shadow:1px 1px 10px 1px gray;
			border-radius:10px 10px 10px 10px;
			"
			>
				<p
				class="subtitle-3 col-12"
				>
					De limite ao seu lance 
				</p>
				
				<v-text-field
				class="col-12"
				v-model="lanceLimit"
				v-money="money"
				v-on:keyup.enter="autolancelimit(lanceLimit)"
				/>

				<v-btn 
				color="gray" 
				class="col-6"
				v-on:click="autoLanceModal(autolance.modal)"
				>
					Cancelar
				</v-btn>

				<v-btn 
				color="white" 
				class="col-6"
				>
					Confirmar
				</v-btn>
			</div>
	
			
		
	</div>		
</template>

<script>

import {VMoney} from "v-money";
import axios from "axios/dist/axios";
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
			const lanceConfirmado = {lance, time,user};		
			this.lances.push(lanceConfirmado);


		},
		// Teste
		
		autoLanceModal(modal){
			if (modal) {
				this.autolance.modal = false;
			}else{
				this.autolance.modal = true;
			}			
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

	},
	created() {
			axios({
				url: "http://localhost:4000",
				method: "post",
				data: {
				query:` {
					lance {
			            lance, 
			            time,
			            user
			          }
			    }
			    `
				}
			}).then(/* response => */);
		}   
}
</script>

<style type="text/css">
	#card{
		padding: 30px;
	}
</style>



