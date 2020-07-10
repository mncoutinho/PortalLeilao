<template>
    <!--BARRA LATERAL-->
                <v-navigation-drawer
        flat
        tile
        heigth=auto
        class="ml-4 text-left hidden-sm-only hidden-xs-only"
    >
        <v-col cols="12" md="12">
            <h3>Categorias</h3>
            <v-text-field
                v-model="pesquisar"

                label="Pesquisar"
                color="#422321"
            />
            <v-btn
                append-icon="mdi-magnify"
                v-on:click="busca(pesquisar)"
                            />
                        </v-col>
        <v-divider />
        <v-list>
            <!--Primeiro grupo-->
                        <v-list-item-group>
                <v-list-item-title class="ml-4">AVALIAÇÃO</v-list-item-title>
                <v-col>
                    <v-row>
                        <v-rating
                            background-color="orange "
                            color="orange"
                            medium
                            readonly
                        ></v-rating>
                    </v-row>
                </v-col>
                <v-divider />
            </v-list-item-group>
            <!--Segundo grupo-->

                        <!--Terceiro grupo-->
                        <v-list-item-group>
                <v-list-item-title class="ml-4">PREÇO</v-list-item-title>
                <v-col cols="12" md="12">
                    <v-text-field
                        label="Valor Mínimo"
                        max="25000"
                        min="100"
                        step="100"
                        style="width: 250px"
                        type="number"
                                    @keydown="false"
                                ></v-text-field>

                <v-text-field
                    label="Valor maximo"
                    max="25000"
                    min="100"
                    step="100"
                    style="width: 250px"
                    type="number"
                                    @keydown="false"
                                ></v-text-field>
                            </v-col>
                        </v-list-item-group>
                    </v-list>
                    
                </v-navigation-drawer>
            
</template >

    <script>
    import axios from 'axios';
        export default {
            data(){
        return{
            pesquisar:"",
            obj:[]
        }
    },
    methods:{
            busca(item){
                item
                const data = this.obj;

                for (let i = 0; i < data.length;i++) {
                    var result;
                    //busca por nome 
                    if(item == data[i].name){
                        result = data[i];                        
                        break
                    }
                    // busca por id
                    if(item == data[i].id){
                        result = data[i];
                        break
                    }
                    // busca por preco
                    if(item == data[i].initialbid){
                        result = data[i];
                        break
                    }

                    // busca por descricao
                    if(item == data[i].description){
                        result = data[i];
                        break
                    }

                }

                if(result){
                    alert("encontrado "+ result.name)
                }else{
                    alert("Item n encontrado")
                }
                
        }
    },
    created(){
        axios({
            method:'get',
            url:'https://us-central1-portalleilao-26290.cloudfunctions.net/item/getAllItem'
        }).then(doc => {
            this.obj = doc.data;
        }).catch(error => console.log(error))     
        
    }
}
</script>    