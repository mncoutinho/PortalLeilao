<template>	
	<v-container>
		<v-row>
			<v-card
			width="100%"
			justify="center"
			align="center">
				<v-card-actions justify="end">
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

		
	</v-container>	
</template>
<script>
import { mapState} from "vuex";
export default {
	data(){
		return{		
			vendedor: {
				value: 5
			}			
		};
	},computed: {
		...mapState({
			artigo: state => state.itemApp.item,
		})
	}
  
}
</script>