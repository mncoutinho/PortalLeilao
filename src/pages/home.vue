<template >
    <div id= "app">
        <div>
            <!-- BANNER -->
            <v-app id="inspire">
               <v-carousel
                cycle
                height="350"
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
                    <v-row class="mt-8 mx-auto">
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
                        
                    </v-row>
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
                            >
                                <p class="display-3 white--text">LIVE</p>
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
                            :color="active ? undefined : 'orange'"
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
                            <p class="display-2 white--text"> PROXIMAS</p>
                            <p class="display-2 white--text"> LIVES</p>
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
                        v-for="n in 8"
                        :key="n"
                        justify="center"
                        align="center"
                        
                        >
                            
                            <v-card
                            height="300"
                            width="310"
                            color= "indigo accent-2"
                            v-model="accordion"
                            :elevation="15"
                            >
                                <!--IMAGEN-->
                                <v-img
                                height="220px"
                                width="310px"
                                color="indigo lighten-5"
                                
                                src="#"
                                >
                                    <p class="display-2 white--text">FOTO</p>
                                </v-img>
                                <!--INFORMAÇOES-->
                                <div align="start">                               
                                   <p class="white--text text-uppercase headline mt-1" >Nome Do Produto</p>
                                   <p class="white--text lowercase font-weight-light	">informaçoes do produto</p>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-app>   
            </v-app>
        </div>
    </div>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://i.imgur.com/uCho6fi.jpg',
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




<!--<script id="CARROCEL">
export default {
    data () {
    return {
      colors: [
        {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script> -->



  