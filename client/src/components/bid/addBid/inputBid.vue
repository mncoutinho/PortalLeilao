<template>
    <v-container>
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
                            />
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="title"
                                label="Descricao do Leilao*"   
                            />
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="title"
                                label="Local do leilao*"   
                            />
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <p>Data para iniciar o Leilao</p>
                            <v-date-picker color="#422321" class="col-12"/>
                        </v-flex>

                        <v-flex xs12 sm6 offset-sm3>
                            <p>Data para fechar o Leilao</p>
                            <v-date-picker color="#422321" class="col-12"/>
                        </v-flex>
                    </v-layout>
                    <dadosLeiloeiro/>


                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import dadosLeiloeiro from "./getAuctioneerData"
export default {
    components:{
    dadosLeiloeiro,
  }
}
</script>