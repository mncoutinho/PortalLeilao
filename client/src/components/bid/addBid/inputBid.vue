<template>
    <v-container id="container" >
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h4 class="brown--text" >Bem-vindo leiloeiro</h4>
                <p >Cadastrar seu leilão ficou ainda mais fácil, basta apenas preencher o formulário
                e em breve estará no ar.
                </p>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form>
                    
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="title"
                                label="Nome do leilao*"
                                v-model="leilao.nome"   
                            />
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="title"
                                label="Local do leilao*"
                                v-model="leilao.local"    
                            />
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-textarea
                                name="title"
                                label="Descricao do Leilao*"
                                v-model="leilao.descricao"    
                            />
                        </v-flex>
                    </v-layout>

                    <v-layout row style="margin-top: 30px;">
                        <v-flex xs12 sm3 offset-sm3>
                            <h4 class="brown--text" >Data de abertura</h4>
                            <v-date-picker
                             color="#422321"
                              class="col-12"
                              v-model="leilao.abertura" 
                              />
                        </v-flex>
                        
                        <v-flex xs12 sm3 >
                            <h4 class="brown--text" >Data de fechamento</h4>
                            <v-date-picker 
                            color="#422321" 
                            class="col-12"
                            v-model="leilao.fechamento"
                            />
                        </v-flex>
                    </v-layout>

                    <dadosLeiloeiro/>

                    <termos/>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn 
                            class="col-12"
                            color="success" 
                            >
                                Confirmar
                            </v-btn>
                        </v-flex>
                    </v-layout>

                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import dadosLeiloeiro from "./getAuctioneerData";
import termos from "./termsBid"
export default {
    components:{
    dadosLeiloeiro,
    termos,
  },
  data(){
      return{
          leilao:{
              nome:"carro",
              local:"r lavradinho",
              descricao:"carros loucos",
              abertura:"",
              fechamento:""
          }
      }
  }
}
</script>

<style>
#container{
    margin-top: 40px; 
    margin-bottom: 100px; 
    text-align:center; 
}

</style>