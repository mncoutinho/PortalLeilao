<template >
    <div id= "app">
        <div>
            <!-- BANNER -->
            <v-app id="inspire">
                <v-carousel
                cycle
                height="350"
                hide-delimiter-background
                show-arrows-on-hover>
                    <v-carousel-item
                        v-for="(slide, i) in slides"
                        :key="i">
                        <v-sheet
                        :color="colors[i]"
                        height="100%">
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                            >
                                <div class="display-3">{{ slide }} IMAGEN</div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                <!--ICONES-->
                <v-app id="inspire" >
                    <v-bottom-navigation
                        v-model="bottomNav"
                        :value="activeBtn"
                        color="indigo lighten-1">
                        <v-btn value="Carros" >
                            <span>Carros</span>
                            <v-icon>mdi-car</v-icon>
                        </v-btn>
                        <v-btn value="Imoveis">
                                <span>Imoveis</span>
                                <v-icon>mdi-home</v-icon>
                        </v-btn>
                        <v-btn value="Antiguidades">
                            <span>Antiguidades</span>
                            <v-icon>mdi-crown-outline</v-icon>
                        </v-btn>
                        <v-btn value="Eletronicos">
                            <span>Eletronicos</span>
                            <v-icon>mdi-desktop-tower-monitor</v-icon>
                        </v-btn>
                        <v-btn  value="Embarcação">
                            <span >Embarcação</span>
                            <v-icon>mdi-ship-wheel</v-icon>
                        </v-btn >
                    </v-bottom-navigation>
                    <!-- BOX-->
                    <v-row class="mt-12 ">
                        <v-col 
                        v-for="n in 3"
                        :key="n"
                        >
                            <v-row 
                            justify="center"
                            align="center"
                            >
                                <v-card
                                height="230"
                                width="350"
                                :elevetion= "n-5"
                                color= "red"
                                
                                >
                                <span class=" display-3 ">
                                        LIVE
                                    </span>
                                </v-card>
                            </v-row>
                        </v-col>
                    </v-row>
    <!--ANUNCIO-->
                <v-row>
                    <v-col justify="center" align="center">
                        <v-card
                            width=900
                            height=150 
                            color="blue"
                            :elevetion= "n-5"
                        >


                        </v-card>
                    </v-col>
                </v-row>    
<!--PRODUTO-->
                <v-row class="mt-12">
                        <v-col 
                        v-for="n in 4"
                        :key="n"
                        justify="center"
                        align="center"
                        >
                            <v-card
                            height="200"
                            width="300"
                            :elevetion= "n-5"
                            color= "red">

                            </v-card>
                        </v-col>
                    </v-row>


                </v-app>   
            </v-app>
        </div>
    </div>

</template>
<script id="CARROCEL">
export default {
    data () {
    return {
      colors: [
        'black',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>



  