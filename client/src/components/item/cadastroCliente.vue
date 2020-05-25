<template> 
    <v-card 
        width="50%"
        height="530px"
        color="white"
    >
        <div class="col-md-12">                        
            <v-text-title
                class="blue--text headline"
            />                            
                <v-card-text>
                    <!--NOME COMPLETO-->
                    <v-text-field
                        ref="nome"
                        v-model="name"
                        :rules="[() => !!name || 'Este campo é necessario']"
                        :error-messages="errorMessages"
                        label="Nome Completo"
                        placeholder="Antonio Luiz da Silva"
                        required
                    />
                            
                    <!--EMAIL-->
                    <v-text-field
                        ref="e-mail"
                        v-model="email"
                        :rules="[() => !!email || 'Este campo é necessario',addressCheck]"
                        label="E-mail"
                        placeholder="exemplo@gmail.com"
                        required
                    />
                        
                    <!--CPF-->
                            
                    <v-text-field  
                        ref="CPF"
                        v-model="CPF"
                        :rules="[() => !!email || 'Este campo é necessario',addressCheck]"
                        maxlength="11"
                        label="CPF"
                        placeholder="123-456-789-10"
                        class="cpf"
                        required
                    />
                            
                    <!--SENHA-->    
                    <v-text-field
                        ref="nome"
                        v-model="senha"
                        :rules="[
                            () => !!senha || 'Este campo é necessario',
                            () => !!senha && senha.length >= 5 || 'Digite no minimo 5 caracter',addressCheck
                        ]"
                        :error-messages="errorMessages"
                        :type="'password'"
                        label="Senha"
                        placeholder="**********"
                        required
                        />
                        
                        <!--COMFIRMAR SENHA-->
                        <v-text-field
                            ref="nome"
                            v-model="senhaConfirmada"
                            :rules="[
                                () => !!senhaConfirmada || 'Este campo é necessario',
                                () => !!senhaConfirmada !== senha || 'A senha nao e igual',addressCheck
                            ]"
                            :error-messages="errorMessages"
                            :type="'password'"
                            label="Confirme a sua senha"
                            placeholder="**********"
                            required
                        />
                           
                        <v-checkbox 
                            label="aceitar os termos de acesso"
                        />

                        <v-flex class="d-flex ">
                            <v-btn          
                                @click="resetForm"
                                v-on="on"
                                text>
                                Cancelar
                            </v-btn>
                            <v-spacer/>
                            <v-btn color="primary"  v-on:click="cadastrar(name,email,CPF,senha,senhaConfirmada)">ENVIAR</v-btn>
                        </v-flex>
                    </v-card-text>

        </div>
    </v-card>
    
</template>

<script>
    import axios from "axios";
    export default{
        data(){
            return{
                name:"",
                email:"",
                CPF:"",
                senha:"",
                senhaConfirmada:"" 
            }
        },
        methods:{
            cadastrar(name,email,CPF,password,senhaConfirmada){                
                if(password == senhaConfirmada){
                    const user = {
                        name,
                        email,
                        CPF,
                        password,
                        phone : "null",
                        address : "null"
                    };

                    axios({
                        method: "post",
                        url:"https://us-central1-portalleilao-26290.cloudfunctions.net/login/createUser",
                        data: {
                            access: "stand",
                            accountClass: "plan1",
                            name: user.name,
                            email: user.email,
                            cpf: user.CPF,
                            password: user.password,
                            phone: user.phone,
                            address: user.address
                        }
                    }).then(res => alert(res.name," cadastrado com sucesso!"));

                    
                }else{
                    alert("As senhas n condizem");
                }
            },
        },

    }
</script>
