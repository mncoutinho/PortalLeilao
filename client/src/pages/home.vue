<template >      
    <v-app id="inspire">
        <!--IMAGEM-->
        <v-parallax
        dark
        src="https://i.imgur.com/V5FBLN3.jpg"
        height="600">
        <!--BOTOES-->
            <v-row
                align="center"
                justify="center"
            >
            <v-col cols="12" md="6" class="text-center">
                <h1 style=" color:white" class=" display-2 font-weight-thin mb-4 ">Portal Leilao</h1>
                <v-text-field
                    v-model="Pesquisar"
                    append-icon="mdi-magnify"
                    label="Pesquisar"
                    solo
                    color="white"
                ></v-text-field>

                <v-col class="text-center" cols="12" >
                    <h4 style=" color:white" class=" display-1">Venha participar do nosso site</h4>
                </v-col>
          </v-col>
                
            </v-row>
        </v-parallax>
        <!--ANUNCIO-->
                <v-card
                width="90%"
                height="300"
                class="mx-auto"
                :elevation="0">
                    <v-col class="mt-9" > 
                        <v-row justify="space-around">
                            <!--ANUNCIO 1-->
                            <v-card
                            width="550"
                            height="200">
                                <h1>ANUNCIO APP</h1>
                            </v-card>
                            <!--ANUNCIO 2-->
                            <v-card
                            width="550"
                            height="200">
                                <h1>ANUNCIO APP</h1>
                            </v-card>
                        </v-row>
                    </v-col>    
                </v-card>
                    <!-- BOX-->
                    <v-flex >
                        <v-card 
                        :elevation="0" 
                        max-width="1600"
                        class="mx-auto ">
                            <v-row justify="center">
                                    <v-col 
                                    cols="12"
                                    md="6"
                                    align="center"
                                    class="mt-12"
                                    >
                                        <v-text 
                                        class="display-1"
                                        style="color:#A64E4B;">
                                            Veja quem está ao vivo, agora
                                            <v-divider class="mx-8" color="white"/>
                                        </v-text>
                                    </v-col>
                            </v-row >
                            <!--TRANSMISSOES-->
                                    <v-row
                                    no-gutters  
                                    justify="space-around" 
                                    class="mt-12"
                                    nowrap>
                                            <v-card
                                            hover
                                            tile
                                            class="mt-6 mb-6"
                                            width="23%"
                                            min-width="300"
                                            v-for="stream in stream"
                                            :key="stream">
                                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                        allowfullscreen>
                                                </iframe>
                                                        <v-list-item-content class="ml-5">
                                                        <div>     
                                                            <span style="color:green">Ao Vivo</span>
                                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">{{stream.nome}}</v-list-item-title>
                                                            <v-list-item-subtitle style="color:#1B120C">{{stream.sub}}</v-list-item-subtitle>
                                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                                        </div>            
                                                            <v-row class="mr-5" justify="center">
                                                                <v-btn outlined rounded class="pr-12 pl-12" color="green">PARTICIPAR</v-btn>
                                                            </v-row>
                                                        </v-list-item-content>   
                                            </v-card> 
                                    </v-row>
                            <v-row align="center" justify="space-around" class="mt-12">
                            <!--Botao para ver mais-->
                                <!-- <v-btn
                                width="20%"
                                height="420"
                                color="#EDE7E2"
                                >   
                                    <v-col>
                                    <h1 class="display-4" 
                                        style="color:#342B25" >
                                        +
                                        </h1>
                                    <h6 style="color:#342B25"
                                    >
                                    Para ver mais...
                                    </h6>
                                    </v-col>  
                                </v-btn> -->
                            </v-row>
                        </v-card>
                    </v-flex>

            <!--ANUNCIO-->
                <v-row
                class="hidden-sm-only hidden-xs-only">
                    <div
                    style="width:100%">
                        <v-img
                        style="opacity: 0.8"
                        src="" 
                        >
                            <v-col 
                            cols="12"
                            sm="8"
                            md="8"
                            class="mx-auto"
                            align="center"
                            >
                               <p style="color:#422321" class="display-2 font-weight">Não sabe como começar ?</p>
                               <p style="color:#422321" class="headline">Veja as dicas dos nossos especialistas</p>
                               <p class="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis elementum tellus sit amet mattis. Vestibulum vel mi sit amet arcu bibendum gravida. Ut nec tortor et nulla tristique scelerisque. Cras quis ornare libero. Donec efficitur id odio quis efficitur. Suspendisse commodo diam sit amet pulvinar pretium. Donec consectetur eros sed quam tristique, non scelerisque ante posuere. Integer sed semper risus. Nullam euismod aliquet odio, ac dignissim nunc maximus nec. Proin a ex nec ex sodales bibendum sit amet eget ex. Curabitur ultrices urna sed massa tempus blandit. Proin dictum porta diam in convallis. Nulla ultrices felis ante, in dapibus leo convallis in.Vestibulum quis sem eu augue feugiat rhoncus. Curabitur ornare nisi elit, sed sagittis ante aliquet a. Nulla cursus eget tortor quis congue. Cras lorem enim, malesuada sed venenatis non, condimentum quis massa. In ultrices scelerisque feugiat. Aenean volutpat porttitor nibh, quis varius augue pretium id. Nunc malesuada arcu vitae velit semper dignissim. Sed placerat erat sed cursus feugiat. Mauris a pellentesque elit, in vestibulum urna. Praesent non aliquet nibh, et lacinia leo. Duis at lectus vel quam sagittis egestas. Pellentesque quis placerat ex. Cras convallis mollis pulvinar. Sed sit amet ligula turpis. Morbi ullamcorper odio vitae velit.</p>
                                <v-btn
                                    rounded
                                    color="#a64e4b"
                                    x-large
                                    class="white--text">
                                    Ler Mais
                                </v-btn>
                            </v-col>
                        </v-img>    
                    </div>
                </v-row>
            <!--LIVES FUTURAS-->
                <v-flex class="mt-auto">
                    <v-card 
                    :elevation="0"
                    max-width="1550" 
                    class="mx-auto" >    
                        <v-row justify="center">
                            <v-col 
                            cols="12"
                            md="6"
                            align="center"
                            class="mt-12"
                            >
                                <v-text class="mt-8 display-1" style="color:#A64E4B">
                                    Veja os proximos leiloes
                                    <v-divider class="mx-8" color="white"/>
                                </v-text>
                            </v-col>
                        </v-row>
                        <!--CARDS-->
                            <v-row align="center" justify="space-around" class="mt-12">       
                                <v-card
                                hover
                                style="cursor:pointer"
                                class="mt-6 mb-6"
                                width="300" 
                                v-for="Item in live"
                                :key="Item">
                                    <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>    
                                    </iframe>
                                    <v-list-item-content class="ml-5">
                                        <div> 
                                        <span style="color:Orange">Em Breve</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">{{Item.nome}}</v-list-item-title>
                                        <v-list-item-subtitle style="color:#1B120C">{{Item.informacoes}}</v-list-item-subtitle>
                                            <v-divider class="mx-5" color="#EDE7E2"/>
                                        </div>    
                                        <v-row class="mr-5" justify="center">
                                            <v-btn outlined rounded class="pr-5 pl-5" style="color:Orange">Em breve</v-btn>
                                        </v-row>  
                                    </v-list-item-content>   
                                </v-card>
                                <!--BOTAO-->
                                <!-- <v-btn
                                width="20%"
                                height="420"
                                color="#EDE7E2"
                                >   
                                    <v-col>
                                        <h1 class="display-4" style="color:#342B25">+</h1>
                                        <h6 style="color:#342B25">Para ver mais...</h6>
                                    </v-col>  
                                </v-btn> -->
                            </v-row>
                    </v-card>
                </v-flex>
                <div
                style="background-color:#EFEAEA"
                class="mt-4"
                >
                    <v-row >
                        <v-col align="center" class="mt-4">
                            <v-text class="display-1">Fique por dentro das ultimas novidades.</v-text>
                            <v-col cols="10" sm="5" class="mt-6">
                                <v-row>   
                                    <v-text-field
                                    solo
                                    label="Email">
                                    </v-text-field>
                                </v-row>
                                <v-btn
                                class="ml-6 white--text"
                                color="#a64e4b"
                                large
                                rounded
                                >
                                    Enviar    
                                </v-btn>
                                
                            </v-col>    
                           
                        </v-col>
                    </v-row>
                </div>
                <!--PROPAGANDA-->
                    <v-card
                    :elevation="0"
                    color="#AC9594"
                    >
                        <v-col 
                        cols="8"
                        md="12"
                        align="center"
                        >
                            <v-row 
                            justify="center"
                            >
                                <div
                                colored-border
                                align="center"
                                class="pagamentos mb-8 mt-12"
                                v-for="items in anuItem"
                                :key="items.title"
                                >
                                <!-- icone -->
                                    <v-icon 
                                    size="70"
                                    class="mb-5"
                                    color="#F5F3F2"
                                    >
                                        {{items.i}}
                                    </v-icon>
                                <!-- titulo -->
                                    <v-list-item-title 
                                    class="title" 
                                    style="color:#F5F3F2"
                                    >
                                        {{items.texto}}
                                    </v-list-item-title>
                                <!-- subtitulo -->
                                    <v-list-item-subtitle 
                                    style="color:#F5F3F2" 
                                    class="subtitle-1">
                                        {{items.texto2}}
                                    </v-list-item-subtitle>
                                <!-- parcelas -->
                                    <v-card-text 
                                    class="overline" 
                                    style="color:#F5F3F2"
                                    >
                                        {{items.parcela}}
                                    </v-card-text>
                                </div>
                            </v-row>     
                        </v-col>
                    </v-card>
                          
    </v-app> 
