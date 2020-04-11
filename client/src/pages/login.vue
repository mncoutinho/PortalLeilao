<template >
    <v-content>
      
      <v-row>
        <v-card class="mx-auto mb-12" :elevation="12">
          <v-flex class="d-flex justify-center" >
            <v-card 
            class="col-md-10"
            max-width="400"
            color="indigo"
            height="450px"
            width="400px"
            >
              
              <v-row class="fill-height ">
               <v-card-title  class=".display-3 white--text text-center font-weight-medium" >
                  
                  SEJA BEM-VINDO !
                    
                </v-card-title>
                <v-card-text class="text-primary white--text text-justify" sm="4" >
                  Todos estamos ansiosos por conhecer você melhor, tanto ao nível profissional como pessoal. Aqui somos como uma família e queremos que se sinta desde já parte dela. Não temos dúvidas que você trará muitas valências e que aprenderemos muito com você.
                </v-card-text>
                </v-row>
            </v-card>

            <v-card
            max-width="400"
            color="white "
            height="450px"
            width="400px"
            
            >
            <v-row class="mt-10">
                <v-card-title class="display-3 blue--text text-center font-weight-minimun" style="margin-left:3%">Conecte-se</v-card-title>
            </v-row>

              <v-card-text class="col-md-11 mr--12" >
                <v-form color="blue">
                  <v-text-field
                    label="E-mail"
                    name="login"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Senha"
                    name="password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>

            <v-row class="ml-3">  
              <v-checkbox></v-checkbox>
              <p class="mt-5">Mantenha-se online</p>
            </v-row>

              <v-card-actions>
                <v-spacer/>
                <v-btn class="col-12" color="primary">Entrar</v-btn>
              </v-card-actions>
            </v-card>
            
          </v-flex>
        </v-card>
      </v-row>
    </v-content>
</template>


<script>

export default {
  data: () => ({
    drawer: null
  })
}
</script>