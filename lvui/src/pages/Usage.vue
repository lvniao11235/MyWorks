<template>
  <div>
    <Card ref="card" :cardClass="'lv-main-card'">
        <div>
            <h1>usage1</h1>
            <h1>usage2</h1>
            <h1>usage3</h1>
            <h1>usage4</h1>
            <h1>usage5</h1>
            <h1>usage6</h1>
            <h1>usage7</h1>
            <h1>usage8</h1>
            <h1>usage9</h1>
            <h1>usage10</h1>
            <h1>usage1</h1>
            <h1>usage2</h1>
            <h1>usage3</h1>
            <h1>usage4</h1>
            <h1>usage5</h1>
            <h1>usage6</h1>
            <h1>usage7</h1>
            <h1>usage8</h1>
            <h1>usage9</h1>
            <h1>usage10</h1>
        </div>
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