<template>
<div>
        <v-card-text>
			<small 
				v-if="lances.length" 
				justify="center"
			>
				<span 
					class="badge badge-info"
				>
					{{lances.length}}
				</span> 
				lances sobre o artigo.
			</small>
			<small v-else>
				Sem lances sobre o artigo
			</small>
		</v-card-text>
        <v-row>
			<v-col>
				<h3>Usuário</h3>
			</v-col>
			<v-col>
				<h3>Lance</h3>
			</v-col>
			<v-col>
				<h3>Hora</h3>
			</v-col>
		</v-row>
		<div
			class="over"
		>
			<v-row 
			v-for="lance in lances" 
			:key="lance.length"
			>
				<v-col>
					<small v-text="lance.user"/>
				</v-col>
				<v-col>
					<small>{{"R$"+lance.lance+",00"}}</small>
				</v-col>
				<v-col>
					<small v-text="lance.time"/>
				</v-col>
			</v-row>
		</div>
</div>  
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
			lances: state => state.itemApp.lances
		})
    },
}
</script>

<style scoped>
	.over{
		overflow-y: scroll;
		overflow-x: hidden;
		max-height: 20vh;
	}
</style>