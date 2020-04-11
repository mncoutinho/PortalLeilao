<template>
  <v-card
  height="500px"
  :elevation="0"
  >
    <v-toolbar flat color="white mt-6" >
        <v-toolbar-title class="mx-auto indigo--text title">INFORMAÇOES DO USUARIO</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical>
        <v-tab>
          <v-icon left>mdi-account</v-icon>
          dados
        </v-tab>
        <v-tab>
          <v-icon left>mdi-lock</v-icon>
          senha
        </v-tab>
        <v-tab>
          <v-icon left>mdi-access-point</v-icon>
          HISTORICO
        </v-tab>
        <v-tab>
          <v-icon left>mdi-access-point</v-icon>
          informaçoes
        </v-tab>
        <!--ITEM 1-->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-row>
                  <v-col cols="12" sm="6" >
                      <v-text-field
                        value="Joao Joao Joao"
                        label="NOME COMPLETO :"
                        disabled
                        />
                        <v-text-field
                        value="123-***-***-01"
                        label="CPF :"
                        disabled
                        />
                        <v-text-field
                        value="Joaozinho@joao.com"
                        label="EMAIL :"
                        disabled
                        />
                        <v-text-field
                        value="24"
                        label="IDADE :"
                        disabled
                        />    
                  </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!--ITEM 2-->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-text-field
                value="*********************"
                label="senha :"
                disabled
                />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!--ITEM 1-->
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