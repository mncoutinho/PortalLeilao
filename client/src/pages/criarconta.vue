<template>
    <v-content>
        <v-row justify="center">
           <v-card max-width="30%" class="mb-12 pa-12"  :elevation="10" width="50%" >
               <v-flex class="d-flex">
                <!--outro-->
                    <v-card 
                    width="100%"
                    color="white"
                    :elevation="0"
                    >
                        <v-window v-model="step">
                            <!--fase 1-->
                            <v-window-item :value="1">
                                <!--title-->
                                <v-row justify="center" class="mt-6 mb-3">
                                    <h2>Entre com,</h2>
                                </v-row>
                                <!--icon-->
                                <v-row justify="center">
                                    <v-col
                                    :key="i"
                                    v-for="i in i"
                                    cols="3"
                                    >
                                        <v-row justify="space-around">
                                            <v-icon size="50" color="#422321" > {{i.icon}} </v-icon>
                                            <v-icon size="50" color="#422321" > {{i.icon2}} </v-icon>  
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row 
                                justify="center"
                                class="mt-12">
                                    <h3>Ou :</h3>
                                </v-row>
                                <v-row justify="center">
                                    <v-col
                                    :key="i"
                                    v-for="i in i"
                                    cols="10"
                                    >
                                        <!--Email-->
                                        <v-text-field
                                        v-model="email"
                                        :rules="[
                                            () => !!email || 'Este campo é necessario',
                                            addressCheck
                                        ]"
                                        label="E-mail"
                                        placeholder="exemplo@gmail.com"
                                        required
                                        color="green"
                                        prepend-icon="fas fa-user">
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
                                        prepend-icon="fas fa-unlock"
                                        :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                                        @click:append="show1 = !show1">
                                        </v-text-field>
                                    </v-col>
                                </v-row>    
                            </v-window-item>

                            <!--fase 2-->
                            <v-window-item :value="2">
                                <!--title-->
                                <v-row justify="center" class="mt-6 mb-3">
                                    <h2>Dados</h2>
                                </v-row>
                                <!--dados-->
                                    <v-row justify="center">
                                        <v-col
                                        cols="10"
                                        >
                                        <!--Comfirm Password-->
                                            <v-text-field
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
                                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                            @click:append="show2 = !show2">
                                            >
                                            </v-text-field>
                                        <!--name-->
                                            <v-text-field
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
                                            v-model="CPF"
                                            maxlength="11"
                                            label="CPF"
                                            placeholder="123-456-789-10"
                                            class="cpf"
                                            required
                                            ></v-text-field>
                                        <!--telephone-->
                                            <v-text-field
                                            v-model="tel"
                                            :rules="[() => !!tel || 'Este campo é necessario']"
                                            :error-messages="errorMessages"
                                            label="Telefone"
                                            placeholder="(12)934567890"
                                            required
                                            >
                                            </v-text-field>    
                                        </v-col>
                                    </v-row>
                            </v-window-item>
                            <!--fase 3-->
                            <v-window-item :value="3">
                                <!--title-->
                                <v-row justify="center" class="mt-6 mb-3">
                                    <h2>Endereço</h2>
                                </v-row>
                                <!--dados-->
                                <v-row justify="center">
                                    <v-col
                                    cols="10"
                                    >
                                    <!--CEP-->
                                        <v-text-field  
                                            v-model="CEP"
                                            maxlength="8"
                                            label="CEP"
                                            placeholder="12345-678"
                                            class="cep"
                                            required
                                        ></v-text-field>
                                    <!--Adress-->
                                        <v-text-field  
                                            v-model="Endereço"
                                            label="Endereço"
                                            placeholder="Rua. 20 "
                                            class="Endereço"
                                            required
                                        ></v-text-field>
                                    <!--Complement-->
                                        <v-text-field  
                                            v-model="CEP"
                                            label="Complemento"
                                            placeholder="Zona Sul"
                                            class="Complemento"
                                            required
                                        ></v-text-field>
                                    <!--Street-->
                                        <v-text-field  
                                            v-model="Bairro"
                                            label="Bairro"
                                            placeholder="Rio de Janeiro"
                                            class="Bairro"
                                            required
                                        ></v-text-field>
                                    <!--Street-->
                                        <v-text-field  
                                            v-model="Cidade"
                                            label="Cidade"
                                            placeholder="Rio de Janeiro"
                                            class="Cidade"
                                            required
                                        ></v-text-field>
                                    <!--uf-->
                                        <v-select
                                        :items="UF"                                        
                                        label="UF"
                                        required
                                        ></v-select>    
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
                                    color="#422321"
                                    to="/"
                                    v-if="step === 1"
                                    >
                                        voltar
                                    </v-btn>
                                    <!--back to item-->
                                    <v-btn
                                    text
                                    large
                                    depressed
                                    color="#422321"
                                    @click="step--"
                                    :hidden="step === 1">
                                        voltar
                                    </v-btn>
                                    <v-spacer/>
                                    <!--next-->
                                    <v-btn
                                    color="#422321"
                                    class="white--text"
                                    depressed
                                    large
                                    :hidden="step === 3"
                                    @click="step++">
                                        Proximo
                                    </v-btn>
                                    <!--next page-->
                                    <v-btn
                                    color="#422321"
                                    class="white--text"
                                    depressed
                                    large
                                    v-if="step === 3"
                                    to="/"
                                    >
                                        Finalizar
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
            i:[ {icon:'fab fa-facebook-f',icon2:'fab fa-google'},],
            UF: ['SP', 'RJ', 'MG', 'PR', 'MN'], 
            show1: false,
            show2: false,           
        }
    }
}
</script>