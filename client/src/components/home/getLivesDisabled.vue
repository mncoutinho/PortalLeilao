<template >
    <v-row width="100%" style="background-color:rgba(166,78,75,0.08)" class="mt-10" dense>
        <!-- BOX-->
        <v-card
        color="transparent"
        width="100%"
        flat>
            <v-row class="d-flex justify-center">
                <p class="mt-12 display-1" style="color:#A64E4B">
                    Veja os próximos leiloes
                        <v-divider class="ma-8" color="white"/>
                </p>  
            </v-row>
            <!--TRANSMISSOES-->
            <v-card width="100%" flat color="transparent">
                <v-row class="d-flex justify-center flex-wrap justify-space-around">
                    <v-card
                    v-ripple
                    class="elevacão ma-6"
                    style="cursor:pointer"
                    width="330px"
                    v-for="stream in limitador"
                    :key="stream.nome"
                    >
                        <v-img width="100%" height="300px" :src="stream.imgUrl[0]"/> 
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
            </v-card>
        </v-card>
    </v-row>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    computed:{ 
        ...mapState({
            streams: (state) => state.itemApp.items,
            user: (state) => state.userApp.user,
        }),
        ...mapGetters(["itensFinalizados"]),
        limitador () {
            return this.itensFinalizados.slice(0,4)
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
<style scoped>
.elevacão:hover{
    box-shadow: -18px 21px 9px 0px rgba(0,0,0,0.37);
}
</style>