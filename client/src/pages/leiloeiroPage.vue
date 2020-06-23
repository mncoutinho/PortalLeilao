<template>
  <v-navigation-drawer permanent expand-on-hover>
    <!--INFOMAÇOES DO USUARIO-->
    <v-list :key="usuario.length" v-for="usuario in usuario">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            src="https://cdn.shopify.com/s/files/1/0946/5368/products/alho_grande.jpg?v=1440442906"
          />
        </v-list-item-avatar>
        <v-list>
          <v-list-item-title class="title">{{usuario.name}}</v-list-item-title>
          <v-list-item-subtitle class="title">{{usuario.email}}</v-list-item-subtitle>
        </v-list>
      </v-list-item>
    </v-list>
    <v-divider />
    <!--CATEGORIAS-->
    <v-list nav dense :key="conteudo.length" v-for="conteudo in conteudo">
      <!--titulo-->
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-icon>
            <v-icon>{{conteudo.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{conteudo.title}}</v-list-item-title>
        </template>
        <!--conteudo-->
        <v-list-item-action dense :key="content" v-for="content in conteudo.content">
          <v-list-item-title v-text="content[0]"></v-list-item-title>
          <v-list-item-title v-text="content[1]"></v-list-item-title>
          <v-list-item-title v-text="content[2]"></v-list-item-title>
        </v-list-item-action>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      usuario: [{ name: "Lucas", email: "Lili@empresa.com" }],
      conteudo: [
        { icon: "fas fa-gavel", title: "Leilao", content:["1","2","3"]},
        { icon: "fas fa-file-alt", title: "Artigos" , content:["test","2","3"]},
        { icon: "mdi-card-account-details", title: "Usuarios", content:["criar","procurar","lista Negra"] },
        { icon: "fas fa-ad", title: "Anuncios" }
      ]
    };
  }
};
</script>