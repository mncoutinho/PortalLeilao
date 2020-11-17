<template>
  <div>
      <!--Login por email-->
        <v-col
        :key="i.icon"
        v-for="i in is"
        >
            <v-row justify="center">
                <v-btn
                width="55%"
                :color="i.cor"
                class="white--text pa-6"
                @click="i.where"
                >
                    <v-icon>{{i.icon}}</v-icon>
                    <v-spacer/>
                    {{i.nome}}
                </v-btn>
            </v-row>
        </v-col>
  </div>
</template>

<script>
export default {
    data(){
        return{
            is:[
                {nome:'Facebook',cor:'#3b5998',icon:'fab fa-facebook',where:this.LoginF}, 
                {nome:'Google',cor:'#D74A38',icon:'fab fa-google',where:this.LoginG},
            ],
        }
    },
    methods:{
        LoginF(){
            this.$store.dispatch('loginFacebook')
        },
        LoginG(){
            this.$store.dispatch('loginGoogle')
        },
    }
}
</script>
