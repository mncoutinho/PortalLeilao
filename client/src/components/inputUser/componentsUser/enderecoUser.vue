<template>
  <v-app>
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
  </v-app>
</template>

<script>
export default {

}
</script>
