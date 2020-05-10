<template>
  <v-card
  height="1000px"
  :elevation="0"
  >
    <v-toolbar flat color="white mt-6" >
          <v-toolbar-title class="display-1" color="#422321">MINHA CONTA</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical color="#422321" >
        <v-tab >
          <v-icon left >mdi-account</v-icon>
          dados
        </v-tab>
        <v-tab>
          <v-icon left>mdi-lock</v-icon>
          Endereço
        </v-tab>
        <v-tab>
          <v-icon left>mdi-access-point</v-icon>
          Cartoes
        </v-tab>
        <v-tab>
          <v-icon left>mdi-access-point</v-icon>
          informaçoes
        </v-tab>
        <v-tab>
          <v-icon left>mdi-access-point</v-icon>
          Duvidas
        </v-tab>
        <!--ITEM 1-->
        <v-tab-item>
              <v-row justify="center" >
                  <!--INFORMAÇOES-->
                  <v-col cols="12" sm="6">
                    <v-row justify="center" class="mb-12"> 
                      <h1>Perfil</h1>
                    </v-row>
                    <!--FOTO DO USUARIO-->
                      <v-row justify="center"> 
                          <v-avatar color="#422321" size="280">
                              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                            </v-avatar>
                      </v-row>
                    <!--dados do usuario-->
                    <div class="mt-12">  
                      <v-text-field
                          value="Joao Joao Joao"
                          label="NOME COMPLETO :"
                        />
                        <v-text-field
                          value="123-***-***-01"
                          label="CPF :"
                          disabled
                        />
                        <v-text-field
                          value="Joaozinho@joao.com"
                          label="EMAIL :"
                        />
                        <v-text-field
                          value="24"
                          label="IDADE :"
                        />
                        <v-text-field
                          value="*************"
                          label="SENHA :"
                          disabled
                        />
                        <v-row justify="center">
                          <v-btn outlined color="#422321" >Alterar senha</v-btn>
                        </v-row> 
                      </div>          
                  </v-col>
              </v-row>
        </v-tab-item>
        <!--ITEM 2-->
        <v-tab-item>
          <!--TITULO-->
          <v-row justify="center" class="mb-12"> 
              <h1>Endereço</h1>
          </v-row>
          <!--conteudo-->
          <v-row justify="center">
            <v-col cols="12" sm="6">
                <v-text-field
                  value="Rue 1 "
                  label="ENDEREÇO :"
                />
                <v-text-field
                  value="entre a rua 0 e rua 2"
                  label="COMPLETEMENTO :"
                />
                 <v-text-field
                  value="12345-678 "
                  label="CEP :"
                />  
                <v-text-field
                  value="Dubai "
                  label="Bairro:"
                />
                <v-text-field
                  value="Rio de Janeiro "
                  label="Cidade:"
                /> 
                <v-text-field
                  value="Rio de Janeiro "
                  label="Estado:"
                />    
            </v-col>
          </v-row>
        </v-tab-item>
        <!--ITEM 3-->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>
  
              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!--ITEM 4-->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>
  
              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>