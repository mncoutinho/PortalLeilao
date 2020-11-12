<template>
  <div>
    <!-- NavBar -->
    <v-app-bar fixed tile app color="#422321" :elevation="20" dark width="100vw">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        <router-link class="white--text" tag="span" to="/" style="cursor:pointer">Portal Leilão</router-link>
      </v-toolbar-title>
      <v-spacer/>
        <v-toolbar-items>
          <v-btn
            color="#EEB147"
            text
            v-for="item in menuItens"
            :key="item.title"
            :to="item.link"
            @click="esconder"
            >
              <h4 class="hidden-sm-only hidden-xs-only">{{item.title}}</h4>
              <v-icon class="ml-2" size="25">{{ item.i }}</v-icon>
          </v-btn>
        </v-toolbar-items>
    </v-app-bar>
    <!-- Menu Lateral -->
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
          <v-list-item-content>
            <v-btn
              color="#562B28"
              text
              style="text-decoration:none;"
              v-for="items in navItens"
              :key="items.title"
              :to="items.routerLinks"
              class="mb-2"
            >
              <v-col cols="1">
                <v-icon left>{{ items.i }} </v-icon>
              </v-col>
              <v-col>
                <v-list-item-title class="ml-12" v-text="items.title" />
              </v-col>
            </v-btn>
          </v-list-item-content>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      navItens: [  
        { i: "fas fa-gavel ", title: "produtos", routerLinks: "/produtos"},
        { i: "fas fa-gavel ", title: "perfil", routerLinks: "/userpage"},
        { i: "fas fa-gavel ", title: "leiloeiro", routerLinks: "/leiloeiro"},
        { i: "fas fa-gavel ", title: "tutorial", routerLinks: "/tutorial"},
      ],
    };
  },
  methods:{
    usuarioL(){
      return this.user.email
    },
    esconder(){
      if(this.menuItens[0].title === 'cadastre-se' && this.menuItens[1].title === 'Login'){
        this.$store.commit('NOT_VISIBLE')  
      }
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.userApp.user
    }),
    menuItens() {
      let menuItem
      if (this.user.email) {
        menuItem = [
          { i: 'mdi-email', title: this.user.email, link: "/userpage" },
          { i: 'mdi-exit-to-app', title: 'sair', link: "/sair" },  
        ];
      } else {
        menuItem = [
          { i: 'mdi-account-multiple-plus-outline', title: "cadastre-se", link: "/criar"},
          { i: "fas fa-arrow-right", title: "Login", link: "/login" },
        ];
      }
      return menuItem;
    }
  }
};
</script>
