<template>
<div>
    <banner/>
    <anuncio/>
    <livesAtivas/>
    <anuncio2/>
    <livesDesabilitadas/>
    <home/>
</div> 
</template>
<script>
import home from "../components/home/getHome"
import banner from "../components/home/Banner"
import anuncio from "../components/home/getAnnouncement"
import livesAtivas from "../components/home/getLivesActives"
import anuncio2 from "../components/home/help"
import livesDesabilitadas from "../components/home/getLivesDisabled"
export default {
    components:{
        home,
        banner,
        anuncio,
        livesAtivas,
        anuncio2,
        livesDesabilitadas
    }
}
</script>


  