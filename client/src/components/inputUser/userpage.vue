<template>
    <v-card
    height="100%"
    min-width="300px"
    width="320px"
    class="pt-2 pb-2"
    style="background-color:rgba(166,78,75,0.2)"
    flat
    tile
    >
      <v-navigation-drawer
      width="100%"
      height="100%"
      color="transparent"
      class="pt-2 pb-2"
      permanent
      left
      >
        <v-list>
          <v-list-item>
            <v-list-item-title 
            style="color:#562B28"
            class="display-1 bold pa-4 font-weight-bold">Minha Conta</v-list-item-title>
          </v-list-item>
          <v-divider/>
            <v-col>
              <v-btn
                link
                text
                large
                width="100%" 
                class="display-1 pa-10 font-weight-medium"
                @click="pagina(botoes.page)"
                v-for="botoes in botoes"
                :key="botoes.length"
                >
                  <v-list-item> 
                  <v-list-item-icon>
                    <v-icon color="#562B28">{{ botoes.icon }}</v-icon>
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
      this.$store.commit('ALERT', 'Logue, por favor.')
      this.$router.push('/')    
    }  
  },
 data:() =>({
    botoes:[
      {icon:'fas fa-user',nome:'Perfil', page: 0},
      {icon:'fas fa-map-marked-alt',nome:'Endereço', page: 1},
      {icon:'fas fa-id-card',nome:'Cartões', page: 2},
      {icon:'fas fa-hourglass',nome:'Histórico', page: 3},
      {icon:'fas fa-phone',nome:'Informações', page: 4},
    ],
  })
}   
</script>