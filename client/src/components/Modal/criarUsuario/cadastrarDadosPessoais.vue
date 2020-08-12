<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation>
<!--title-->
    <v-row justify="center" class="mt-6 mb-3">
        <h2>Dados</h2>
    </v-row>
    <!--dados-->
        <v-row justify="center">
            <v-col
            cols="10"
            >
            <!--name-->
                <v-text-field
                v-model="accountData.nome"
                :rules="nameRules"
                label="Nome Completo"
                placeholder="Antonio Luiz da Silva"
                required
                >
                </v-text-field>
            <!--CPF-->
                <v-text-field  
                v-model="accountData.cpf"
                maxlength="11"
                label="CPF"
                :rules="cpfRules"
                placeholder="123-456-789-10"
                class="cpf"
                required
                ></v-text-field>
            <!--telephone-->
                <v-text-field
                v-model="accountData.tel"
                :rules="phoneRules"
                label="Telefone"
                placeholder="(12)934567890"
                required
                >
                </v-text-field>    
            </v-col>
        </v-row>
        <v-row justify="center">
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
    </v-form>
</template>

<script>
export default {
    props:['buttons'],
    computed:{
      estaDesativado(){
        return this.accountData.cpf && this.accountData.tel && this.accountData.nome !== '' ? false : true
      }
    },
    data(){
        return {
            accountData:{
                cpf:'',
                tel:'',
                nome:''
            },
            nameRules:[v => !!v || 'Este campo é necessario'],
            cpfRules:[v => !!v || 'Este campo é necessario',
                        v => !!v && v.lenght != 11 || 'Cpf Incompleto'],
            phoneRules:[tel => !!tel || 'Este campo é necessario'] ,
            valid:true,

            
        }
    }
}
</script>