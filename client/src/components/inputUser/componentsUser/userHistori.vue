<template>
  <v-app>
      <v-card
            width="100%"
            height="500"
            elevation="0"
            >
              <v-row justify="center">
                <h1>Historico</h1>
              </v-row>
              <!--card com as informaçoes-->
              <v-col>
                <v-card
                class="mb-6"
                width="100%"
                v-for="historico in hist"
                :key="historico.length"
                >
                  <v-row
                 >
                    <!--Imagem do Produto-->
                    <v-col sm="2">
                      <v-img
                      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      width="250"
                      height="200"
                      class="ml-3"
                      >
                      </v-img>
                    </v-col>
                    <!--Nome do produto-->
                      <v-row align="center" class="ml-6">
                        <v-col sm="6">
                          <strong class="title">{{historico.nome}}</strong>
                        </v-col>
                      </v-row>
                      <v-spacer/>
                      <v-row align="center" class="ml-6">
                        <!--Codigo do produto-->
                        <v-col sm="4">
                          <strong class="headline">{{historico.cod}}</strong>
                        </v-col>
                        <!--Preço-->
                        <v-col sm="4">
                          <strong class="headline">{{historico.preco}}</strong>
                        </v-col>
                      <!--Estado-->
                        <v-btn
                        class="title mr-2"
                        color="error"
                        disabled>
                        Cancelado
                        </v-btn>
                      </v-row>
                  </v-row> 
                </v-card>
              </v-col>
            </v-card>
  </v-app>
</template>

<script>
export default {
    data(){
    return{
      hist:[
        {nome:'Nome do produto',cod:'242424',preco:'24,99'},
        {nome:'Nome do produto',cod:'242424',preco:'24,99'},
        {nome:'Nome do produto',cod:'242424',preco:'24,99'},
        {nome:'Nome do produto',cod:'242424',preco:'24,99'},
      ],
    }
  }
}
</script>
