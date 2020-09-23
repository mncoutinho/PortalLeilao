<template>
    <v-main>
        <v-row justify="center">
            <v-window>
                <!--Primeira fase-->
                <v-window-item>
                        <v-card
                         max-width="30%" 
                         min-width="450" 
                         class="mb-12 pa-10"  
                         :elevation="10" 
                         width="50%"
                        >
                            <v-row justify="center" class="pa-8">
                                <h1 class="brown--text">Cadastre-se</h1>
                            </v-row>
                            <v-form
                            ref="form"
                            :lazy-validation="lazy"
                            >
                                <!--Email-->
                                <h4 class="brown--text">E-mail:</h4>
                                <v-text-field
                                required
                                outlined
                                autocomplete="true"
                                type="email"
                                placeholder="exemplo@email.com"
                                color="brown"/>
                                <!--senha-->
                                <h4 class="brown--text">Senha:</h4>
                                <v-text-field
                                required
                                outlined
                                type="password"
                                autocomplete="true"
                                placeholder="**********"
                                color="brown"
                                />
                                <!--Confirmar senha-->
                                <h4 class="brown--text">Confirmar Senha:</h4>
                                <v-text-field
                                required
                                outlined
                                type="password"
                                autocomplete="true"
                                placeholder="**********"
                                color="brown"
                                />
                            </v-form>
                        </v-card>
                <!--</v-window-item>
                    Segunda fase
                <v-window-item>-->
                    <v-card
                    max-width="30%" 
                    min-width="450" 
                    class="mb-12 pa-10"  
                    :elevation="10" 
                    width="50%"
                    >
                        <v-row justify="center" class="pa-8">
                            <h1 class="brown--text">Dados Pessoais</h1>
                        </v-row>
                        <v-form
                        ref="form"
                        :lazy-validation="lazy"
                        >
                            <!--name-->
                            <h4 class="brown--text">Nome:</h4>
                            <v-text-field
                            required
                            outlined
                            color="brown"
                            >
                            </v-text-field>
                            <!--CPF-->
                            <h4 class="brown--text">CPF:</h4>
                            <v-text-field
                            maxlength="14"
                            v-mask="['###.###.###-##']"
                            placeholder="123-456-789-10"
                            color="brown"
                            required
                            outlined
                            ></v-text-field>
                            <!--telephone-->
                            <h4 class="brown--text">Telefone:</h4>
                            <v-text-field
                            placeholder="(12)934567890"
                            v-mask="['(##) #####-####' || '(##) ####-####']"
                            color="brown"
                            required
                            outlined
                            >
                            </v-text-field>
                        </v-form>
                    </v-card>
                <!--</v-window-item>
                Terceira fase
                <v-window-item>-->
                    <v-card
                    max-width="30%" 
                    min-width="450" 
                    class="mb-12 pa-10"  
                    :elevation="10" 
                    width="50%"
                    >
                        <v-row justify="center" class="pa-8">
                            <h1 class="brown--text">Endereço</h1>
                        </v-row>
                        <v-form
                        ref="form"
                        :lazy-validation="lazy"
                        >
                            <!--CEP-->
                            <h4 class="brown--text">CEP:</h4>
                            <v-text-field
                            maxlength="9"
                            v-mask="['#####-###']"
                            placeholder="12345-678"
                            color="brown"
                            required
                            outlined/>
                            <!--Endereço-->
                            <h4 class="brown--text">Endereço:</h4>
                            <v-text-field
                            placeholder="Rua. 20 "
                            color="brown"
                            required
                            outlined
                            />
                            <!--Complemento-->
                            <h4 class="brown--text">Complemento:</h4>
                            <v-text-field
                            placeholder="Zona Sul"
                            color="brown"
                            outlined
                            required/>
                            <!--Rua-->
                            <h4 class="brown--text">Bairro:</h4>
                            <v-text-field
                            placeholder="Leblon"
                            color="brown"
                            required
                            outlined
                            />
                            <!--Rua-->
                            <h4 class="brown--text">Cidade:</h4>
                            <v-text-field
                            placeholder="Rio de Janeiro"
                            color="brown"
                            required
                            outlined
                            />
                            <!--uf-->
                            <h4 class="brown--text">UF:</h4>
                            <v-select
                            label="UF"
                            color="brown"
                            required
                            outlined
                            />
                        </v-form>
                    </v-card>
                </v-window-item>
            </v-window>
        </v-row>
    </v-main>
</template>
<script>
import {mask} from 'vue-the-mask'
export default {
    directives: {mask},
}
</script>