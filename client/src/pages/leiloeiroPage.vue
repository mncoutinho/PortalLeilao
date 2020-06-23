<template>
    <v-navigation-drawer
    permanent
    expand-on-hover
    >
        <!--INFOMAÇOES DO USUARIO-->
          <v-list
          :key="usuario"
          v-for="usuario in usuario">
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="https://cdn.shopify.com/s/files/1/0946/5368/products/alho_grande.jpg?v=1440442906"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">{{usuario.name}}</v-list-item-title>
                <v-list-item-subtitle>{{usuario.email}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider/>
          <!--CATEGORIAS-->
          <v-list 
          nav
          dense
          :key="conteudo"
          v-for="conteudo in conteudo">
          <!--titulo-->
            <v-list-group>
                <template v-slot:activator>
                    <v-list-item-icon>
                            <v-icon>{{conteudo.icon}}</v-icon>
                    </v-list-item-icon>
                        <v-list-item-title>{{conteudo.title}}</v-list-item-title>
                </template>
                <!--conteudo-->
                <v-list-item-action
                dense
                :key="i"
                v-for="(content, i) in content">
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
    data(){
        return{
            usuario:[
                {name:"Lucas",email:"Lili@empresa.com"}
            ],
            conteudo:[
                {icon:'mdi-home',title:"nome"},
                {icon:'mdi-home',title:"nome"},
                {icon:'mdi-home',title:"nome"},
                {icon:'mdi-home',title:"nome"},
            ],
            content:[
                ['eai', 'meu','chapa'],
            ],
        }
    }
}
</script>