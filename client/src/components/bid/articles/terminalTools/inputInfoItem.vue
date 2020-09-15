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
        postMSG(text){
            const time = new Date();
            const msg = {
                text: text,
                time: `hora: ${time.getHours()}:${time.getMinutes()} data: ${time.getDay()}/${time.getMonth()}/${time.getFullYear()}`
            }
            console.log(msg)
            this.$store.dispatch('addInfo', {info:msg, id: this.$route.query.id})
        }
    },
}
</script>