<template>
    <div class="NavBar">
      <!-- Menu Lateral -->
        <v-navigation-drawer app
        v-model="drawer"
        temporary
        >
        <v-list dense>
          <router-link to="/" >
          <v-list-item link>
            <v-list-item-action>
              <v-icon ><i class="fas fa-home"></i></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title ><router-link to="/">HOME</router-link></v-list-item-title>
            </v-list-item-content>          
          </v-list-item>
          </router-link>
          
          <router-link to="/adicionarItem">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title><router-link to="/adicionarItem">ITEM</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </router-link>

          <router-link to="/leilao" >
          <v-list-item link>
            <v-list-item-action>
              <v-icon><i class="fas fa-gavel"></i></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title><router-link to="/leilao">LEILÃO</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </router-link>

        </v-list>
      </v-navigation-drawer>

<!-- NavBar -->
      <v-app-bar app
        color="#63432D"
        :elevation="0"
        dark
        clipped-left
        
        >
        <v-app-bar-nav-icon @click="drawer = !drawer"/>
        <v-toolbar-title> 
          <router-link class="white--text" to="/" >
              Portal Leilão
        </router-link>
        </v-toolbar-title>
  <!--BARRA DE PESQUISA-->
        <v-spacer/>
          <v-text-field

            v-model="Pesquisar"
            append-icon="mdi-magnify"
            label="Pesquisar"
            single-line
            hide-details
            />
        <v-spacer/>
         <v-btn class="mr-2" :elevation="0" to="/criar"  text>
        Inscreva-se
        </v-btn>
        <v-btn to="/login"  color="#28989E">Login <i class="fas fa-arrow-right ml-1"></i></v-btn>
      </v-app-bar>
    </div>
</template>
<script>
export default {
    name:"NavBar",
    data: () => ({
        drawer:false

    }),
}
</script>
