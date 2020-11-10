<template>
        <v-footer
        padless
        color="#422321"
        class="pt-8"
        >
            <v-row class="d-flex" dense>
                <v-card-text 
                align="center"
                class="pb-8 white--text"
                >
                    <!--icons-->
                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="white--text ma-4"
                    icon
                    >
                        <v-icon size="4em">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>
                <!--links-->
                <v-card-text>
                    <v-row class="d-flex justify-center">
                        <v-col cols='2' class="white--text">
                            <v-row class="d-flex justify-center mb-4">
                                <h2>Descubra</h2>
                            </v-row>
                            <v-divider color="white"/>
                        </v-col>
                    </v-row>
                </v-card-text>
                    <v-row 
                    justify="space-around"
                    class="d-flex flex-wrap"
                    >
                        <v-col 
                        v-for="button in links"
                        :key="button.conteudo"
                        :color="color"
                        cols="6"
                        sm="6"
                        md="2"
                        >
                        <v-row
                            v-for="conteudo in button"
                            :key="conteudo.item"
                            >
                                <v-btn :href="conteudo.link"
                                depressed 
                                :color="color" 
                                class="pt-0 mx-auto  white--text" 
                                text 
                                v-text="conteudo.item"/>
                            </v-row>
                        </v-col>
                    </v-row>
            </v-row>
                <!--Portal-->
                <v-card-text class="white--text text-center brown">
                    <strong>{{ano}} — Portal Leilao</strong>
                </v-card-text>        
    </v-footer> 
</template>

<script>
export default {
    data(){
        return {
            color:"#422321",
            ano: new Date().getFullYear(),
            icons: [
             'fab fa-facebook',
             'fab fa-twitter',
             'fab fa-google-plus',
            'fab fa-linkedin',
            'fab fa-instagram',
            ],
            links:[
            [{item:'Conta ',link:"/"},{item:'Login',link:"/"},{item:'Cadastre-se',link:"/"}],
            [{item:'Duvidas ',link:"/"}, {item:'Contatos',link:"/"},{item:'Fale-Conosco',link:"/"}],
            [{item:'Informaçoes ',link:"/"}, {item:'Quem Somos?',link:"/"},{item:'Como leiloar',link:"/"}],
            [{item:'Parcerias ',link:"/"}, {item:'Empresa 1',link:"/"},{item:'Empresa 2',link:"/"}]
            ]

        }
    } 
   
}
</script>