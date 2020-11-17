<template>
    <v-row width="100%" style="background-color:rgba(166,78,75,0.01)" dense>
      <!-- BOX-->
            <v-card
            color="transparent"
            class="mx-auto"
            flat>
                <v-row justify="center">
                    <v-col
                    cols="8"
                    tag="div"
                    md="6"
                    align="center"
                    class="mt-12"
                    >
                        <p class="display-1" style="color:#A64E4B;">
                            Veja quem está ao vivo, agora
                            <v-divider class="mt-8" color="white"/>
                        </p>
                    </v-col>
                </v-row>
                <!--TRANSMISSOES-->
                <v-card width="100%" flat color="transparent">
                    <v-col cols="12" sm="12" md="12" align-self="center">
                        <v-row class="d-flex flex-wrap" justify="center">
                            <v-card
                            raised
                            v-ripple
                            class="elevacão ma-6"
                            style="cursor:pointer"
                            width="23em"
                            min-width="20em"
                            v-for="stream in limitador"
                            :key="stream.nome"
                            @click="logado(stream.id)"
                            >
                                <v-img
                                class="white--text align-end" 
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                width="99,9%" 
                                height="300px" 
                                :src="stream.imgUrl[0]">
                                    <v-card-title class="font-weight-bold headline mb-1">{{stream.name}}</v-card-title>
                                    <span 
                                    class="atividade" 
                                    :style="color(stream.active)">
                                        {{status(stream.active)}}
                                    </span>
                                </v-img>
                                <v-card-subtitle style="font-size:18px" class="pa-4 bold">
                                    Quantidade: <span style="color:#A64E4B">{{lotes}} Lotes</span>
                                    <div style="color:#A64E4B" class="mt-1">{{data}}</div>
                                </v-card-subtitle>
                                <v-card-text>
                                    <h3 style="color:#A64E4B">informações:</h3>
                                        <p class="font-weight-light mb-2">{{stream.description}}</p>
                                    <v-divider mx-8 class="mt-4 mb-4"></v-divider>
                                        <p style="font-size:16px" class="font-weight-light">Rio de Janeiro</p>
                                </v-card-text>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-card>
            </v-card>
    </v-row>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    data(){
        return{
            data: new Date().getDate()+'/'+new Date().getFullYear(),
            lotes: 24,
        }
    },
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
              return "Aberto"
            }else{
               return "Fechado" 
            }
        },
        color(status){
            if(status){
              return "color:#128994"
            }else{
               return "color:red" 
            }
        },
        logado(id){
            this.target = id 
            return this.$router.push({path:'/leilao', query:{id:this.target}})
        }    
    },
}
</script>
<style scoped>
.elevacão:hover{
    box-shadow: -18px 21px 15px 0px rgb(224, 223, 223);
}
.atividade{
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: white;
    padding: 5px 20px 5px 20px;
    border-radius: 1em;
    font-weight: 600;
}
</style>