<template>
  <v-app>
      <v-card flat width="100%">
        <v-row  xs12 sm6 offset-sm3>
            <v-flex :class="layout.flex">
                <h1 :class="layout.title">Bem-vindo leiloeiro</h1>
                <p :class="layout.description">
                Cadastrar seu leilão ficou ainda mais fácil, basta apenas preencher o formulário
                e em breve estará no ar.
                </p>
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
                                :max-width="layout.img.width"
                                :heigth="layout.img.height"
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
                                v-model="user.nome"
                                @change="commit()"
                                name="title"
                                label="Nome"
                            />
                            <!--email-->
                            <v-text-field
                                v-model="email"
                                name="title"
                                label="E-mail"
                            />
                            <v-text-field
                                v-model="user.tel"
                                @change="commit()"
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
                                v-on:click="addLeilao(leilao);"
                            >Confirmar</v-btn>
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
            },
            leilao:{
                imgUrl: "",
            }
        }
    },
    computed: {
        ...mapState({
                id: state => state.userApp.user.uid,
                email: state => state.userApp.user.email,
                user: state => state.userApp.userData,
                layout: state => state.form
            })
    },
    methods:{
         async onUpload() {
            if(this.leilao.name){
            let file = this.image[0];
            this.$store.commit('MSG_FEED','Carregando...')
            firebase
            .storage()
            .ref(
                "leilaoBanner/" + this.id + "/" + this.leilao.name + "/" + file.name
            )
            .put(file)
            .then(snapshot => {
                snapshot.ref.getDownloadURL().then(url => {
                this.leilao.imgUrl = url
                });
            });      
            }else{
                this.$store.commit('ALERT','Por favor, defina o nome do leilao antes.')
                this.image = []
            }
        },
        addLeilao(bid){

            if(this.user.tel == undefined || this.user.nome == undefined ){
                this.$store.commit('ALERT','Você precisa completar o cadastro para ter o direito de solicitar a criação de um leilao.')
            }else{
                bid.email = this.email
                bid.tel = this.user.tel
                bid.organizer = this.user.nome
                bid.idOrganizer = this.id
                bid.items = []
                console.log(bid)
                this.$store.dispatch('createBid', bid).then(()=>{
                    this.clear();
                    this.$store.commit('setStep',7)
                })
            }   
        },
        clear(){
            this.image =[]
            this.leilao = {
                imgUrl: "",  
            }
        },
        commit(){
            this.$store.commit('setCache', this.user);
        }
    },
}
</script>