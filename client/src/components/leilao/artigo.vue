<template>	
	<div>
        <div class="col-md-6" style="float: left;">	
			<v-card
			max-width="100%"
			height="420"
			justify="center"
			align="center"> 
				<v-img
				height="300"
				width="100%"
				v-bind:src="artigo.img"
				/>
                <br>
                            
				<v-row
				align="center"
				class="mx-0">
					<v-rating
					style="margin-left:2%"
					v-bind:value="vendedor.value"
					color="amber"
					dense
					half-increments
					readonly
					size="14"
					/>
					<div class="black--text ml-1">{{vendedor.value}} (Nota do vendedor)</div>
				</v-row>

				<v-row>
					<a v-bind:href="artigo.link" target="_blank" style="margin-left:5%">link Youtube</a>
				</v-row>

			</v-card>
		</div>
		
		<br>
		

		<a href="#" style="text-decoration:none;float:right;margin-left:1%">  Próximo </a>  
		<a href="#" style="text-decoration:none;float:right;margin-left:1%">  Anterior </a>
		<a href="#"  style="text-decoration:none;float:right"> Voltar | </a>   
		<br>     
		<hr>

		<p style="font-size:12px">
			<b>visitas:</b>   
			25
		</p>

		<div align="justify">
			<v-text >{{ artigo.description }}</v-text>
		</div>
		<hr>
		<p style="font-size:12px">
		<b>Local:</b>   
			Rio de Janeiro
		</p>
		<p class="subtitle-2">
			<b> Dia dos leilão:</b>
			<data style="margin:0px 1% 0px 1%"> {{ artigo.date }}</data>
		</p>       
		<hr>
		<p class="subtitle-2 " >
			Lance Inicial: 
			<data style="margin:0px 1% 0px 1%">
				{{ "R$ " + artigo.initialbid + ",00"}}
			</data>
		</p> 

		<div class="col-md-6" style="float: right;">
			

				

			<v-card v-if="artigo.status">
				<v-card-text class="red text-center">
					<span class="white--text">Leilao Fechado</span>
				</v-card-text>
			</v-card>
			<div id="card" v-else>
				<lance/>
			</div>
		</div>
		
				
	<!-- abertura e fachamento de leilao beta -->
		<v-btn v-on:click="closer(artigo.status)">leilao status</v-btn>
	</div>	
</template>

<script>
import lance from "./lance";
import axios from 'axios';

export default {
	components:{
		lance
	},
	data(){
		return{		
			// teste botao de abrir leilao
			id:['3o4IyBuAwPoZTXpiXT4M','leilaoBeta','6escILKzT48O4Ocz04eY','uhuWuJrvWxI5S9A0Hrsi'],
			artigo: {
				name:" ",
				img:" ",
				description:" ",
				link: " ",
				date:" ",
				initialbid:0,
				status:false,				
			},
			vendedor: {
				value: 5
			}			
		};
	},

	created() {
		axios({
			method:`post`,
			url:'https://us-central1-portalleilao-26290.cloudfunctions.net/item/getItemById',
			data:{id: this.id[1]}
		})
		.then(response => {
				this.artigo = {
					name: response.data.name,
					img: response.data.img,
					description: response.data.description,
					link: response.data.link,
					date: response.data.date,
					initialbid: response.data.initialbid,
					status: response.data.status
				}
			})
		.catch(error => console.log(error));
	},
	
	methods: {
		// Teste
		closer(modal){
			if (modal) {
				this.artigo.status = false;
			}else {
				this.artigo.status = true;
			}			
		},
		
	}   
}
</script>

<style type="text/css">
	#card{
		padding: 30px;
	}
</style>
