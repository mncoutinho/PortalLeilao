<template>
  <v-content>
      <v-row class="d-flex justify-center">
        <v-card width="50%" flat>
            <v-row class="d-flex justify-center" dense>
                <h1>PESQUISA</h1>
            </v-row>
            <v-row class="d-flex flex-column">
                <v-col cols="12" >
                    <v-autocomplete
                    outlined
                    chips
                    hide-no-data
                    single-line
                    hide-selected
                    multiple
                    clearable
                    color="bronw"
                    v-model="pesquisa"
                    :items="['bronze','Prata', 'Ouro']"
                    append-icon="mdi-magnify"
                    placeholder="Ouro..."
                    ></v-autocomplete>
                </v-col>
                <v-col cols="12">
                    <v-list two-line>
                        <template v-for="(item, index) in itens">
                            <v-list-item
                            :key="item.length">
                                <v-list-item-avatar>
                                    <v-img :src="item.foto"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="title" v-text="item.nome"></v-list-item-title>
                                    <v-list-item-subtitle class="subtitle-2" v-text="item.detalhes"></v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider
                            :key="index.length"/>
                        </template>
                    </v-list>
                </v-col>
            </v-row>
        </v-card>
    </v-row>
  </v-content>
</template>

<script>
export default {
    data(){
        return{
            pesquisa:undefined,
            itens:[
                {foto:' https://cdn.vuetifyjs.com/images/lists/1.jpg',nome:'nome',detalhes:'detalhes'},
                {foto:' https://cdn.vuetifyjs.com/images/lists/1.jpg',nome:'nome',detalhes:'detalhes'},
                {foto:' https://cdn.vuetifyjs.com/images/lists/1.jpg',nome:'nome',detalhes:'detalhes'},
                {foto:' https://cdn.vuetifyjs.com/images/lists/1.jpg',nome:'nome',detalhes:'detalhes'},
            ]
        }
    }
}
</script>