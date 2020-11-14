<template>
  <!--ANUNCIO-->
  <v-row class="d-flex justify-center">
    <v-card 
    flat
    class="d-flex align-center"
    width="85%"
    min-height="400px">
      <v-row dense class="d-flex align-center align-space-around justify-space-around flex-wrap">
        <v-card
        width="400px"
        height="250px"
        v-for="anuncio in anuncios"
        :key="anuncio.length"
        :href="anuncio.url"
        color="red"
        class="ma-6"
        >
          <v-img :scr="anuncio.img" width="300px" height="250px"></v-img>
        </v-card>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      anuncios: [
        {
          img:"https://image.shutterstock.com/image-vector/watching-youtube-video-hands-holding-260nw-1593155824.jpg",
          url: "http://www.youtube.com"
        },
        {
          img:"http://www.colostomyuk.org/wp-content/uploads/2016/10/facebook-banner-pictures-6.png",
          url: "http://www.facebook.com"
        },
        {
          img:"http://www.colostomyuk.org/wp-content/uploads/2016/10/facebook-banner-pictures-6.png",
          url: "http://www.facebook.com"
        }
      ]
    };
  }
};
</script>

<style>
</style>