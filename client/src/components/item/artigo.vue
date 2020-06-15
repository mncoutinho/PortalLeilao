<template>	
	<v-container class="container">			
		<v-card
		class="mx-auto my-1"
        max-width="350"
		justify="center"
        align="center"
		>
		
			<div v-if="aberto == false" class="my-1 subtitle-2 white--text" style="background:#3f51b5">
                          Aberto
                            </div>

                            <v-img
                            height="200"
                            src="https://i.imgur.com/EaowRPb.jpg"
                            >
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
							<v-row
                                align="center"
                                class="mx-0"
                                
                            >
                                <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                float="bottom"
                                ></v-rating>

                                <div class="white--text ml-4">4.5 (Nota do vendedor)</div>
                            </v-row>
							</v-img>
							<br>
							<div>
                               <v-text> Carro novo e com pouco tempo de uso</v-text>
                            </div>
			<v-card-title class="subtitle-2 " >
                            Lance Inicial:  <data style="margin:0px 1% 0px 1%"> R$ 30,00</data> 
                            </v-card-title>

			<v-card-title class="subtitle-2 " >
                            Lance Atual:  <data style="margin:0px 1% 0px 1%"> </data> 
                            </v-card-title>	




            <v-card v-if="aberto">
				<v-card-text class="red text-center">
					<span class="white--text">Leilao Fechado</span>
				</v-card-text>
			</v-card>
			<v-card id="card" v-else>
				
				<lance/>
				
			</v-card>

			
					
	
		</v-card>
		<!-- abertura e fachamento de leilao beta -->
		<v-btn v-on:click="closer(aberto)">leilao status</v-btn>
	</v-container>
</template>

<script>
import lance from "./lance"

export default {
	components:{
		lance
	},
	data(){
		return{		
			// teste botao de abrir leilao
			aberto:false,			
		};
	},
	
	methods: {
		// Teste
		closer(modal){
			if (modal) {
				this.aberto = false;
			}else {
				this.aberto = true;
			}			
		}
		
	}   
}
</script>

<style type="text/css">
	#card{
		padding: 30px;
	}
</style>



