<template>
  <!--PROPAGANDA-->
    <v-card color="#AC9594">
            <v-row 
            justify="center"
            class="d-flex flex-column flex-sm-column flex-xl-row flex-md-row"
            >
                <div
                colored-border
                align="center"
                class="mb-8 mt-12 ml-12 mr-12"
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
        </v-card>
</template>

<script>
export default {
    data() {
        return{
            anuItem:[
                {i:'fas fa-address-card',texto:'Pague no cartao',texto2:'de credito ou debito',parcela:'12X  sem juros'},
                {i:'fab fa-cc-paypal',texto:'Pague no PayPal',texto2:'de forma rapida e facil',parcela:'3X sem juros'},
                {i:'fas fa-money-bill',texto:'Pague no Boleto',texto2:'de forma rapida e facil',parcela:''},
            ]
        }
    }
}
</script>