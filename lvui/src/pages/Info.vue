<template>
  <div>
    <Card ref="card" :cardClass="'lv-main-card'">
        <div>
            <h1>info1</h1>
            <h1>info2</h1>
            <h1>info3</h1>
            <h1>info4</h1>
            <h1>info5</h1>
            <h1>info6</h1>
            <h1>info7</h1>
            <h1>info8</h1>
            <h1>info9</h1>
            <h1>info10</h1>
            <h1>info1</h1>
            <h1>info2</h1>
            <h1>info3</h1>
            <h1>info4</h1>
            <h1>info5</h1>
            <h1>info6</h1>
            <h1>info7</h1>
            <h1>info8</h1>
            <h1>info9</h1>
            <h1>info10</h1>
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