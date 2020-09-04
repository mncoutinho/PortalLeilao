<template>
    <v-card
    height="900"
    width="350"
    flat
    tile
  >
    <v-navigation-drawer
      left
      width="100%"
      permanent
    >
      <v-list class="ml-4">
        <v-list-item>
          <v-list-item-title class="display-1 bold pa-4">Minha Conta</v-list-item-title>
        </v-list-item>
        <v-divider/>
          <v-col>
            <v-btn
              v-for="botoes in botoes"
              :key="botoes.length"
              link
              text
              large
              width="100%" 
              @click="pagina(botoes.page)"
              class="headlide pa-10"
              >
                <v-list-item> 
                <v-list-item-icon>
                  <v-icon>{{ botoes.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ botoes.nome }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-btn>
          </v-col>
      </v-list>
    </v-navigation-drawer>
    </v-card>
</template>


<script>
import {mapState} from 'vuex'

export default {
  methods:{
    pagina(page){
      this.$emit('paginas', page)
    }
  },
  computed: {
    ...mapState({
      user: state => state.userApp.user,
      
    }),
  },
  created(){
    if(!this.user.refreshToken){
      this.$store.commit('MENSAGEM_LOGUE')
      this.$router.push('/')    
    }  
  },
 data:() =>({
    botoes:[
      {icon:'fas fa-user',nome:'Perfil', page: 1},
      {icon:'fas fa-map-marked-alt',nome:'Endereço', page: 2},
      {icon:'fas fa-id-card',nome:'Cartões', page: 3},
      {icon:'fas fa-hourglass',nome:'Histórico', page: 4},
      {icon:'fas fa-phone',nome:'Informações', page: 5},
    ],
  })
}   
</script>