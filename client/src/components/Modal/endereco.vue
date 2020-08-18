<template>
  <!--title-->
    <v-row justify="center" class="mt-6 mb-3">
        <!--dados-->
        <h2>Endereço</h2>
        <v-col
        cols="10"
        >
        <!--CEP-->
            <v-text-field
                v-on:keyup.enter="getCep(accountData.cep)"
                @change="$emit('endereco', accountData)"  
                v-model="accountData.cep"
                maxlength="8"
                label="CEP"
                placeholder="12345-678"
                required/>
        <!--Adress-->
            <v-text-field
                @change="$emit('endereco', accountData)"  
                v-model="accountData.endereco"
                label="Endereço"
                placeholder="Rua. 20 "
                required/>
        <!--Complement-->
            <v-text-field
                @change="$emit('endereco', accountData)"  
                v-model="accountData.complemento"
                label="Complemento"
                placeholder="Zona Sul"
                required/>
        <!--Street-->
            <v-text-field
                @change="$emit('endereco', accountData)"  
                v-model="accountData.bairro"
                label="Bairro"
                placeholder="Leblon"
                required/>
        <!--Street-->
            <v-text-field
                @change="$emit('endereco', accountData)"  
                v-model="accountData.cidade"
                label="Cidade"
                placeholder="Rio de Janeiro"
                required/>
        <!--uf-->
            <v-select
            :items="uf"  
            v-model="accountData.uf"                                      
            label="UF"
            required
            />
        </v-col>
        <v-col
        :key="button.text"
        v-for="button in buttons">
            <v-row justify="end" class="mr-6">
                <v-btn
                :color="button.color"
                center
                class="white--text"
                depressed
                large
                @click="$emit('clicked',button.click)"
                v-text="button.text"
                :disabled="estaDesativado"
                />
            </v-row>
        </v-col>
    </v-row>
    
</template>

<script>
import axios from 'axios'
export default {
    props:['buttons'],
    computed:{
      estaDesativado(){
        return this.accountData.cidade && this.accountData.bairro && this.accountData.cep && 
        this.accountData.complemento && this.accountData.endereco !== '' ? false : true
      }
    },
    data(){
        return {
            accountData:{
                cidade:'',
                bairro:'',
                cep:'',
                complemento:'',
                endereco:'',
                uf:''
            },
            uf: ['SP', 'RJ', 'MG', 'PR', 'MN'],
            
        }
    },
    methods: {
        getCep(cep){
            console.log(cep);
            axios({
                method: 'get',
                url:'https://viacep.com.br/ws/'+cep+'/json/'  
            }).then(doc =>{
                this.accountData = {
                    cep: doc.data.cep,
                    cidade: doc.data.localidade,
                    bairro: doc.data.bairro,
                    endereco: doc.data.logradouro,
                    uf: doc.data.uf
                }
            })
        }
    },
}
</script>