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
                        class="white--text"
                        color="#a64e4b"
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
export default {

}
</script>