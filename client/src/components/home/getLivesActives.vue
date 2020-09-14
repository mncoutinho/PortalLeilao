<template>
      <!-- BOX-->
        <v-flex class="mt-auto">
            <v-card 
            max-width="1550"
            class="mx-auto"
            flat>
                <v-row justify="center">
                    <v-col 
                    cols="12"
                    md="6"
                    align="center"
                    class="mt-12"
                    >
                        <p 
                        class="display-1"
                        style="color:#A64E4B;">
                            Veja quem está ao vivo, agora
                            <v-divider class="mx-8" color="white"/>
                        </p>
                    </v-col>
                </v-row >
                <!--TRANSMISSOES-->
                    <v-hover 
                    v-slot:default="{ hover }"
                    open-delay="100">  
                        <v-row 
                        align="center" 
                        justify="space-around" 
                        class="mt-12"
                        >
                            <v-card
                            class="mt-6 mb-6"
                            style="cursor:pointer"
                            width="330"
                            :elevation="hover ? 16 : 2"
                            v-for="stream in limitador"
                            :key="stream.nome"
                            >
                                <v-img width="100%" height="300" :src="stream.imgUrl[0]" 
                                /> 
                                <v-list-item-content class="ml-5">
                                    <div>     
                                        <span :style="color(stream.active)" >{{status(stream.active)}}</span>
                                        <v-list-item-title style="color:#63432D" class="bold headline mb-1">{{stream.name}}</v-list-item-title>
                                        <v-list-item-subtitle style="color:#1B120C" class="mb-2">{{stream.description}}</v-list-item-subtitle>
                                            <v-divider class="mx-5" color="#EDE7E2"/>
                                </div>            
                                <v-row class="mr-5" justify="center">
                                    <v-btn outlined rounded class="pr-12 pl-12 mt-4 mb-2" :style="color(stream.active)" @click="logado(stream.id)">{{status(stream.active)}}</v-btn>
                                </v-row>
                                </v-list-item-content>   
                            </v-card>
                        </v-row>
                    </v-hover>
                <v-row align="center" justify="space-around" class="mt-12">
                </v-row>
            </v-card>
        </v-flex>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    computed:{ 
        ...mapState({
            streams: (state) => state.itemApp.items,
            user: (state) => state.userApp.user,
        }),
        ...mapGetters(["itensAtivos"]),
        limitador () {
            return this.itensAtivos.slice(0,8)
        },
    },
    methods:{
        status(status){
            if(status){
              return "Participar"
            }else{
               return "Finalizado" 
            }
        },
        color(status){
            if(status){
              return "color:green"
            }else{
               return "color:red" 
            }
        },
        logado(id){
            if(!this.user.email){
                return this.$router.push('/login')
            }else{
                this.target = id 
                return this.$router.push({path:'/leilao', query:{id:this.target}})
            }
        }    
    },
}
</script>