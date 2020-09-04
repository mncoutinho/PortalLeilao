<template>
  <v-app>
      <v-card flat width="100%">
        <v-row  xs12 sm6 offset-sm3>
            <v-flex class="mt-10">
                <h1 class="brown--text text-center">Bem-vindo leiloeiro</h1>
                <p class="text-center">
                Cadastrar seu leilão ficou ainda mais fácil, basta apenas preencher o formulário
                e em breve estará no ar.
                </p>
                    <v-form class="mx-0">
                        <v-col 
                        class="mx-auto mt-8" 
                        cols="6">
                            <!--nome do leilão-->
                            <v-text-field 
                            name="title" 
                            label="Nome do leilao*"/>
                            <!--carregar foto-->
                            <v-file-input
                                :reverse="true"
                                prepend-icon="mdi-camera"
                                multiple
                                show-size
                                counter
                                label="Banner do leilao*"
                                @change="onUpload"
                            />
                            <!--imagem-->
                            <v-row justify="center">
                                <v-img
                                    max-width="600px"
                                    heigth="400px"
                                    />
                            </v-row>  
                            <!--imagem- mostrar-->
                            <v-text-field 
                            class="col-md 2"
                            label="Imagens"
                            disabled />
                            <!--local-->
                            <v-text-field 
                            name="title" 
                            label="Local do leilao*" />
                            <!--descriçao-->
                            <v-textarea 
                            name="title" 
                            label="Descricao do Leilao*"/>
                            <!--data-->
                            <v-flex row>
                                <v-col cols="6">
                                    <h4 class="brown--text">Data de abertura</h4>
                                    <v-date-picker color="#422321" class="col-12" />
                                </v-col>
                                <v-col cols="6">
                                    <h4 class="brown--text">Data de fechamento</h4>
                                    <v-date-picker color="#422321" class="col-12"/>
                                </v-col>
                            </v-flex>
                            <!--botão para comfirmar-->
                            <v-btn
                                class="col-12"
                                color="success"
                                v-on:click="addLeilao(leilao,leiloeiro,termos);"
                            >Confirmar</v-btn>
                            {{leilao}}
                        </v-col>
                    </v-form>
            </v-flex>
        </v-row>
      </v-card>
  </v-app>
</template>

<script>
export default {
    data:()=>{
        return{
        }
    }
}
</script>