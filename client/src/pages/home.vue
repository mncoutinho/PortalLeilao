<template >

            <!-- BANNER -->
            <v-app class="mt-1" id="inspire">
               <v-carousel
                cycle
                height="550"
                width="100%"
                hide-delimiter-background
                show-arrows-on-hover>
                    <v-carousel-item
                     v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    
                     reverse-transition="fade-transition"
                     transition="fade-transition"
                     
                     
                 ></v-carousel-item>
                </v-carousel>
               
   
                <!--ICONES-->
                <v-app id="inspire" >
                  <!--  <v-row class="mt-8 mx-auto">
                        <v-btn style="text-decoration:none;" to="./Produtos" class="ma-4  mr-12" outlined x-large fab color="indigo" width="150px" height="150px">
                            <v-col align="center">
                                <v-icon size="50px" class="mt-4">mdi-car</v-icon>                            
                                <p class="mt-2 font-weight-regular">Carros</p>
                            </v-col>
                        </v-btn>

                        <v-btn style="text-decoration:none;" to="./Produtos" class="ma-4  mr-12" outlined x-large fab color="red" width="150px" height="150px">
                            <v-col align="center">
                                <v-icon size="50px" class="mt-4">mdi-home</v-icon>                            
                                <p class="mt-2 font-weight-regular">Imoveis</p>
                            </v-col>
                        </v-btn>

                        <v-btn style="text-decoration:none;" to="./Produtos" class="ma-4  mr-12" outlined x-large fab color="orange" width="150px" height="150px">
                            <v-col align="center">
                                <v-icon size="50px" class="mt-4">mdi-crown-outline</v-icon>                            
                                <p class="mt-2 font-weight-regular">Antiguidades</p>
                            </v-col>
                        </v-btn>
                        
                        <v-btn style="text-decoration:none;" to="./Produtos" class="ma-4  mr-12" outlined x-large fab color="black" width="150px" height="150px">
                            <v-col align="center">
                                <v-icon size="50px" class="mt-4">mdi-desktop-tower-monitor</v-icon>                            
                                <p class="mt-2 font-weight-regular">Eletronicos</p>
                            </v-col>
                        </v-btn>

                        <v-btn style="text-decoration:none;" to="./Produtos" class="ma-4  mr-12" outlined x-large fab color="grey" width="150px" height="150px">
                            <v-col align="center">
                                <v-icon size="50px" class="mt-4">mdi-ship-wheel</v-icon>                            
                                <p class="mt-2 font-weight-regular">Embarcação</p>
                            </v-col>
                        </v-btn>
                        
                    </v-row> -->
                    <!-- BOX-->
                    <v-slide-group
                        v-model="model"
                        class="pa-5"
                        active-class="success"
                        show-arrows
                    >
                        <v-slide-item
                        v-for="n in 9"
                        :key="n"
                        v-slot:default="{ active, toggle }"
                        >
                        <v-card
                            :color="active ? undefined : 'green'"
                            class="ma-12"
                            height="230"
                            width="300"
                            @click="toggle"
                        >
                            <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                            ><iframe width="300" height="230" src="https://www.youtube.com/embed/nwIZH_VVhwI" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                                <p class="title green--text">AO VIVO</p>
                            </v-row>
                        </v-card>
                        </v-slide-item>
                    </v-slide-group>
                    <!--ANUNCIO-->
                <v-row class="mt-5">
                    <v-col justify="center" align="center">
                        <v-card
                            width=900
                            height=150 
                            color="purple darken-3"
                            :elevetion= "n-5"  
                        >
                            <span class="display-3 white--text" >ANUNCIO</span>                        
                        </v-card>
                    </v-col>
                </v-row>
            <!--LIVES FUTURAS-->
            <v-slide-group
                        v-model="model"
                        class="pa-4"
                        active-class="success"
                        show-arrows
                    >
                        <v-slide-item
                        v-for="n in 9"
                        :key="n"
                        v-slot:default="{ active, toggle }"
                        >
                        <v-card
                            class="ma-12"
                            height="230"
                            width="300"
                            @click="toggle"
                        >
                            <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                            >
                            <iframe width="300" height="230" src="https://www.youtube.com/embed/nwIZH_VVhwI" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                            <p class="title red--text">EM BREVE</p>
                            <v-scale-transition>
                                <v-icon
                                v-if="active"
                                color="white"
                                size="48"
                                v-text="'mdi-close-circle-outline'"
                                ></v-icon>
                            </v-scale-transition>
                            </v-row>
                        </v-card>
                        </v-slide-item>
                    </v-slide-group>   
            <!--PRODUTO-->
                <v-row class="mt-6 mb-12 " :elevation="12">
                        <v-col 
                        v-for="artigo in produtos"
                         v-bind:key="artigo"
                        justify="center"
                        align="center"
