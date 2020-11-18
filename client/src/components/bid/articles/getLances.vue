<template>
	<div style="background-color:rgba(166,78,75,0.1)" class="pa-6">
		<v-row 
		class="d-flex justify-space-between ml-6 mr-6 pa-2" 
		dense>
			<h3 class="d-flex font-weight-medium text-uppercase" style="color:#562B28">Comprador</h3>
			<h3 class="d-flex font-weight-medium text-uppercase mr-6" style="color:#562B28">Lance</h3>
			<h3 class="d-flex font-weight-medium text-uppercase mr-12" style="color:#562B28">Hora</h3>
		</v-row>
		<div class="over">
			<v-row 
			v-for="lance in lances" 
			:key="lance.length"
			class="d-flex justify-space-around pa-1 mr-2 ml-2"
			dense
			>
				<v-btn 
				v-if="admView"
				@click="view(lance.idUser)"
				v-text="'view'">
				</v-btn>
				<p class="text--secondary" v-text="lance.user"/>
				<p class="text--secondary flex-grow-1" >{{"R$"+lance.lance+",00"}}</p>
				<p class="text--secondary"  v-text="lance.time"/>
			</v-row>
		</div>
		<v-card-text>
			<h3 v-if="lances.length" class="font-weight-bold d-flex justify-start ml-2" style="color:#562B28">
				{{lances.length}} lances sobre o artigo.
			</h3>
			<h3 class="font-weight-thin d-flex justify-start ml-2" style="color:#562B28"  v-else>
				Sem lances sobre o artigo
			</h3>
		</v-card-text>
	</div>  
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
			lances: state => state.itemApp.lances,
			admView: state => state.admView
		})
	},
	methods: {
		view(id){
			this.$router.push({path:'/gestor', query:{q:id}})
		}
	},
}
</script>

<style scoped>
	.over{
		overflow-y: scroll;
		overflow-x: hidden;
		max-height: 20vh;
		position: relative;
		bottom: 0;
	}
</style>