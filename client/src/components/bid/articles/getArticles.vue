<template>	
	<v-container>
		<v-row>
			<v-card
			width="100%"
			justify="center"
			align="center">
				<v-card-actions >
					<v-btn>Próximo</v-btn>
					<v-btn>Anterior</v-btn>
					<v-btn>Voltar</v-btn> 
				</v-card-actions>
				<v-carousel
				cycle
				width="100%"
				hide-delimiter-background
				>
					<v-carousel-item
					v-for="img in artigo.imgUrl"
					height="50%"
					:key="img">
						<v-img
						:src="img"/>
					</v-carousel-item>
				</v-carousel>           
				<v-card-text
				align="left"
				class="mx-0">
					<small>
						<v-rating
						v-bind:value="vendedor.value"
						color="amber"
						dense
						half-increments
						readonly
						size="14"
						/>
						{{vendedor.value}} (Nota do vendedor)
					</small>
					<v-spacer/>
					<small><b>visitas:</b>25</small>
					<v-spacer/>
					<small>Descrição:{{ artigo.description }}</small>
					<v-spacer/>
					<small><b>Local:</b>Rio de Janeiro</small>	
					<v-spacer/>
					<small><b>Dia dos Leilão:</b>{{ artigo.date }}</small>	
					<v-spacer/>
					<small><b>Lance Inicial:</b>{{ "R$ " + artigo.initialbid + ",00"}}</small>	
			
				</v-card-text>
			
				<v-btn class="ma-3" v-on:click="closer()">leilao status</v-btn>
				<!-- abertura e fachamento de leilao beta -->
			<v-card-text v-if="status == false" class="red text-center">
				<span class="white--text">Leilao Fechado</span>
			</v-card-text>
				
			</v-card>
		</v-row>

		<v-row class="mt-5">
			<lance  align="center"/>		
		</v-row>
	</v-container>	
</template>

<script>
import lance from "./InputArticlesBid";
import axios from 'axios';

export default {
	components:{
		lance
	},
	data(){
		return{		
			// teste botao de abrir leilao
			
			artigo: {
				},
				status:false,
			vendedor: {
				value: 5
			}			
		};
	},

	created() {
		axios({
			method:`post`,
			url:'https://us-central1-portalleilao-26290.cloudfunctions.net/item/getItemById',
			data:{id:'6escILKzT48O4Ocz04eY'},
		})
		.then(response => {
				this.artigo = response.data
				console.log(this.artigo)
			})
		.catch(error => console.log(error));
	},
	
	methods: {
		// Teste
		closer(){
				this.status = !this.status; 
		}
		
	}   
}
</script>