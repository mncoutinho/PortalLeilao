<template>	
    <div>
        <v-card-title>
			<strong>
                Informaçes sobre o Lote
            </strong>
		</v-card-title>
        <v-card-text v-if="text">
            {{text}}
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