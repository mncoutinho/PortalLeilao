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
                        :color="btn.color"
                        :class="btn.type"
                        x-large
                    >
                        publicar
                    </v-btn>
            </v-row>
        </v-col>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            text:null
        }
    },
    methods: {
        postMSG(text){
            const time = new Date();
            const msg = {
                text: text,
                time: `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}-${time.getHours()}:${time.getMinutes()}`
            }
            this.$store.dispatch('addInfo', {info:msg, id: this.item.id})
        }
    },
    computed:{
        ...mapState({
            layout: state => state.form,
            item: state => state.itemApp.item,
            btn: state => state.button.buttonC
        })
    }
}
</script>