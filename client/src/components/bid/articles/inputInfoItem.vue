<template>
    <div>
        <v-col cols="10">
            <v-text-field 
                v-model="text" 
                outlined 
                label="digite aqui"
            />
            <v-btn>
                publicar
            </v-btn>
            {{text}}
        </v-col>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text:""
        }
    },
}
</script>