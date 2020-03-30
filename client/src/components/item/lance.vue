<template>
	<v-container class="container">			
		<v-card
		class="mx-auto my-1"
        max-width="350"
		justify="center"
        align="center"
		>
		
			<div class="my-1 subtitle-2 white--text" style="background:#3f51b5">
                          Aberto
                            </div>

                            <v-img
                            height="200"
                            src="https://i.imgur.com/EaowRPb.jpg"
                            >
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
							<v-row
                                align="center"
                                class="mx-0"
                                
                            >
                                <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                float="bottom"
                                ></v-rating>

                                <div class="white--text ml-4">4.5 (Nota do vendedor)</div>
                            </v-row>
							</v-img>
							<br>
							<div>
                               <v-text> Carro novo e com pouco tempo de uso</v-text>
                            </div>
			<v-card-title class="subtitle-2 " >
                            Lance Inicial:  <data style="margin:0px 1% 0px 1%"> R$ 30,00</data> 
                            </v-card-title>

			<v-card-title class="subtitle-2 " >
                            Lance Atual:  <data style="margin:0px 1% 0px 1%"> </data> 
                            </v-card-title>	

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
						

			<v-text-field v-model="lance" class="col-12"
				v-on:keyup.enter="AddLance(lance)" 
				v-money="money" 
				label="Faca seu lance" />
			<v-btn color="success" class="col-12"
			v-on:click="AddLance(lance)"
			>
			Faça seu Lance
			</v-btn>
			
		</v-card>
	</v-container>
</template>

<!---
<v-card
                            :loading="loading"
                            class="mx-auto my-1"
                            max-width="350"
                        >
                         <div class="my-1 subtitle-2 white--text" style="background:#3f51b5">
                          Aberto
                            </div>

                            <v-img
                            height="200"
                            src="https://i.imgur.com/EaowRPb.jpg"
                            >
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                          
                            
                            <v-row
                                align="center"
                                class="mx-0"
                                
                            >
                                <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                float="bottom"
                                ></v-rating>

                                <div class="white--text ml-4">4.5 (Nota do vendedor)</div>
                            </v-row>
                            </v-img>
                             


                            <v-card-title>{{artigo.name}}</v-card-title>

                            <v-card-text>
                           
                                <br>
                            <div>
                                {{artigo.description}}
                            </div>
                            </v-card-text>

                            <v-divider class="mx-4"></v-divider>
                                <v-card-title class="subtitle-2 " >
                            Abertura:  <data style="margin:0px 1% 0px 1%"> {{artigo.date}}</data> 
                            </v-card-title> 

                            <v-card-title class="subtitle-2 " >
                            Lance Inicial:  <data style="margin:0px 1% 0px 1%"> {{artigo.initialbid}}</data> 
                            </v-card-title> 

                            
                        <v-card-actions>
                            <v-btn class="col-12 white--text"
                                color="light-green lighten-1 "
                                @click="Lance"
                               
                            >
                             ABERTO PARA LANCES
                            </v-btn>
                            </v-card-actions>
                        </v-card>
--->

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



