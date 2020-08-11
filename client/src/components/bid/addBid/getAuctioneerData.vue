<template>
  <div>
    <h4
      class="brown--text"
      style=" margin-top: 100px; margin-bottom: 30px; text-align:center; "
    >Leiloeiro</h4>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
          name="title"
          label="Nome do leiloeiro*"
          v-model="leiloeiro.displayname"
          @change="$emit('formLeiloeiro', leiloeiro)"
        />
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
          name="title"
          label="E-mail do leiloeiro*"
          v-model="leiloeiro.email"
          @change="$emit('formLeiloeiro', leiloeiro)"
        />
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
          name="title"
          label="Telefone do leiloeiro*"
          v-model="leiloeiro.phoneNumber"
          @change="$emit('formLeiloeiro', leiloeiro)"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      leiloeiro: (state) => state.userApp.user,
    }),
  },
};
</script>
