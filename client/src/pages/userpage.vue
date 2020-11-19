<template>
  <v-app>
    <v-row dense>
      <v-col cols="3" class="d-none d-md-flex">
        <user class="d-flex" @paginas="mudarPagina"/>
      </v-col> 
      <v-col md="9" sm="12" class="float-left">
            <v-window v-model="page">
              <!--item 1-->
              <v-window-item :value="0" >
                <userPerfil/>
              </v-window-item>
              <!--item 2-->
              <v-window-item :value="1">           
                <userEnd/>
              </v-window-item>
              <!--item 3-->
              <v-window-item :value="2">           
                <userCard/>
              </v-window-item>
              <!--item 4-->
              <v-window-item :value="3">           
                <userHist/>
              </v-window-item>
              <!--item 5-->
              <v-window-item :value="4">           
                <userInfo/>
              </v-window-item>
            </v-window>
        </v-col>
      </v-row>
      <!--menu mobile-->
      <v-bottom-navigation
      fixed
      color="#562B28"
      class="d-md-none d-sm-flex"
      v-model="page"
      >
        <v-btn
        v-for="botao in botoes"
        :key="botao.length"
        @click="mudarPagina(botao.page)">
          <span>{{botao.nome}}</span>
          <v-icon>{{botao.icon}}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-app>
</template>

<script>
import user from "../components/inputUser/userpage"
import userPerfil from "../components/inputUser/componentsUser/perfilUser"
import userEnd from "../components/inputUser/componentsUser/enderecoUser"
import userCard from "../components/inputUser/componentsUser/cardUser"
import userHist from "../components/inputUser/componentsUser/userHistori"
import userInfo from "../components/inputUser/componentsUser/userInfo"


export default {
  components:{
    user,
    userPerfil,
    userEnd,
    userCard,
    userHist,
    userInfo,
  },
  data(){
    return{
      page: 0,
      botoes:[
        {icon:'fas fa-user', nome:'Perfil', page: 0},
        {icon:'fas fa-map-marked-alt', nome:'Endereço', page: 1},
        {icon:'fas fa-id-card', nome:'Cartões', page: 2},
        {icon:'fas fa-hourglass', nome:'Histórico', page: 3},
        {icon:'fas fa-phone' ,nome:'Informações', page: 4},
      ],
    }
  },
  methods:{
    mudarPagina(page){
      this.page = page
    }
  },
  created(){
    this.$store.commit('VISIBLE');
  }
}
</script>