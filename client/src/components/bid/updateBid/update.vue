<template>
  <v-app>
      <v-card flat width="100%">
        <v-row  xs12 sm6 offset-sm3>
            <v-flex :class="layout.flex">
                <h1 :class="layout.title">Bem-vindo leiloeiro</h1>
                
                    <v-form :class="layout.form">
                        <v-col 
                        :class="layout.col" 
                        :cols="layout.cols">
                            <!--nome do leilão-->
                            <v-text-field
                            v-model="leilao.name" 
                            name="title" 
                            label="Nome do leilão*"/>
                            <!--carregar foto-->
                            <v-file-input
                                v-model="image"
                                :reverse="true"
                                prepend-icon="mdi-camera"
                                multiple
                                show-size
                                counter
                                label="Banner do leilão*"
                                @change="onUpload"
                            />
                            <!--imagem-->
                            <v-row justify="center">
                                <v-img
                                    :src="leilao.imgUrl"
                                    max-width="600px"
                                    heigth="400px"
                                    />
                            </v-row>  
                            <!--imagem- mostrar-->
                            <v-text-field 
                            v-model="leilao.imgUrl"
                            class="col-md 2"
                            label="Imagens"
                            disabled />
                            <!--local-->
                            <v-text-field
                            v-model="leilao.local" 
                            name="title" 
                            label="Local do leilão*" />
                            <!--descriçao-->
                            <v-textarea
                            v-model="leilao.description" 
                            name="title" 
                            label="Descricao do Leilão*"/>
                            <!--data-->
                            <v-flex row>
                                <v-col xs12 sm6 offset-sm3>
                                        <h4 class="brown--text">Data de abertura</h4>
                                        <v-date-picker v-model="leilao.startsOn" color="#422321" class="col-12" />
                                </v-col>
                                <v-col xs12 sm6 offset-sm3>
                                    <h4 class="brown--text">Data de fechamento</h4>
                                    <v-date-picker v-model="leilao.closedAt" color="#422321" class="col-12"/>
                                </v-col>
                            </v-flex>
                            <!--Leiloeiro-->
                            <h3 :class="layout.title">Leiloeiro</h3>
                            <!--nome-->
                            <v-text-field
                                v-model="leilao.organizer"
                                name="title"
                                label="Nome"
                            />
                            <!--email-->
                            <v-text-field
                                v-model="leilao.email"
                                name="title"
                                label="E-mail"
                            />
                            <v-text-field
                                v-model="leilao.tel"
                                name="title"
                                label="Telefone*"
                            />
                            <!--Termos-->
                            <h3 :class="layout.title">Leiloeiro</h3>
                            <!--frete-->
                            <v-textarea
                                name="title"
                                label="Termos de Frete"
                                v-model="termos.frete"
                            />
                            <!--pagamento-->
                            <v-textarea
                                name="title"
                                label="Termos de Pagamentos"
                                v-model="termos.pagamento"
                            />
                            <v-textarea
                                name="title"
                                label="Termos & Condições"
                                v-model="termos.condicoes"   
                            />
                            <!--botão para confirmar-->
                            <v-btn
                                :class="layout.btn.type"
                                :color="layout.btn.color"
                                v-on:click="putLeilao(leilao);"
                            >
                                Confirmar
                            </v-btn>
                        </v-col>
                    </v-form>
            </v-flex>
        </v-row>
      </v-card>
  </v-app>
</template>

<script>
import firebase from "firebase";
import {mapState} from 'vuex'
export default {
    data(){
        return{
            image:[],
            termos:{
                frete:'',
                pagamento:'',
                condicoes:'',
            }
        }
    },
    computed: {
        ...mapState({
                id: state => state.userApp.user.uid,
                leilao: state => state.bidApp.bid,
                layout: state => state.form
            })
    },
    methods:{
         async onUpload() {
            if(this.leilao.name){
            let file = this.image[0];
            firebase
            .storage()
            .ref(
                "leilaoBanner/" + this.id + "/" + this.leilao.name + "/" + file.name
            )
            .put(file)
            .then(snapshot => {
                this.$store.commit('MENSAGEM_FEED','Carregando...')
                snapshot.ref.getDownloadURL().then(url => {
                this.leilao.imgUrl = url
                alert(url)
                this.$store.commit('MENSAGEM_FEED','carregada com sucesso')
                });
            });      
            }else{
                this.$store.commit('MENSAGEM_FEED','Porfavor defina o nome do leilao antes')
            }
        },
        putLeilao(bid){
            console.log(bid)
            this.$store.dispatch('updateBid', bid).then(()=>{
                this.$route.push('/leiloeiro')
            })
        }
    },
    created() {
        this.$store.dispatch('getBidById', this.$route.query.id)
    },
}
</script>