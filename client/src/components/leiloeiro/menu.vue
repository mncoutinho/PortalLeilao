<template>
  <v-app id="inspire">
        <v-navigation-drawer permanent expand-on-hover>
          <!--INFOMAÇOES DO USUARIO-->
          <v-list :key="usuario.length" v-for="usuario in usuario">
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="https://cdn.shopify.com/s/files/1/0946/5368/products/alho_grande.jpg?v=1440442906"/>
              </v-list-item-avatar>
              <v-list>
                <v-list-item-title class="title">{{usuario.name}}</v-list-item-title>
                <v-list-item-subtitle class="title">{{usuario.email}}</v-list-item-subtitle>
              </v-list>
            </v-list-item>
          </v-list>
          <v-divider />
          <!--CATEGORIAS-->
          <v-list 
            nav 
            dense 
            :key="pai.title" 
            v-for="pai in conteudo">
            <!--titulo-->
              <v-list-group>
                <template v-slot:activator>
                  <v-list-item-icon>
                    <v-icon>{{pai.icon}}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title v-text="pai.title"></v-list-item-title>
                </template>
                <!--conteudo-->
                  <v-list-item-content 
                    dense 
                    :key="filho.conteudo" 
                    v-for="filho in pai.conteudo">
                        <v-btn text v-text="filho.title" :to="filho.routerLinks"></v-btn>
                  </v-list-item-content>
              </v-list-group>
              <v-divider class="mt-2"/>
          </v-list>
        </v-navigation-drawer>
  </v-app>
</template>

<script>
export default { 
  data:() =>({
    usuario: [{ name: "Lucas", email: "Lili@empresa.com" }],
    conteudo:[
      //numero 1
      {icon:"mdi-home",
        title:"Artigos",
        conteudo:[
          {title:"Adicionar", routerLinks:'/adicionarItem'},
          {title:"Editar"},
          {title:"Gerenciar Lances"},
        ]
      },
      //numero 2
      {icon:"mdi-home",
        title:"Leilao",
        conteudo:[
          {title:"Criar"},
          {title:"Editar"},
          {title:"Informar sobre o Lote"},
        ]
      },
      //numero 3
      {icon:"mdi-home",
        title:"Cliente",
        conteudo:[
          {title:"Criar"},
          {title:"Editar"},
          {title:"Lista Negra"},
        ]
      },

    ] 
  })
};
</script>