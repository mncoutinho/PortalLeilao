<template>	
    <div>
        <v-card-title>
			<strong>Informaçes sobre o Lote</strong>
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
export default {
    data() {
        return {
            //text: "Se encontra 2 arranhoes na parte superior direita da mesa"
        }
    },
}
</script>