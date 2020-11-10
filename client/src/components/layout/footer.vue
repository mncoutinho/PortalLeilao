<template>
        <v-footer
        padless
        color="#422321"
        class="pt-8"
        >
            <v-row class="d-flex flex-wrap">
                    <v-card-text 
                    align="center"
                    class="pb-8 white--text ml-8"
                    >
                        <h3>Descubra</h3>
                        <!--icons-->
                        <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-2 white--text mt-2"
                        icon
                        >
                            <v-icon size="40px">{{ icon }}</v-icon>
                        </v-btn>
                    </v-card-text>
                <!--links-->
                    <v-row 
                    justify="space-around"
                    >
                        <v-col 
                        v-for="button in links"
                        :key="button.conteudo"
                        :color="color"
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