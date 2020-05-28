<template>
    <v-content>
        <v-row justify="center">
           <v-card color="grey" max-width="500" class="mb-12"  :elevation="10" width="50%">
               <v-flex class="d-flex ">
                <!--outro-->
                    <v-card 
                    width="100%"
                    color="white"
                    >
                        <v-window v-model="step">
                            <!--fase 1-->
                            <v-window-item :value="1">
                                <!--title-->
                                <v-row 
                                justify="center"
                                class="mt-12">
                                    <h3>Entre Com :</h3>
                                </v-row>
                                <!--icon-->
                                <v-row justify="center">
                                    <v-col
                                    :key="i"
                                    v-for="i in i"
                                    cols="3"
                                    >
                                        <v-row justify="space-around">
                                            <v-icon size="50"> {{i.icon}} </v-icon>
                                            <v-icon size="50"> {{i.icon2}} </v-icon>  
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row 
                                justify="center"
                                class="mt-12">
                                    <h3>Ou, crie uma agora mesmo :</h3>
                                </v-row>
                                <v-row justify="center">
                                    <v-col
                                    :key="i"
                                    v-for="i in i"
                                    cols="10"
                                    >
                                        <!--Email-->
                                        <v-text-field
                                        ref="e-mail"
                                        v-model="email"
                                        :rules="[
                                            () => !!email || 'Este campo é necessario',
                                            addressCheck
                                        ]"
                                        label="E-mail"
                                        placeholder="exemplo@gmail.com"
                                        required
                                        color="green">
                                        </v-text-field>
                                        <!--Password-->   
                                        <v-text-field
                                        ref="nome"
                                        v-model="senha"
                                        :rules="[
                                            () => !!senha || 'Este campo é necessario',
                                            () => !!senha && senha.length >= 5 || 'Digite no minimo 5 caracter',
                                            addressCheck
                                        ]"
                                        :error-messages="errorMessages"
                                        :type="'password'"
                                        label="Senha"
                                        placeholder="**********"
                                        required
                                        color="green"
                                        >
                                        </v-text-field>
                                        <!--Comfirm Password-->
                                        <v-text-field
                                        ref="nome"
                                        v-model="senha"
                                        :rules="[
                                            () => !!senha || 'Este campo é necessario',
                                            () => !!senha && senha.length >= 5 || 'Digite no minimo 5 caracter',
                                            addressCheck
                                        ]"
                                        :error-messages="errorMessages"
                                        :type="'password'"
                                        label="Confirme a sua senha"
                                        placeholder="**********"
                                        color="green"
                                        required
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>    
                            </v-window-item>

                            <!--fase 2-->
                            <v-window-item :value="2">
                                <!--title-->
                                <v-row 
                                justify="center"
                                class="mt-12">
                                    <h3>Dados Cadastrais :</h3>
                                </v-row>
                                <!--dados-->
                                    <v-row justify="center">
                                        <v-col
                                        cols="10"
                                        >
                                        <!--name-->
                                            <v-text-field
                                            ref="nome"
                                            v-model="nome"
                                            :rules="[() => !!nome || 'Este campo é necessario']"
                                            :error-messages="errorMessages"
                                            label="Nome Completo"
                                            placeholder="Antonio Luiz da Silva"
                                            required
                                            >
                                            </v-text-field>
                                        <!--CPF-->
                                            <v-text-field  
                                            ref="CPF"
                                            v-model="CPF"
                                            maxlength="11"
                                            label="CPF"
                                            placeholder="123-456-789-10"
                                            class="cpf"
                                            required
                                            ></v-text-field>    
                                        </v-col>
                                    </v-row>
                            </v-window-item>
                            <!--fase 3-->
                            <v-window-item :value="3">
                                <!--title-->
                                <v-row 
                                justify="center"
                                class="mt-12">
                                    <h3>Endereço</h3>
                                </v-row>
                                <!--dados-->
                                <v-row justify="center">
                                    <v-col
                                    cols="10"
                                    >

                                        <v-text-field  
                                            ref="CEP"
                                            v-model="CEP"
                                            maxlength="8"
                                            label="CEP"
                                            placeholder="12345-678"
                                            class="cep"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                            <!--Button-->
                            <v-row align="end" justify="center">
                                <v-card-actions>
                                    <!--back to home-->
                                    <v-btn
                                    text
                                    large
                                    depressed
                                    to="/"
                                    :hidden="step === 3 && 2"
                                    >
                                        voltar
                                    </v-btn>
                                    <!--back to item-->
                                    <v-btn
                                    text
                                    large
                                    depressed
                                    @click="step--"
                                    :hidden="step === 1">
                                        voltar
                                    </v-btn>
                                    <v-spacer/>
                                    <!--next-->
                                    <v-btn
                                    color="primary"
                                    depressed
                                    large
                                    @click="step++">
                                        Proximo
                                    </v-btn>   
                                </v-card-actions>
                            </v-row>
                        </v-window> 
                    </v-card>  
               </v-flex>     
            </v-card> 
        </v-row>
    </v-content>
</template>


<script>

export default {
    
    data() {
        return{
            step: 1,
            i:[
                {icon:'fab fa-facebook-f',icon2:'fab fa-google'},
            ],
        }
    }
}
</script>