<template>
    <v-content>
        <v-row justify="center">
           <v-card color="grey" max-width="800" class="mb-12"  :elevation="10">
               <v-flex class="d-flex ">
                <v-card
                width="250px"
                height="530px"
                color="blue"
                 
                >

                </v-card >
                    <v-card 
                    width="100%"
                    height="530px"
                    color="white"
                    >
                        <div class="col-md-12">
                            
                        <v-text-title
                        class="blue--text "
                        >
                            CRIE JÁ A SUA CONTA
                        </v-text-title>
                        <v-card-text>
                            <!--NOME COMPLETO-->
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
                            <!--EMAIL-->
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
                                

                            >
                            
                            </v-text-field>
                            <!--SENHA-->    
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
                            >
                            </v-text-field>
                            <!--COMFIRMAR SENHA-->
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
                                required
                            >
                            </v-text-field>
                            
                                <v-checkbox 
                                label="aceitar os termos de acesso"
                                >

                                </v-checkbox>

                            <v-flex class="d-flex ">
                                <v-btn 
                                 
                                @click="resetForm"
                                v-on="on"
                                text>
                                Cancelar
                                </v-btn>
                            <v-spacer/>
                                <v-btn color="primary"  @click="submit">ENVIAR</v-btn>
                            </v-flex>
                        </v-card-text>

                        </div>
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