</template>

<!--STYLE-->
<style scoped>
    .pagamentos{
        border-right: 2px solid #F5F3F2; 
        margin-top:2%;
        padding-right: 100px;
        padding-left: 100px;
         
    }
    .pagamentos:last-child{
        border-right: none; 
    }
    @media (max-width: 800px){
        .pagamentos{
            border-right: none;
            margin-left: 50%;
            border-bottom: 2px solid #F5F3F2;  
        }
        .pagamentos:last-child{
            border-bottom: none;
        }
    }
</style>

<!--scripts-->
<script>
export default {
    data() {
        return{
            stream:[
                {nome:'Nome da Transmissao 1',sub:'texto 1'},
                {nome:'Nome da Transmissao 2',sub:'texto 2'},
                {nome:'Nome da Transmissao 3',sub:'texto 3'},
                {nome:'Nome da Transmissao 4',sub:'texto 4'},
                {nome:'Nome da Transmissao 1',sub:'texto 5'},
                {nome:'Nome da Transmissao 2',sub:'texto 6'},
                {nome:'Nome da Transmissao 3',sub:'texto 7'},
                {nome:'Nome da Transmissao 4',sub:'texto 8'},
            ],
            
            live:[
                {nome:'Nome da Transmissao', informacoes:'Texto 1'},
                {nome:'Nome da Transmissao', informacoes:'Texto 2'},
                {nome:'Nome da Transmissao', informacoes:'Texto 3'},
                {nome:'Nome da Transmissao', informacoes:'Texto 4'},
            ],
            anuItem:[
                {i:'fas fa-address-card',texto:'Pague no cartao',texto2:'de credito ou debito',parcela:'12X  sem juros'},
                {i:'fab fa-cc-paypal',texto:'Pague no PayPal',texto2:'de forma rapida e facil',parcela:'3X sem juros'},
                {i:'fas fa-money-bill',texto:'Pague no Boleto',texto2:'de forma rapida e facil',parcela:''},
                ],
            }
        }
    }    
</script>
<!-- Vue Component -->




  