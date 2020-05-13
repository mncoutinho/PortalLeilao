<template>
    <v-content>
        <v-row justify="center">
           <v-card color="grey" max-width="1000" class="mb-12"  :elevation="10" width="50%">
               <v-flex class="d-flex ">
                <!--outro-->
                    <v-card 
                    width="100%"
                    height="530px"
                    color="white"
                    >
                        <v-stepper v-model="e6" vertical>
                            <!-- Conteudo 1-->
                            <v-stepper-step :complete="e6 > 1" step="1">
                                Primeira Fase
                                <small>Fase 1</small>
                            </v-stepper-step>
                            <v-stepper-content step="1">
                                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                                <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
                                <v-btn text>Cancel</v-btn>
                            </v-stepper-content>
                            <!-- Conteudo 2-->
                            <v-stepper-step :complete="e6 > 2" step="2">Fase 2</v-stepper-step>
                            <v-stepper-content step="2">
                                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                                <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                                <v-btn text>Cancel</v-btn>
                            </v-stepper-content>
                            <!-- Conteudo 3-->
                            <v-stepper-step :complete="e6 > 3" step="3">Fase 3</v-stepper-step>
                            <v-stepper-content step="3">
                                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                                <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                                <v-btn text>Cancel</v-btn>
                            </v-stepper-content>
                            <!-- Conteudo 4-->
                            <v-stepper-step step="4">Fase 4</v-stepper-step>
                            <v-stepper-content step="4">
                                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                                <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
                                <v-btn text>Cancel</v-btn>
                            </v-stepper-content>
                            </v-stepper>     
                    </v-card>  
               </v-flex>     
            </v-card> 
        </v-row>
    </v-content>
</template>

<script>

export default {
    
}
</script>