<template >      
    <v-app id="inspire">                   
    </v-app> 
</template>

<!--STYLE-->
<style>
    .pagamentos{
        border-right: 2px solid #F5F3F2; 
        margin-top:2%;
        padding-right: 100px;
        padding-left: 100px;
         
    }
    .pagamentos:last-child{
        border-right: none; 
    }
    @media (max-width: 800px){
        .pagamentos{
            border-right: none;
            margin-left: 50%;
            border-bottom: 2px solid #F5F3F2;  
        }
        .pagamentos:last-child{
            border-bottom: none;
        }
    }
</style>

<!--scripts-->
<script>
import firebase from 'firebase';
export default {
    data() {
        return{
            pesquisar:''
        }
        },
        mounted(){
            //this.getHomeItems();
        },
        methods:{
            async getHomeItems(){
                await firebase.firestore()
                .collection('item')
                .where("active","==", true)
                .get()
                .then(docs => {
                    this.lives = [];
                    docs.forEach(doc => {
                        this.lives.push(doc.data());
                    })
                    console.log(this.lives)
                })
                .catch(err => console.log(err))
            },
            getHomeOpenSale(){

            },
            getHomeLiveSale(){

            }
        }
    }    
</script>
<!-- Vue Component -->