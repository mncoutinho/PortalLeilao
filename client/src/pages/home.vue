<template >      
    <v-app id="inspire">
        
        <!--IMAGEM-->
        <v-parallax
        dark
        src="https://i.imgur.com/V5FBLN3.jpg"
        height="600">
        <!--BOTOES-->
            <div
            width="100%"
            height="80"
            :elevation="20"
            class="mt-6"
            >
                <v-row
                align="center"
                justify="space-around">
                    <v-btn
                    width="8%"
                    height="80"
                    text
                    color="#F7F4F4"
                    class="ml-12"
                    >
                        <v-col class="text-center">
                            <v-icon size="30">fas fa-address-card</v-icon>    
                            <h6 class="subtitle-1 mt-2">PRODUTO</h6>
                        </v-col>
                    </v-btn>

                    <v-divider
                        inset
                        vertical
                    />

                    <v-btn
                    width="8%"
                    height="80"
                    text
                    color="#F7F4F4"
                    >
                        <v-col class="text-center">
                            <v-icon size="30">fas fa-address-card</v-icon>    
                            <h6 class="subtitle-1 mt-2">PRODUTO</h6>
                        </v-col>
                    </v-btn>

                    <v-divider
                        inset
                        vertical
                    />

                    <v-btn
                    width="8%"
                    height="80"
                    text
                    color="#F7F4F4"
                    >
                        <v-col class="text-center">
                            <v-icon size="30" >fas fa-address-card</v-icon>    
                            <h6 class="subtitle-1 mt-2">PRODUTO</h6>
                        </v-col>
                    </v-btn>

                    <v-divider
                        inset
                        vertical
                    />

                    <v-btn
                    width="8%"
                    height="80"
                    text
                    color="#F7F4F4"
                    >
                        <v-col class="text-center">
                            <v-icon size="30">fas fa-address-card</v-icon>    
                            <h6 class="subtitle-1 mt-2">PRODUTO</h6>
                        </v-col>
                    </v-btn>

                    <v-divider
                        inset
                        vertical
                    />

                    <v-btn
                    width="8%"
                    height="80"
                    text
                    color="#F7F4F4"
                    class="mr-12"
                    >
                        <v-col class="text-center">
                            <v-icon size="30">fas fa-address-card</v-icon>    
                            <h6 class="subtitle-1 mt-2">PRODUTO</h6>
                        </v-col>
                    </v-btn>

                </v-row>
            </div>

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
                            <div
                            style="width:20%; height:400;background-color:#EFEAEA">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                </iframe>
                                    
                                        <v-list-item-content class="ml-5">
                                        <div>     
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                        </div>            
                                            <v-row class="mr-5" justify="center">
                                                <v-btn outlined class="pr-12 pl-12" color="green">PARTICIPAR</v-btn>
                                            </v-row>
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EFEAEA">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <div>     
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                        </div>            
                                            <v-row class="mr-5" justify="center">
                                                <v-btn outlined class="pr-12 pl-12" color="green">PARTICIPAR</v-btn>
                                            </v-row> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EFEAEA">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <div>     
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                        </div>            
                                            <v-row class="mr-5" justify="center">
                                                <v-btn outlined class="pr-12 pl-12" color="green">PARTICIPAR</v-btn>
                                            </v-row> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EFEAEA">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <div>     
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                        </div>            
                                            <v-row class="mr-5" justify="center">
                                                <v-btn outlined class="pr-12 pl-12" color="green">PARTICIPAR</v-btn>
                                            </v-row> 
                                        </v-list-item-content>   
                            </div>
                        </v-row>
                        <v-row align="center" justify="space-around" class="mt-12">       
                            <div
                            style="width:20%; height:400;background-color:#EFEAEA">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <div>     
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                        </div>            
                                            <v-row class="mr-5" justify="center">
                                                <v-btn outlined class="pr-12 pl-12" color="green">PARTICIPAR</v-btn>
                                            </v-row> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EFEAEA">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <div>     
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                        </div>            
                                            <v-row class="mr-5" justify="center">
                                                <v-btn outlined class="pr-12 pl-12" color="green">PARTICIPAR</v-btn>
                                            </v-row> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EFEAEA">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <div>     
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                        </div>            
                                            <v-row class="mr-5" justify="center">
                                                <v-btn outlined class="pr-12 pl-12" color="green">PARTICIPAR</v-btn>
                                            </v-row> 
                                        </v-list-item-content>   
                            </div>
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
                <v-card :elevation="0"  height="550">    
                    <v-row justify="center">
                        <v-text class="mt-8 display-1" style="color:#A64E4B">Veja os proximos leiloes
                            <v-divider class="mx-8" color="white"/>
                        </v-text>
                    </v-row>

                        <v-row align="center" justify="space-around" class="mt-12">       
                            <div
                            style="width:20%; height:400;background-color:#EFEAEA">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5">
                                            <div> 
                                                <span style="color:Orange">Em Breve</span>
                                                <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                                <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                    <v-divider class="mx-5" color="#EDE7E2"/>
                                            </div>    
                                            <v-row class="mr-5" justify="center">
                                                <v-btn outlined class="pr-5 pl-5" style="color:Orange">Em breve</v-btn>
                                            </v-row>  
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EFEAEA">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5">
                                            <div> 
                                                <span style="color:Orange">Em Breve</span>
                                                <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                                <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                    <v-divider class="mx-5" color="#EDE7E2"/>
                                            </div>    
                                            <v-row class="mr-5" justify="center">
                                                <v-btn outlined class="pr-5 pl-5" style="color:Orange">Em breve</v-btn>
                                            </v-row>
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EFEAEA">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5">
                                            <div> 
                                                <span style="color:Orange">Em Breve</span>
                                                <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                                <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                    <v-divider class="mx-5" color="#EDE7E2"/>
                                            </div>    
                                            <v-row class="mr-5" justify="center">
                                                <v-btn outlined class="pr-5 pl-5" style="color:Orange">Em breve</v-btn>
                                            </v-row> 
                                        </v-list-item-content>   
                            </div>
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
                            style="border-right: 2px solid #F5F3F2; padding-right:100px;margin-top:2%"
                            colored-border
                            >
                                <v-icon size="60" class="mt-2 mb-5" color="#F5F3F2">fas fa-address-card</v-icon>
                                <v-list-item-title class="title" style="color:#F5F3F2">Pague no Cartão</v-list-item-title>
                                <v-list-item-subtitle style="color:#F5F3F2" class="subtitle-1">de forma rapida e facil</v-list-item-subtitle>
                                <v-card-text class="overline" style="color:#F5F3F2">em até 12x sem juros</v-card-text>
                            </div>

                            <div
                            style="border-right: 2px solid #F5F3F2; padding-left:100px; padding-right:100px;margin-top:2%"
                            height="200"
                            align="center" 
                            colored-border
                            >
                                <v-icon size="60" class="mt-2 mb-5" color="#F5F3F2">fas fa-address-card</v-icon>
                                <v-list-item-title class="title" style="color:#F5F3F2">Pague no Boleto</v-list-item-title>
                                <v-list-item-subtitle style="color:#F5F3F2" class="subtitle-1">de forma rapida e facil</v-list-item-subtitle>
                                <v-card-text class="overline" style="color:#F5F3F2">em até 12x sem juros</v-card-text>
                            </div>

                            <div
                            height="200"
                            align="center"
                            colored-border
                            style="padding-left:100px;margin-top:2%"
                            >
                                <v-icon size="60" class="mt-2 mb-5" color="#F5F3F2">fas fa-address-card</v-icon>
                                <v-list-item-title class="title" style="color:#F5F3F2">Pague no PayPal</v-list-item-title>
                                <v-list-item-subtitle style="color:#F5F3F2" class="subtitle-1">de forma rapida e facil</v-list-item-subtitle>
                                <v-card-text class="overline" style="color:#F5F3F2">em até 12x sem juros</v-card-text>
                            </div>
                        </v-row>
                        
                    </v-card>
                
    </v-app>   
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://i.imgur.com/fbi8Blo.jpg',
          },
          {
            src: 'https://i.imgur.com/rcZuuj0.png',
          },
          {
            src: 'https://i.imgur.com/Bfw9PJy.jpg',
          },
                   
        ],
      }
    },
  }
</script>



  