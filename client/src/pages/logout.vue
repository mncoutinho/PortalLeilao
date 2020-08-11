<template>
<div>
</div>
</template>
<script>
export default {
    created(){
       this.$store.dispatch('singOut', this.user).then(()=>{
           this.$router.push('/');
       });       
    }
}
</script>