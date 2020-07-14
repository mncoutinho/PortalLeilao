<template>
  <v-app>
      <v-card 
      flat 
      width="100%"
      >
        <v-row justify="space-around">
          <v-card
          width="23%"
          :key=n
          v-for="n in 25"
          >
            <v-img  src="https://cdn.vuetifyjs.com/images/cards/store.jpg"/>
              <v-row align="end">
                <v-card flat>
                  <v-card-title>Titulo</v-card-title>
                  <v-card-subtitle>Descriçao:</v-card-subtitle>
                    <v-card-subtitle>
                      <v-list>
                        <v-list-item-content>
                          <v-list-item-subtitle>Data de Abertura: 24/07</v-list-item-subtitle>
                          <v-list-item-subtitle>Data de Abertura: 24/07</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list>
                    </v-card-subtitle>
                    <v-card-text class="title">Lotes: 25</v-card-text>
                </v-card>
              </v-row>
            </v-card>
        </v-row>
      </v-card> 
  </v-app>
</template>

<script>
export default {

}
</script>
