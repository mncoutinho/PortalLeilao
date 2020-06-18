<template>
    <!--ANUNCIO-->
        <v-card
        width="90%"
        height="300"
        class="mx-auto">
            <v-col class="mt-9" > 
                <v-row justify="space-around">
                    <!--ANUNCIO 1-->
                    <a :href="anuncio[0].url">
                    <v-card
                    width="550"
                    height="200">                       
                        <v-img
                            width="100%"
                            height="100%"
                            :src="anuncio[0].img"
                        />                       
                    </v-card>
                    </a>
                    <!--ANUNCIO 2-->
                    <a :href="anuncio[1].url">
                    <v-card
                    width="550"
                    height="200">                       
                        <v-img
                            width="100%"
                            height="100%"
                            :src="anuncio[1].img"
                        />                       
                    </v-card>
                    </a>
                </v-row>
            </v-col>    
        </v-card>
</template>

<script>
export default {
    data(){
        return{
            anuncio:[
                {
                    img:"https://venngage-wordpress-es.s3.amazonaws.com/uploads/2019/01/youtube-banner-plantilla-blog-header.png",
                    url:"http://www.youtube.com"
                },
                {
                    img:"http://www.colostomyuk.org/wp-content/uploads/2016/10/facebook-banner-pictures-6.png",
                    url:"http://www.facebook.com"
                }
            ]
        }
    }

}
</script>

<style>

</style>