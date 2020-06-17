<template >      
    <v-app id="inspire">
       
      
        
        
        
    
        <div
        style="background-color:#EFEAEA"
        class="mt-4">
            <v-row >
                <v-col align="center" class="mt-4">
                    <p class="display-1">Fique por dentro das ultimas novidades.</p>
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
<style>
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
import firebase from 'firebase';
export default {
    data() {
        return{
            pesquisar:'',
            
            
            
            anuItem:[
                {i:'fas fa-address-card',texto:'Pague no cartao',texto2:'de credito ou debito',parcela:'12X  sem juros'},
                {i:'fab fa-cc-paypal',texto:'Pague no PayPal',texto2:'de forma rapida e facil',parcela:'3X sem juros'},
                {i:'fas fa-money-bill',texto:'Pague no Boleto',texto2:'de forma rapida e facil',parcela:''},
                ],
            }
        },
        mounted(){
            //this.getHomeItems();
        },
        methods:{
            async getHomeItems(){
                await firebase.firestore()
                .collection('item')
                .where("active","==", true)
                .get()
                .then(docs => {
                    this.lives = [];
                    docs.forEach(doc => {
                        this.lives.push(doc.data());
                    })
                    console.log(this.lives)
                })
                .catch(err => console.log(err))
            },
            getHomeOpenSale(){

            },
            getHomeLiveSale(){

            }
        }
    }    
</script>
<!-- Vue Component -->