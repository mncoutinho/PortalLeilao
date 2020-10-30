<template>
  <v-app id="inspire">
        <v-navigation-drawer permanent expand>
          <!--INFOMAÇOES DO USUARIO-->
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img :src="perfilImg"/>
              </v-list-item-avatar>
              <v-list>
                <v-list-item-title class="title">{{user.displayname}}</v-list-item-title>
                <v-list-item-subtitle class="title">{{user.email}}</v-list-item-subtitle>
              </v-list>
            </v-list-item>
          </v-list>
          <v-divider />
          <!--CATEGORIAS-->
          <v-btn 
              x-large 
              color="#562B28" 
              dark 
              depressed 
              width='100%'
              @click="meunMudaPagina(0)"
              >
                <v-icon>mdi-home</v-icon>
                <v-spacer/>
                <span>Página Inicial</span>
              </v-btn>
          <v-list 
            nav 
            dense 
            :key="listas.title" 
            v-for="listas in conteudos">
            <!--titulo-->
              <v-list-group>
                <template v-slot:activator>
                  <v-list-item-icon>
                    <v-icon>{{listas.icon}}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title v-text="listas.title"/>
                </template>
                <!--conteudo-->
                  <v-list-item-content 
                    dense 
                    :key="lista.conteudo" 
                    v-for="lista in listas.conteudo">
                        <v-btn text v-text="lista.title" @click="meunMudaPagina(lista.page)"/>
                  </v-list-item-content>
              </v-list-group>
              <v-divider class="mt-2"/>
          </v-list>
        </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default { 
  methods:{
    meunMudaPagina(page){
      this.$store.commit('setStep', page)
    }
  },
  computed: {
    ...mapState({
      user: state => state.userApp.user,
      perfilImg: state => state.userApp.userData.photoUrl
    }),
  },
  created(){
    if(!this.user.refreshToken){
      this.$store.commit('ALERT', 'Logue, por favor.')
      this.$router.push('/')
    }  
  },
  data:() =>({
    usuario:[],
    conteudos:[
      //numero 1
      {icon:"fas fa-wine-glass",
        title:"Artigos",
        conteudo:[
          {title:"Todas as Peças", page:2},
          {title:"adicionar", page:3},
          {title:"Minhas peças", page:4}
        ]
      },
      //numero 2
      {icon:"fas fa-hand-holding-usd",
        title:"Leilao",
        conteudo:[
          {title:"Todos os leiloes", page:5},
          {title:"Criar", page:6},
          {title:"Meus leiloes", page:7}
        ]
      },
      //numero 3
      {icon:"fas fa-suitcase",
        title:"Mala Direta",
        conteudo:[
          {title:"Gestor de lances", page:8},
          {title:"Criar", page:9},
          {title:"Editar", page:10},          
        ]
      },
      {
        icon:"fas fa-tasks",
        title:"Administrativo",
        conteudo:[
          {title:"Levantamento Geral", page:12},
          {title:"Gerenciar pocentagem", page:12},
          {title:"reportar problema", page:13},
          {title:"imprimir documento", page:14}
        ]
      },
      {
        icon:"fas fa-cog",
        title:"Ajustes",
        conteudo:[
        ]
      }
    ] 
  })
};
</script>