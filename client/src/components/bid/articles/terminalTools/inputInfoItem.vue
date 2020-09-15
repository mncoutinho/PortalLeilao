<template>
    <div>
        <v-col cols="10">
            <v-row>
            <v-textarea
                v-model="text" 
                outlined 
                label="digite aqui"
                @keyup.enter="postMSG(text)"
                height="40px"
            />
                    <v-btn
                        @click="postMSG(text)"
                        color="brown"
                        class="white--text ml-12"
                        x-large
                    >
                        publicar
                    </v-btn>
            </v-row>
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
                time: `${time.getDay()}/${time.getMonth()}/${time.getFullYear()}-${time.getHours()}:${time.getMinutes()}`
            }
            console.log(msg)
            this.$store.dispatch('addInfo', {info:msg, id: this.$route.query.id})
        }
    },
}
</script>