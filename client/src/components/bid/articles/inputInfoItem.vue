<template>
    <div>
        <v-col cols="10">
            <v-textarea
                v-model="text" 
                outlined 
                label="digite aqui"
            />
            <v-btn
                @click="postMSG(text)"
            >
                publicar
            </v-btn>
            {{text}}
            {{this.$route.query.id}}
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
    methods: {
        postMSG(msg){
            this.$store.dispatch('addInfo', {info:msg, id: this.$route.query.id})
        }
    },
}
</script>