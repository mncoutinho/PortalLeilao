<template>
  <div>
      <h4 class="brown--text" style=" margin-top: 100px; margin-bottom: 30px; text-align:center; ">Termos & Condicoes</h4>
      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-textarea
                    name="title"
                    label="Termos de Frete*"
                    v-model="termos.frete" 
                    @change="$emit('formTermos', termos)"   
                />
            </v-flex>
      </v-layout>

      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-textarea
                    name="title"
                    label="Termos de Pagamentos*"
                    v-model="termos.pagamento" 
                    @change="$emit('formTermos', termos)"    
                />
            </v-flex>
      </v-layout>

      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-textarea
                    name="title"
                    label="Termos & Condicoes*"
                    v-model="termos.condicoes"
                    @change="$emit('formTermos', termos)"     
                />
            </v-flex>
      </v-layout>
  </div>
</template>

<script>

export default {
    data(){
        return{
            termos:{
                frete:'',
                pagamento:'',
                condicoes:''
            },
        }
    },
    created(){
         
    }
    
}
</script>
