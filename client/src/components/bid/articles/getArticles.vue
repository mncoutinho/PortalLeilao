<template>	
	<v-container >
		<v-row class="d-flex justify-center">
			<v-carousel
			cycle
			width="100%"
			height="400px"
			delimiter-icon="mdi-circle"
			>
				<v-carousel-item
				v-for="img in artigo.imgUrl"
				:key="img.length"
				max-height="400px"
				width="100%"
				class="d-flex align-center">
					<v-zoom class="d-flex justify-center mt-10" :img="img" :width="width">
					</v-zoom>	
				</v-carousel-item>
			</v-carousel>         
			<v-card-text>
				<p style="color:#562B28" class="title font-weight-bold">
					Visitas:
					<span class="font-weight-light subtitle-1">
						25
					</span>
				</p>
					<v-spacer/>
				<p style="color:#562B28" class="title font-weight-bold">
					Descrição:
					<span class="font-weight-light subtitle-1">
						{{ artigo.description }}
					</span>
				</p>
					<v-spacer/>
				<p style="color:#562B28" class="title font-weight-bold">
					Local:
					<span class="font-weight-light subtitle-1">
						Rio de Janeiro
					</span>
				</p>
					<v-spacer/>
				<p style="color:#562B28" class="title font-weight-bold">
					Dia dos Leilão:
					<span class="font-weight-light subtitle-1">
						{{ artigo.date }}
					</span>
				</p>
					<v-spacer/>
				<p style="color:#562B28" class="title font-weight-bold">
					Lance Inicial:
					<span class="font-weight-light subtitle-1">
						{{ formatacao(artigo.initialBid)}}
					</span>
				</p>
			</v-card-text>
		</v-row>
	</v-container>	
</template>
<script>
import { mapState} from "vuex";
import vZoom from 'vue-zoom';
export default {
	components: {vZoom},
	data(){
		return{
			width: 400,	
		};
	},
	computed: {
		...mapState({
			artigo: state => state.itemApp.item,
		})
	},
	methods: {
		formatacao(initialBid){
			if(initialBid){
				return "R$"+initialBid+",00"
			}else{
				return "R$00,00"
			}
		}
	},
}
</script>