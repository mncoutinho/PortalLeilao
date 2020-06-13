<template>
	<v-container class="container ">	
        <div class="col-md-6 " style="float:left"
>	
		<v-card
		class="mx-auto my-1"
        max-width="100%"
		justify="center"
        align="center"
        height="420"
        
		>
		
			<div class="my-1 subtitle-2 white--text" style="background:#3f51b5">
                          Aberto
                            </div>
                            <br>
                            <v-img
                            height="300"
                            width="400"
                            src="https://i.imgur.com/EaowRPb.jpg"
                            >
                           
							
							</v-img>
                            <br>
                        <v-row
                                align="center"
                                class="mx-0" 
                            >
                                <v-rating  style="margin-left:2%"

                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                
                                ></v-rating>

                                <div class="black--text ml-1">4.5 (Nota do vendedor)</div>
                            </v-row>

		</v-card>
        </div>	

     <!--------------------------------------------------->   

        <div 
        class="col-md-6 mx-auto my-1"
        style="float:right"
        max-width="100%"
        >	
 

 <span  class="title">Lote: {{ selected }}</span>
 <select v-model="selected" >
            <option disabled value="">selecionar</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            </select>

  <a href="#" style="text-decoration:none;float:right;margin-left:1%">  Próximo </a>  <a href="#" style="text-decoration:none;float:right;margin-left:1%">  Anterior </a><a href=""  style="text-decoration:none;float:right"> Voltar | </a>   
  <br>     
    <hr>
    <p
        style="font-size:12px"
    >
        <b>visitas:</b>   25</p>

		<div align="justify">
          <v-text > Carro novo e com pouco tempo de uso</v-text>
        </div>

         <hr>
        <p
        style="font-size:12px"
    >
        <b>Local:</b>   Rio de Janeiro</p>

         <p
        class="subtitle-2">
        <b> Dia dos leilão:</b>
         <data style="margin:0px 1% 0px 1%"> 10/04/2020</data>
        </p>

        
        <hr>
       <p
        class="subtitle-2 "
    >
         Lance Inicial: R$ 50,00
         </p> 
         <p
        class="title"
        v-for="lance in lances" 
				:key="lance"
    >
         Lance Atual: <v-list-item-text v-text="lance.lance"/>
         </p>
		<p
        class="subtitle-2"
        v-for="lance in lances" 
				:key="lance"
    >
         Usuario: <v-list-item-text v-text="lance.user"/>
         </p>
		<!--	<v-list>
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
		</v-list> -->


        <v-card-text justify="center">
				lances sobre o artigo <span class="badge badge-info">{{ lances.length }}</span>
			</v-card-text>	
			
			<v-text-field v-model="lance" class="col-12"
				v-on:keyup.enter="AddLance(lance,user)" 
				v-money="money" 
				label="Faca seu lance" />
			<v-btn color="success" class="col-12"
			v-on:click="AddLance(lance,user)"
			>
			Faça seu Lance
			</v-btn>
			<br><br>
			<v-btn
			v-on:click="autoLanceModal(autolance.modal)">
				auto lance
			</v-btn>
				<br><br>
			<div v-if="autolance.modal"
			style="box-shadow:1px 1px 10px 1px gray;
			border-radius:10px 10px 10px 10px
			"
			>
			<p
        class="subtitle-3 col-12">
				De limite ao seu lance 
				</p>
				<v-text-field class="col-12"
					v-model="lanceLimit"
					v-money="money"
					v-on:keyup.enter="autolancelimit(lanceLimit)"
					/>
			<v-btn color="gray" class="col-6 "
			>
			Cancelar
			</v-btn>
			<v-btn color="white" class="col-6"
			>
			Confirmar
			</v-btn>

			</div>
			
		
        </div>	
        
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
			user:"Joao Claudio",
            time:"",	
			selected: '',
			
			
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
		DeleteLance(lance){
			this.lances.splice(this.lances.indexOf(lance), 1);
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
}
</script>