<<<<<<< HEAD
                         
         
=======
>>>>>>> VuetifyPedro
                        >
                         <v-card
                            :loading="loading"
                            class="mx-auto my-1"
                            max-width="350"
                        >
                         <div class="my-1 subtitle-2 white--text" style="background:#3f51b5">
                          Aberto
                            </div>

                            <v-img
                            height="200"
                            src="https://i.imgur.com/EaowRPb.jpg"
<<<<<<< HEAD
                            >
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                          
                            
                            <v-row
                                align="center"
                                class="mx-0"
                                
                            >
                                <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                float="bottom"
                                ></v-rating>

                                <div class="white--text ml-4">4.5 (Nota do vendedor)</div>
                            </v-row>
                            </v-img>
                             


                            <v-card-title>{{artigo.name}}</v-card-title>

                            <v-card-text>
                           
                                <br>
                            <div>
                                {{artigo.description}}
                            </div>
                            </v-card-text>

                            <v-divider class="mx-4"></v-divider>
                                <v-card-title class="subtitle-2 " >
                            Abertura:  <data style="margin:0px 1% 0px 1%"> {{artigo.date}}</data> 
                            </v-card-title> 

                            <v-card-title class="subtitle-2 " >
                            Lance Inicial:  <data style="margin:0px 1% 0px 1%"> {{artigo.initialbid}}</data> 
                            </v-card-title> 

                            
                        <v-card-actions>
                            <v-btn class="col-12 white--text"
                                color="light-green lighten-1 "
                                @click="Lance"
                               
                            >
=======
                            >
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>

                            <v-row
                                align="center"
                                class="mx-0" 
                            >
                                <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                float="bottom"
                                ></v-rating>

                                <div class="white--text ml-4">4.5 (Nota do vendedor)</div>
                            </v-row>
                            </v-img>
                             


                            <v-card-title>{{artigo.name}}</v-card-title>

                            <v-card-text>
                           
                                <br>
                            <div>
                                {{artigo.description}}
                            </div>
                            </v-card-text>

                            <v-divider class="mx-4"></v-divider>
                                <v-card-title class="subtitle-2 " >
                            Abertura:  <data style="margin:0px 1% 0px 1%"> {{artigo.date}}</data> 
                            </v-card-title> 

                            <v-card-title class="subtitle-2 " >
                            Lance Inicial:  <data style="margin:0px 1% 0px 1%"> {{artigo.initialbid}}</data> 
                            </v-card-title> 

                            
                        <v-card-actions>
                            <v-btn class="col-12 white--text"
                                color="light-green lighten-1 "
                                @click="Lance"
                               
                            >
>>>>>>> VuetifyPedro
                             ABERTO PARA LANCES
                            </v-btn>
                            </v-card-actions>
                        </v-card>
<<<<<<< HEAD


                         
=======
>>>>>>> VuetifyPedro
                        </v-col>
                    </v-row>
                </v-app>   
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



  