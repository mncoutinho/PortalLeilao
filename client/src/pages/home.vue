<template>
<v-app id="inspire">
    <banner/>
    <anuncio/>
    <livesAtivas/>
    <anuncio2/>
    <livesDesabilitadas/>
    <registroEmail/>
    <anuncioPagamento/>
</v-app> 
</template>
<script>

import banner from "../components/home/Banner"
import anuncio from "../components/home/getAnnouncement"
import livesAtivas from "../components/home/getLivesActives"
import anuncio2 from "../components/home/help"
import livesDesabilitadas from "../components/home/getLivesDisabled"
import registroEmail from "../components/home/registreEmail"
import anuncioPagamento from "../components/home/paymentAnnouncement"

export default {
    components:{
        
        banner,
        anuncio,
        livesAtivas,
        anuncio2,
        livesDesabilitadas,
        registroEmail,
        anuncioPagamento
    }
}
</script>


  