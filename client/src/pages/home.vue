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
                    color="white"
                    class="ml-12"
                    fab>
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
                    color="white"
                    fab>
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
                    color="white"
                    fab>
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
                    color="white"
                    fab>
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
                    color="white"
                    class="mr-12"
                    fab>
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
                <v-col class="text-center" cols="12">
                    <h1 style=" color:white" class=" display-2 font-weight-thin mb-4 ">Portal Leilao</h1>
                    <h4 style=" color:white" class=" display-3">Venha participar do nosso site</h4>
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
                    <v-card :elevation="0" color="#735642" height="1050">
                        <v-row justify="center">
                                <v-text class="mt-10 white--text display-1" >Veja quem está ao vivo, agora
                                    <v-divider class="mx-8" color="white"/>
                                </v-text>
                                
                        </v-row >
                        <!--TRANSMISSOES-->
                        <v-row align="center" justify="space-around" class="mt-12">       
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                        </v-row>
                        <v-row align="center" justify="space-around" class="mt-12">       
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:green">Ao Vivo</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
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
                    <!--ANUNCIO-->
                <v-row>
                    <!--TEXTO-->
                    <v-card
                    width="50%"
                    height="400"
                    :elevation="0"
                    >
                        <v-col class="mt-12 ml-12" sm="10" >
                            <v-card-title class="title" color="#735642">Não Sabe como "leiloar" ?</v-card-title>
                                
                                <v-card-subtitle class="subtitle-1  ">Saiba Agora...</v-card-subtitle>
                                <v-card-text class="body-2 lighten-5">Lorem ipsum faucibus dictumst sagittis ligula habitasse curabitur et, ad dictum amet aliquam rutrum purus turpis, dictum nec quis proin curae purus ligula. feugiat quisque faucibus elit ornare quisque lobortis at, potenti nulla in rhoncus varius vulputate bibendum, elit eget pellentesque at taciti primis. erat eleifend suscipit auctor netus sodales tempor nullam ultricies elit, enim id praesent cras blandit inceptos curabitur praesent, nec pulvinar sed consequat ac felis facilisis imperdiet. amet ligula quisque vehicula integer proin ornare pretium, magna rutrum proin arcu lobortis morbi, est primis lacus morbi varius fermentum. </v-card-text>
                            
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
                <v-card :elevation="0" color="#735642" height="1050">    
                    <v-row justify="center">
                        <v-text class="mt-8 white--text display-1" >Veja os proximos leiloes
                            <v-divider class="mx-8" color="white"/>
                        </v-text>
                    </v-row>
                   <v-row align="center" justify="space-around" class="mt-12">       
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:Orange">Em Breve</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:Orange">Em Breve</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:Orange">Em Breve</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:Orange">Em Breve</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                        </v-row>
                        <v-row align="center" justify="space-around" class="mt-12">       
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:Orange">Em Breve</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:Orange">Em Breve</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
                                        </v-list-item-content>   
                            </div>
                            <div
                            style="width:20%; height:400;background-color:#EDE7E2">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/gZjdAWgjLx8" 
                                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                           
                                        </iframe>
                                        
                                        <v-list-item-content class="ml-5"> 
                                            <span style="color:Orange">Em Breve</span>
                                            <v-list-item-title style="color:#63432D" class="bold headline mb-1">NOME DA LIVE</v-list-item-title>
                                            <v-list-item-subtitle style="color:#1B120C">informaçoes da transmissao</v-list-item-subtitle>
                                                <v-divider class="mx-5" color="#EDE7E2"/>
                                            <v-list-item-text style="color:#1B120C" class="mt-2">Capão Redondo</v-list-item-text> 
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
                    class="mt-12">
                        
                        <v-row justify="center">
                            <div
                            
                            height="200"
                            align="center"
                            style="border-right: 2px solid grey; padding-right:100px"
                            colored-border
                            >
                                <v-icon size="60" class="mt-2">fas fa-address-card</v-icon>
                                <v-card-text class="title">Pague no Cartão</v-card-text>
                                <v-card-subtitle>de forma rapida e facil</v-card-subtitle>
                                <v-card-text>em até 12x sem juros</v-card-text>
                            </div>

                            <div
                            style="border-right: 2px solid grey; padding-left:100px; padding-right:100px"
                            height="200"
                            align="center" 
                            colored-border
                            >
                                <v-icon size="60" class="mt-2">fas fa-address-card</v-icon>
                                <v-card-text class="title">Pague no Boleto</v-card-text>
                                <v-card-subtitle>de forma rapida e facil</v-card-subtitle>
                                <v-card-text>em até 12x sem juros</v-card-text>
                            </div>

                            <div
                            height="200"
                            align="center"
                            colored-border
                            style="padding-left:100px"
                            >
                                <v-icon size="60" class="mt-2">fas fa-address-card</v-icon>
                                <v-card-text class="title">Pague no PayPal</v-card-text>
                                <v-card-subtitle>de forma rapida e facil</v-card-subtitle>
                                <v-card-text>em até 12x sem juros</v-card-text>
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



  