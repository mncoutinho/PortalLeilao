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
                v-model="accountData.cep"
                maxlength="8"
                label="CEP"
                placeholder="12345-678"
                required/>
        <!--Adress-->
            <v-text-field  
                v-model="accountData.endereco"
                label="Endereço"
                placeholder="Rua. 20 "
                required/>
        <!--Complement-->
            <v-text-field  
                v-model="accountData.complemento"
                label="Complemento"
                placeholder="Zona Sul"
                required/>
        <!--Street-->
            <v-text-field  
                v-model="accountData.bairro"
                label="Bairro"
                placeholder="Leblon"
                required/>
        <!--Street-->
            <v-text-field  
                v-model="accountData.cidade"
                label="Cidade"
                placeholder="Rio de Janeiro"
                required/>
        <!--uf-->
            <v-select
            :items="accountData.uf"                                        
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
                uf: ['SP', 'RJ', 'MG', 'PR', 'MN'],
            },
            
        }
    }
}
</script>