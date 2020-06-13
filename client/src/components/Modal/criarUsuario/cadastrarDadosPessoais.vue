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
                v-model="nome"
                :rules="[nome => !!nome || 'Este campo é necessario']"
                label="Nome Completo"
                placeholder="Antonio Luiz da Silva"
                required
                >
                </v-text-field>
            <!--CPF-->
                <v-text-field  
                v-model="cpf"
                maxlength="11"
                label="CPF"
                placeholder="123-456-789-10"
                class="cpf"
                required
                ></v-text-field>
            <!--telephone-->
                <v-text-field
                v-model="tel"
                :rules="[tel => !!tel || 'Este campo é necessario']"
                label="Telefone"
                placeholder="(12)934567890"
                required
                >
                </v-text-field>    
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {
    data(){
        return {
            valid:true,
            cpf:'',
            tel:'',
            nome:''
        }
    }
}
</script>

<style>

</style>