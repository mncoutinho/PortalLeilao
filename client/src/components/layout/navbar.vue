<template>
    <div class="NavBar" >
      <!-- Menu Lateral -->
        <v-navigation-drawer app temporary v-model="drawer" >               
        <v-list
         v-for="items in navItens"
          :key="items.title"
          :to="items.routerLinks">    
          <v-list-item-content> 
            <v-btn color="#EEB147" text style="text-decoration:none;">
          <v-icon left>{{ items.i }}</v-icon>     
          {{ items.title }}
          </v-btn>
          </v-list-item-content>          
        </v-list>
      </v-navigation-drawer>

<!-- NavBar -->
      <v-app-bar
        absolute 
        app
        color="#422321"
        :elevation="0"
        clipped-left
        dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"/>
        <v-toolbar-title> 
        <router-link class="white--text" tag="span" to="/"  style="cursor:pointer">
        Portal Leilão
        </router-link>
        </v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items class="hidden-xs-only">
         <v-btn color="#EEB147" text  center style="text-decoration:none;"
         v-for="item in menuItens"
          :key="item.title"
          :to="item.link">
          <v-icon>{{ item.i }}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      </v-app-bar>
    </div>
</template>

<script>
export default {
    name:"NavBar",
    data() {
      return {
        drawer:false,
           menuItens:[
          { i: '', title: 'cadastre-se', link: '/criar' },
          { i: '', title: 'Login', link: '/login' },
        ],
        navItens:[
          { i: 'fas fa-home', title: 'HOME', routerLinks: '/' },
          { i: 'fas fa-plus', title: 'Item', routerLinks: '/adicionarItem' },
          { i: 'fas fa-gavel ', title: ' leilão', routerLinks: '/leilao' },

         
        ]
      }
    }
}
</script>
