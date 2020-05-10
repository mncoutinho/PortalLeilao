<template>
        <v-footer
            dark
            padless
           
        >
            <v-card
                class="flex"
                flat
                tile
            >
                <v-card-title  style="background:#422321">
                <strong class="subheading">TEXTO</strong>
        
                <v-spacer/>
        
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    dark
                    icon
            >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
                </v-card-title>
        
                <v-card-text class="py-2 white--text text-center">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    
</template>

<script>
export default {
    data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
    
  }),    
}
</script>