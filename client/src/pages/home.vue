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

                <v-col class="text-center" cols="12">
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
                    <v-card :elevation="0"  height="1100">
                        <v-row justify="center">
                                <v-text class="mt-10 display-1" style="color:#A64E4B;" >Veja quem está ao vivo, agora
                                    <v-divider class="mx-8" color="white"/>
                                </v-text>
                                
                        </v-row >
                        <!--TRANSMISSOES-->
                        <v-row align="center" justify="space-around" class="mt-12">       
                            <v-card
                            style="background-color:#EFEAEA"
                            width="20%"
                            heigh="400"
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
                                                <v-btn outlined class="pr-12 pl-12" color="green">PARTICIPAR</v-btn>
                                            </v-row>
                                        </v-list-item-content>   
                            </v-card>
                        </v-row>
                        <v-row align="center" justify="space-around" class="mt-12">       
                            <v-card
                            style="background-color:#EFEAEA"
                            width="20%"
                            heigh="400"
                            v-for="stream2 in stream2"
                            :key="stream2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <div>     
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">{{stream2.nome}}</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">{{stream2.sub}}</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                        </div>            
                                            <v-row class="mr-5" justify="center">
                                                <v-btn outlined class="pr-12 pl-12" color="green">PARTICIPAR</v-btn>
                                            </v-row> 
                                        </v-list-item-content>   
                            </v-card>
                            
                            <v-btn
                            width="20%"
                            height="400"
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
                            </v-btn>


                        </v-row>
                    </v-card>
                    <!--ANUNCIO-->
                <v-row>
                    <!--TEXTO-->
                    <v-card
                    width="50%"
                    height="400"
                    :elevation="0"
                    color="#AC9594"
                    >
                        <v-col class="mt-12 ml-12" sm="10" >
                            <v-card-title class="headline" style="color:#120908">Não Sabe como "leiloar" ?</v-card-title>
                                
                                <v-card-subtitle class="subtitle-1" style="color:#1E1514">Saiba Agora...</v-card-subtitle>
                                <v-card-text class="body-2" style="color:#E5E5E5">Lorem ipsum faucibus dictumst sagittis ligula habitasse curabitur et, ad dictum amet aliquam rutrum purus turpis, dictum nec quis proin curae purus ligula. feugiat quisque faucibus elit ornare quisque lobortis at, potenti nulla in rhoncus varius vulputate bibendum, elit eget pellentesque at taciti primis. erat eleifend suscipit auctor netus sodales tempor nullam ultricies elit, enim id praesent cras blandit inceptos curabitur praesent, nec pulvinar sed consequat ac felis facilisis imperdiet. amet ligula quisque vehicula integer proin ornare pretium, magna rutrum proin arcu lobortis morbi, est primis lacus morbi varius fermentum. </v-card-text>
                            
                        </v-col>
                    </v-card>
                    <!--IMAGEM-->
                    <v-card
                    width="50%"
                    height="400"
                    :elevation="0"
                    >
                        <v-img
                        style="opacity:0.7; background-color:blue" 
                        src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg"
                        ></v-img>
                    </v-card>
                </v-row>
            <!--LIVES FUTURAS-->
                <!--TITULO-->
                <v-card :elevation="0"  height="600">    
                    <v-row justify="center">
                        <v-text class="mt-8 display-1" style="color:#A64E4B">Veja os proximos leiloes
                            <v-divider class="mx-8" color="white"/>
                        </v-text>
                    </v-row>
                    <!--CARDS-->
                    <v-row align="center" justify="space-around" class="mt-12">       
                            <v-card
                            style="background-color:#EFEAEA"
                            width="20%" 
                            height="420"
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
                                                <v-btn outlined class="pr-5 pl-5" style="color:Orange">Em breve</v-btn>
                                            </v-row>  
                                        </v-list-item-content>   
                            </v-card>
                            
                            <v-btn
                            width="20%"
                            height="400"
                            color="#EDE7E2"
                            >   
                                <v-col>
                                  <h1 class="display-4" style="color:#342B25">+</h1>
                                  <h6 style="color:#342B25">Para ver mais...</h6>
                                </v-col>  
                            </v-btn>


                        </v-row>
                </v-card>

                <!--PROPAGANDA/A alma do negocio-->
                    <v-card
                    width="100%"
                    height="250"
                    :elevation="0"
                    class="mt-12"
                    color="#AC9594">
                        
                        <v-row justify="center">
                            <div
                            height="200"
                            align="center"
                            class="pagamentos"
                            colored-border
                            v-for="items in anuItem"
                            :key="items.title"
                            >
                                <v-icon size="60" class="mt-2 mb-5" color="#F5F3F2">{{items.i}}</v-icon>
                                <v-list-item-title class="title" style="color:#F5F3F2">{{items.texto}}</v-list-item-title>
                                <v-list-item-subtitle style="color:#F5F3F2" class="subtitle-1">{{items.texto2}}</v-list-item-subtitle>
                                <v-card-text class="overline" style="color:#F5F3F2">{{items.parcela}}</v-card-text>
                            </div>   
                        </v-row>
                    </v-card>  
    </v-app> 
</template>

<!--STYLE-->
<style scoped>
    .pagamentos{
        border-right: 2px solid #F5F3F2; 
        padding-right:100px;
        margin-top:2%;
        margin-left:5%
    }
    .pagamentos:first-child{
         margin-left:none
    }
    .pagamentos:last-child{
        border-right: none;
        
    }
</style>
<!--scripts-->
<script>
export default {
    data() {
        return{
            stream:[
                {nome:'Nome da Transmissoes',sub:'texto 1'},
                {nome:'Nome da T',sub:'texto 2'},
                {nome:'Nome da Transmissoes',sub:'texto 3'},
                {nome:'Nome da T',sub:'texto 4'},
            ],
            stream2:[
                {nome:'Nome da Transmissoes',sub:'texto 1'},
                {nome:'Nome da T',sub:'texto 2'},
                {nome:'Nome da Transmissoes',sub:'texto 3'},
            ],
            live:[
                {nome:'Nome Dá Prox Transmissao', informacoes:'Texto 1'},
                {nome:'Nome Dá Prox Transmissao', informacoes:'Texto 2'},
                {nome:'Nome Dá Prox Transmissao', informacoes:'Texto 3'},
            ],
            anuItem:[
                {i:'fas fa-address-card',texto:'Pague no cartao',texto2:'de credito ou debito',parcela:'12 vzs sem juros'},
                {i:'fab fa-cc-paypal',texto:'Pague no PayPal',texto2:'de forma rapida e facil',parcela:'12 vzs sem juros'},
                {i:'fas fa-money-bill',texto:'Pague no Boleto',texto2:'de forma rapida e facil',parcela:''},
                ],
            }
        }
    }    
</script>



  