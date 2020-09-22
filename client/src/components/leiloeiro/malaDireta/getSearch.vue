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
                        Peca
                    </v-col>
                    <v-col>
                        usuario
                    </v-col>
                    <v-col>
                        data
                    </v-col>
                    <v-col>
                        lance
                    </v-col>
                </v-row>

                <v-row 
                    v-for="result in result" 
                    :key="result.length"
                >
                    <v-col>
                        <small v-text="result.peca"/>
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
                    Sem resultado
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
}
</script>

