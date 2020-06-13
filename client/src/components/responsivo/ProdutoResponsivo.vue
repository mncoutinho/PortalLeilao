<template>
    <v-layout>
        <v-row justify="center">
        </v-row>
        <v-row justify="center">
            <v-col cols="3">
                    <v-text-field
                        v-model="pesquisar"
                        append-icon="mdi-magnify"
                        label="Pesquisar"
                        color="#422321"
                    ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field
                    label="Valor Mínimo"
                    max="25000"
                    min="100"
                    step="100"
                    style="width: 250px"
                    type="number"
                    @keydown="false"
                ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field
                    label="Valor maximo"
                    max="25000"
                    min="100"
                    step="100"
                    style="width: 250px"
                    type="number"
                    @keydown="false"
                ></v-text-field>
            </v-col>
        </v-row>    
    </v-layout>    
</template>
<script>
export default {
    data(){
        return {
            pesquisar:''
        }
    }
    
}
</script>