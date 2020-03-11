<template>
  <v-app id="inspire">

    <v-navigation-drawer
      v-model="drawer"
      app>
      <v-list dense>
        <router-link to="/" style="text-decoration:none;">
        <v-list-item link>
          <v-list-item-action>
            <v-icon >mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title ><router-link to="/">HOME</router-link></v-list-item-title>
          </v-list-item-content>          
        </v-list-item>
        </router-link>
        
        <router-link to="/adicionarItem" style="text-decoration:none;">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title><router-link to="/adicionarItem">ITEM</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>

        <router-link to="/leilao" style="text-decoration:none;">
         <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title><router-link to="/leilao">LEILÃO</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>

      </v-list>
    </v-navigation-drawer>

   
    <v-app-bar
      app
      color="indigo lighten-1"
      dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Portal Leilão</v-toolbar-title>
      <div  style="margin-left:13%;width:50%">
        <v-text-field
          v-model="Pesquisar"
          append-icon="mdi-magnify"
          label="Pesquisar"
          single-line
          hide-details
        ></v-text-field>
      </div>
      <!--BUTÃO-->
      <router-link to="#" style="text-decoration:none; margin-left:20%">
        <v-btn class="rigth" fab dark color="white" >
          <v-icon dark color="indigo">mdi-plus</v-icon>
        </v-btn>
      </router-link>  
     

    </v-app-bar>
          
    <v-spacer/>
    <v-content>
      <router-view/>
    </v-content>

<!--RODAPÉ-->

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





