<template>	
	<v-container>
		<v-row>
			<v-card
			width="100%"
			justify="center"
			align="center">
				<v-card-actions justify="end">
					<v-spacer></v-spacer>
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
						:src="img">
							<v-card-title float="left" v-text="artigo.name"/>
						</v-img>
					</v-carousel-item>
				</v-carousel>           
				<v-card-text
				align="left"
				class="mx-0">
					<strong>
						<v-rating
						v-bind:value="vendedor.value"
						color="amber"
						dense
						half-increments
						readonly
						size="14"
						/>
						{{vendedor.value}} (Nota do vendedor)
					</strong>
					<v-spacer/>
					<strong>visitas:<small>25</small></strong>
					<v-spacer/>
					<strong>Descrição:<small>{{ artigo.description }}</small></strong>
					<v-spacer/>
					<strong>Local:<small>Rio de Janeiro</small></strong>
					<v-spacer/>
					<strong>Dia dos Leilão:<small>{{ artigo.date }}</small></strong>
					<v-spacer/>
					<strong>Lance Inicial:<small>{{ "R$ " + artigo.initialBid + ",00"}}</small></strong>
				</v-card-text>
				<!-- abertura e fachamento de leilao beta -->
				
			</v-card>
		</v-row>
		<v-row class="mt-5">
			<v-card-text v-if="artigo.active == false" class="red text-center">
					<span class="white--text">Leilao Fechado</span>
			</v-card-text>
			<v-card-text v-else>
				<lance
					align="center"
				/>	
			</v-card-text>	
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
			
			artigo: {},
			vendedor: {
				value: 5
			}			
		};
	},

	created() {
		axios({
			method:`post`,
			url:'https://us-central1-portalleilao-26290.cloudfunctions.net/item/getItemById',
			data:{id:'A5zfqb6in8HoIm99CMmt'},
		})
		.then(response => {
				this.artigo = response.data
			})
		.catch(error => console.log(error));
	},
	
	methods: {
	}   
}
</script>