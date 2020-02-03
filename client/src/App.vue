<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
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
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Portal Leilão</v-toolbar-title>
    </v-app-bar>
      
      
      <v-spacer></v-spacer>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer
      color="indigo"
      app 
      align="center">
    <p>
      <router-link to="/">Back to Home</router-link>
    </p>
    <p>© 2020 Portal Leilão. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
    
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/layout/header"
export default {
  name: 'App',
  component:{
    Header,
  },
  data: () => ({
      drawer: null,
    }),
};
</script>
