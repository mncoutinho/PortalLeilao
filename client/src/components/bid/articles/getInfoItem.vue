<template>	
    <div>
        <v-card-title>
			<strong>
                Informaçes sobre o Lote
            </strong>
		</v-card-title>
        <v-card-text v-if="text">
            <v-row>
			<v-col>
				<h4>Mensagem</h4>	
			</v-col>
		</v-row>
		<div class="over balao" >
			<v-row 
			v-for="msgs in text" 
			:key="msgs.length"
			>
				<v-col>
					<h3>{{msgs.text}}</h3>
					<small>{{msgs.time}}</small>
				</v-col>
			</v-row>
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
            text: state => state.itemApp.msg
        })
    },
    created() {
        this.$store.dispatch('getInfo', this.$route.query.id)
    },
}
</script>

<style scoped>
	.over{
		overflow-y: scroll;
		overflow-x: hidden;
		max-height: 30vh;
	}
	.balao{
		height: 100px;
		overflow-y: auto;
	}
</style>