<template >
  <v-app id="inspire" >
<!--MENU-->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      >
      <v-list dense>
        <router-link to="/" style="text-decoration:none;">
        <v-list-item link>
          <v-list-item-action>
            <v-icon >mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title ><router-link to="/">HOME</router-link></v-list-item-title>
          </v-list-item-content>          
        </v-list-item>
        </router-link>
        
        <router-link to="/adicionarItem" style="text-decoration:none;">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title><router-link to="/adicionarItem">ITEM</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>

        <router-link to="/leilao" style="text-decoration:none;">
         <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title><router-link to="/leilao">LEILÃO</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>

      </v-list>
    </v-navigation-drawer>

   
    <v-app-bar
      app
      color="indigo lighten-1"
      dark
      clipped-left
      
      >
      <v-app-bar-nav-icon @click="drawer = !drawer"/>
      <v-toolbar-title> 
        <router-link  class="white--text" to="/" style="text-decoration:none;">
            Portal Leilão
       </router-link>
      </v-toolbar-title>

<!--BARRA DE PESQUISA-->
 <v-spacer/>
      <v-col cols="6" sm="5" class="ml-12">  
        <v-text-field
          v-model="Pesquisar"
          append-icon="mdi-magnify"
          label="Pesquisar"
          single-line
          hide-details
          
        ></v-text-field>
      </v-col>
<v-spacer/>
<!--BUTÃO-->
    <div class="mr-2">
      <v-btn :elevation="0" to="/criar"  text>
      Crie Sua conta
      </v-btn>
    </div>
    <div>
      <v-btn to="/login"  color="white indigo--text">Login</v-btn>
    </div>
     

    </v-app-bar>
          
    <v-spacer/>
    <v-content>
      <router-view/>
    </v-content>

 


<!--RODAPÉ-->
    <v-footer
      dark
      padless
      class="mt-10">




      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center">
        <br>

<!----------------MODAL TUTORIAL----------------->
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        
        <p>Primeira vez no seu leilão online ?</p>
       
        <v-btn
          color="blue lighten-2"
          green
          v-on="on"
        >
          Ver instruções
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2 subtitle-1"
          primary-title
        >
          Veja como é fácil participar de nossos leilões.
        </v-card-title>

        <v-card-text>

<!---texto do modal--->
<v-text class="col-md-11" >
                
                <v-card-text class="col-mb-10 text-justify justify-center">   
            <h2 class="subtitle-1"><b>Cadastre-se no Portal Leilão</b></h2>
            <p>Para se cadastrar é grátis e muito fácil.
            Clique no menu "Cadastre-se" situado na página inicial e preencha o formulário corretamente.
            Ao finalizar, um email será enviado contendo a chave de ativação para confirmação de seu cadastro.
            Você confirma seu cadastro e já ganha 5 Lances Grátis para começar a participar e conhecer nosso sistema.</p>
            <br>
            <h2 class="subtitle-1"><b>Comprar lances</b></h2>      
            <p>Para comprar lances e aumentar suas chances é muito fácil.
            Faça seu login no site e clique no botão "Comprar Lances" situado abaixo do box de login.
            Escolha seu pacote de lances e conte com toda a segurança do UOL PagSeguro para efetuar a transação de sua compra.
            *** Pronto, agora você já pode começar a jogar e entrar na disputa dos leilões ***
            DICA: Aumente suas chances e saia na frente. Adquira seus lances antecipadamente e evite ficar fora da disputa do leilão desejado.</p>
              <br>
            <h2 class="subtitle-1"><b>Escolha um leilão</b></h2>      
            <p>Escolha um leilão que deseja participar e divirta-se.
            Você pode participar de vários leilões ao mesmo tempo.
            Você pode dar seu lance antes mesmo do cronômetro iniciar clicando no botão LANCE,
            saindo à frente na disputa. Veja que seu nome de usuário aparecerá logo abaixo do botão LANCE.</p>
                  <br>
            <h2 class="subtitle-1"><b>Início do leilão, como usar seu lance</b></h2>      
            <p>A disputa vai começar, prepare-se!
            Todo leilão se inicia em R$ 0,00 e tem um cronômetro regressivo de 30, 20, 15 ou 10s.
            Ao iniciar o leilão a tarja com data e horário de início é retirada e o cronômetro que estava na cor cinza fica na cor azul.
            A cada lance dado por um novo usuário, o valor do leilão sobe em R$ 0,01 centavo e o cronômetro tem a sua contagem reiniciada.
            É melhor dar seu lance clicando no botão LANCE e garantir seu nome abaixo.
            Se o cronômetro ficar vermelho, o leilão está perto de acabar!
            Dê o seu lance e garanta não ficar fora da disputa.
            Se ninguém mais der lance até o cronômetro zerar você será o vencedor do leilão.</p>
              <br>
            <h2 class="subtitle-1"><b>Como saber se ganhei</b></h2>      
            <p>Você irá receber um e-mail informando qual leilão você ganhou e
            com as instruções de pagamento e entrega do produto.</p>
            <br>
            <br>
            <br>

       
      </v-card-text>
       
       </v-text>
<!-------------------->

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
<!--------------->


        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon>
          </v-btn>
          
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
          <a href="#" style="text-decoration:none;"><v-icon size="50px" class="mr-5">mdi-facebook</v-icon></a>
          <a href="#" style="text-decoration:none;"><v-icon size="50px" class="mr-5">mdi-instagram</v-icon></a>
          <a href="#" style="text-decoration:none;"><v-icon size="50px" class="mr-5">mdi-linkedin</v-icon></a>
          <a href="#" style="text-decoration:none;"><v-icon size="50px" class="mr-5">mdi-twitter</v-icon></a>
          <a href="#" style="text-decoration:none;"><v-icon size="50px" >mdi-whatsapp</v-icon></a>
        <v-divider/>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>

    


    </v-footer>


  </v-app>
</template>
<script>
import "font-awesome/css/font-awesome.css";

export default {
  name: 'App',
  component:{
  },
  data: () => ({
      drawer: false,

    }),
};
</script>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>







