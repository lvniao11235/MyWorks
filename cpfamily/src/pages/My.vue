<template>
  <div class="lv-home">
    <Card ref="card" :cardClass="'lv-main-card'">
        <h1>my</h1>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
export default {
    components:{
        Card
    },
    activated(){
        this.$refs.card.resotreScrollPos();
    },
    beforeRouteLeave(to, from, next){
        this.$refs.card.saveScrollPos();
        next();
    }
}
</script>

<style>

</style>
