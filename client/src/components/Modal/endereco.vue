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
                v-model="cep"
                maxlength="8"
                label="CEP"
                placeholder="12345-678"
                required/>
        <!--Adress-->
            <v-text-field  
                v-model="endereco"
                label="Endereço"
                placeholder="Rua. 20 "
                required/>
        <!--Complement-->
            <v-text-field  
                v-model="complemento"
                label="Complemento"
                placeholder="Zona Sul"
                required/>
        <!--Street-->
            <v-text-field  
                v-model="bairro"
                label="Bairro"
                placeholder="Leblon"
                required/>
        <!--Street-->
            <v-text-field  
                v-model="cidade"
                label="Cidade"
                placeholder="Rio de Janeiro"
                required/>
        <!--uf-->
            <v-select
            :items="uf"                                        
            label="UF"
            required
            />
        </v-col>
        <v-col
        :key="button.text"
        v-for="button in buttons">
            <v-btn
            :color="button.color"
            center
            class="white--text"
            depressed
            large
            @click="$emit('clicked',button.click)"
            v-text="button.text"
            />
        </v-col>
        {{cidade}}
        {{bairro}}
        {{cep}}
        {{endereco}}
        {{complemento}}
    </v-row>
    
</template>

<script>
export default {
    props:['buttons'],
    data(){
        return {
            uf: ['SP', 'RJ', 'MG', 'PR', 'MN'],
            cidade:'',
            bairro:'',
            cep:'',
            complemento:'',
            endereco:''
        }
    }
}
</script>