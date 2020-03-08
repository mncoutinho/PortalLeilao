<template >
    <div id= "app">
        <div>
            <!-- BANNER -->
            <v-app id="inspire">
                <v-carousel
                cycle
                height="350"
                hide-delimiter-background
                show-arrows-on-hover
                >
                <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                >
                    <v-sheet
                    :color="colors[i]"
                    height="100%"
                    >
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
                        color="indigo lighten-1"
                        
                        
                    >
                   
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
                    
                        </v-bottom-navigation >

                    <!-- BOX-->
                    <v-card class="d-inline-block ">
                        <v-container>
                            <v-col>
                                <v-img height="200" width="200" src="#"></v-img>
                            </v-col>
                            
                            <v-col
                                cols="auto"
                                class="text-center pl-0"
                            ></v-col>
                        </v-container>
                    </v-card>
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



  