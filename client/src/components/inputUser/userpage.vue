<template>
  <v-card
  min-height="1200"
  height="auto"
  :elevation="0"
  >
    <v-toolbar right flat width="200" color="white mt-6" >
      <!--Titulo-->
      <v-toolbar-title 
      class="headline" 
      color="#422321"
      >
        MINHA CONTA
      </v-toolbar-title>
    </v-toolbar>
      <v-tabs 
      vertical       
      color="#422321"
      class="mt-6"
      >
        <!--Conteudo-->
        <div>
          <v-tab 
          v-for="tab in tabela"
          :key="tab.length"
          class="mb-1"
          >
            <v-col cols="8">
              <v-icon>{{tab.i}}</v-icon> 
              <p class="ml-6">{{tab.dados}}</p>
            </v-col>
          </v-tab>
        </div>
        <!--ITEM 1-->
        <v-tab-item>
              <v-row justify="center" >
                  <!--INFORMAÇOES-->
                  <v-col cols="12" sm="6">
                    <v-row justify="center" class="mb-12"> 
                      <h1>Perfil</h1>
                    </v-row>
                    <!--FOTO DO USUARIO-->
                      <v-row justify="center"> 
                          <v-avatar color="#422321" size="280">
                              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                            </v-avatar>
                      </v-row>
                    <!--dados do usuario-->
                    <div class="mt-12">  
                      <v-text-field
                          value="Joao Joao Joao"
                          label="NOME COMPLETO :"
                        />
                        <v-text-field
                          value="123-***-***-01"
                          label="CPF :"
                          disabled
                        />
                        <v-text-field
                          value="Joaozinho@joao.com"
                          label="EMAIL :"
                        />
                        <v-text-field
                          value="24"
                          label="IDADE :"
                        />
                        <v-text-field
                          value="*************"
                          label="SENHA :"
                          disabled
                        />
                        <v-row justify="center">
                          <v-btn outlined color="#422321" >Alterar senha</v-btn>
                        </v-row> 
                      </div>          
                  </v-col>
              </v-row>
        </v-tab-item>
        <!--ITEM 2-->
        <v-tab-item>
          <!--TITULO-->
          <v-row justify="center" class="mb-12"> 
              <h1>Endereço</h1>
          </v-row>
          <!--conteudo-->
          <v-row justify="center">
            <v-col cols="12" sm="6">
                <v-text-field
                  value="Rue 1 "
                  label="ENDEREÇO :"
                />
                <v-text-field
                  value="entre a rua 0 e rua 2"
                  label="COMPLETEMENTO :"
                />
                 <v-text-field
                  value="12345-678 "
                  label="CEP :"
                />  
                <v-text-field
                  value="Dubai "
                  label="Bairro:"
                />
                <v-text-field
                  value="Rio de Janeiro "
                  label="Cidade:"
                /> 
                <v-text-field
                  value="Rio de Janeiro "
                  label="Estado:"
                />    
            </v-col>
          </v-row>
        </v-tab-item>
        <!--ITEM 3-->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <!--Titulo-->
              <v-row justify="center" class="mb-12"> 
                <h1>Cartoes</h1>
              </v-row>
  
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!--ITEM 4-->
        <v-tab-item>
          <!--card com todo o historico-->
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
        </v-tab-item>
        <!--ITEM 5-->
        <v-tab-item>
          <!--Titulo da pagina-->
          <v-row justify="center"> 
            <h1>Entre em contato conosco...</h1>
          </v-row>
          <v-row class="mt-12">
            <v-col
            align="center" 
            justify="space-around"
            :key="contato.length"
            v-for="contato in contact">
              <v-icon size="100" color="#5B2D2A">{{contato.icon}}</v-icon>
                <!--Titulo do iten-->
              <h3 class="mt-6" style="color:#422321">{{contato.tipo}}</h3>
              <p>{{contato.texto}} </p>
              <p class="title">{{contato.forma}}</p>            
            </v-col>
          </v-row>  
        </v-tab-item>
      </v-tabs>
  </v-card>
</template>

<script>
export default {
  data() {
    return{
      
      hist:[
        {nome:'Nome do produto',cod:'242424',preco:'24,99'},
        {nome:'Nome do produto',cod:'242424',preco:'24,99'},
        {nome:'Nome do produto',cod:'242424',preco:'24,99'},
        {nome:'Nome do produto',cod:'242424',preco:'24,99'},
        
      ],
      tabela:[
        {i:'fas fa-user',dados:'Usuario'},
        {i:'fas fa-map-marked-alt',dados:'Endereço'},
        {i:'fas fa-id-card',dados:'Cartoes'},
        {i:'fas fa-hourglass',dados:'Historico'},
        {i:'fas fa-phone',dados:'Contate-nos'}
      ],
      contact:[
        {icon:'far fa-envelope',tipo:'Email',texto:'24 horas por dia',forma:'Portal@gmail.com'},
        {icon:'fas fa-mobile-alt',tipo:'Telefone',texto:'24 horas por dia',forma:'(21)2424-2424'},
        {icon:'far fa-comment',tipo:'Chat',texto:'24 horas por dia',forma:'Chat'},
      ]
    }
  }
}
</script>