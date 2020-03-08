<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title ><router-link to="/">Home</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title><router-link to="/adicionarItem">item</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title><router-link to="/leilao">Leilão</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="indigo lighten-1"
      dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Portal Leilão</v-toolbar-title>
      <div style="width:40%; margin-left:18%;"> 
        <v-text-field 
          solo-inverted
          flat
          hide-details
          label="Buscar"/>
      </div> 
    </v-app-bar>      
    <v-spacer/>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer
      dark
      padless>
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
          <a href="#" style="text-decoration:none;"><v-icon size="40px">mdi-facebook-box</v-icon></a>
          <a href="#" style="text-decoration:none;"><v-icon size="40px">mdi-instagram</v-icon></a>
          <a href="#" style="text-decoration:none;"><v-icon size="40px">mdi-linkedin</v-icon></a>
          <a href="#" style="text-decoration:none;"><v-icon size="40px">mdi-twitter</v-icon></a>
          <a href="#" style="text-decoration:none;"><v-icon size="40px">mdi-whatsapp</v-icon></a>
        <v-divider/>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>


  </v-app>
</template>
<script>
import "font-awesome/css/font-awesome.css";
export default {
  name: 'App',
  component:{
  },
  data: () => ({
      drawer: false,
    }),
};
</script>





