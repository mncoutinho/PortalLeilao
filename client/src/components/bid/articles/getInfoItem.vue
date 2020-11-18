<template>	
    <div style="background-color:rgba(166,78,75,0.1)">
		<v-card-title>
			<h3 class="d-flex font-weight-medium text-uppercase" style="color:#562B28">
				Informações sobre o Lote
			</h3>
		</v-card-title>
		<v-card-text class="d-flex justify-center flex-column" v-if="text">
			<div class="over balao " >
				<v-col 
				cols="8"
				v-for="msgs in text" 
				:key="msgs.length"
				>
						<h3 class="font-weight-bold text--primary">{{msgs.text}}</h3>
							<v-spacer/>
						<p class="text--secondary">{{msgs.time}}</p>
				</v-col>
			</div>  
		</v-card-text>
		<v-card-text v-else>
			Sem Informaçes sobre esse Lote 
		</v-card-text>
    </div>		
</template>
<script>
import {mapState} from "vuex"
export default {
    computed: {
        ...mapState({
			text: state => state.itemApp.msg,
			item: state => state.itemApp.item
        })
	}
}
</script>

<style scoped>
	.over{
		overflow-y: scroll;
		overflow-x: hidden;
		width: 100%;
	}
	.balao{
		background: rgba(166, 78, 75, 0.185);
		max-height: 100px;
		overflow-y: auto;
	}
</style>