<template>
    <div>
        <v-card-text>
            <div v-if="result.length" >
                <small 
                    justify="center"
                >
                    <span 
                        class="badge badge-info"
                    >
                        {{result.length}}
                    </span> 
                    resultados encontrados
                </small>

                <v-row>
                    <v-col>
                        Peça
                    </v-col>
                    <v-col>
                        Usuário
                    </v-col>
                    <v-col>
                        Data
                    </v-col>
                    <v-col>
                        Lance Feito
                    </v-col>
                </v-row>

                <v-row 
                    v-for="result in result" 
                    :key="result.length"
                >
                    <v-col>
                        <v-btn
                            @click="viewitem(result.peca)"
                        >
                            <small v-text="result.peca"/>
                        </v-btn>    
                    </v-col>
                    <v-col>
                        <small v-text="result.user"/>
                    </v-col>
                    <v-col>
                        <small v-text="result.time"/>
                    </v-col>
                    <v-col>
                        <small>{{result.lance + ",00 R$"}}</small>
                    </v-col>
                </v-row>
            </div>         
            <div v-else>
                <small >
                    Nenhum resultado encontrado 
                </small>
            </div>	
        </v-card-text>	
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            result: state => state.itemApp.resultLances
        })
    },
    methods: {
        viewitem(target){
            this.$router.push({ path:'/leilao', query:{id: target }})
        }
    },
}
</script>

