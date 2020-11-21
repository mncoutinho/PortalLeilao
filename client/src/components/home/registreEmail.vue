<template>
    <div>
        <v-row>
            <v-col align="center" class="mt-4">
                <v-col cols="6">
                    <p class="display-1">Fique por dentro das ultimas novidades.</p>
                        <v-divider/>
                </v-col>
                <v-col cols="10" sm="5" class="mt-6">
                    <v-row>   
                        <v-text-field
                        outlined
                        color="#a64e4b"
                        placeholder="Email">
                        </v-text-field>
                    </v-row>
                        <v-btn
                        :color="btn.color"
                        :class="btn.type"
                        large
                        rounded
                        v-text="'Enviar'"
                        >  
                        </v-btn>
                </v-col> 
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState({
            btn: state => state.button.buttonD
        })
    }
}
</script>