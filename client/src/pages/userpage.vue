<template>
  <v-layout row >
    <user @paginas="mudarPagina"/>
    <v-row > 
        <v-col fluid>
          <v-window v-model="page">
            <!--item 1-->
            <v-window-item :value="1" >
              <userPerfil/>
            </v-window-item>
            <!--item 2-->
            <v-window-item :value="2">           
              <userEnd/>
            </v-window-item>
            <!--item 3-->
            <v-window-item :value="3">           
              <userCard/>
            </v-window-item>
            <!--item 4-->
            <v-window-item :value="4">           
              <userHist/>
            </v-window-item>
            <!--item 5-->
            <v-window-item :value="5">           
              <userInfo/>
            </v-window-item>
          </v-window>  
        </v-col>
      </v-row>
  </v-layout>
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
    }
  },
  methods:{
    mudarPagina(page){
      this.page = page
    }
  }
}
</script>  