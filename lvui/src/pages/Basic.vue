<template>
  <div>
    <Card ref="card" :cardClass="'lv-main-card'">
        <div>
            <h1 @click="openNewPage">basic1</h1>
            <h1>basic2</h1>
            <h1>basic3</h1>
            <h1>basic4</h1>
            <h1>basic5</h1>
            <h1>basic6</h1>
            <h1>basic7</h1>
            <h1>basic8</h1>
            <h1>basic9</h1>
            <h1>basic10</h1>
            <h1>basic1</h1>
            <h1>basic2</h1>
            <h1>basic3</h1>
            <h1>basic4</h1>
            <h1>basic5</h1>
            <h1>basic6</h1>
            <h1>basic7</h1>
            <h1>basic8</h1>
            <h1>basic9</h1>
            <h1>basic10</h1>
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
    methods:{
        openNewPage(){
           this.$router.push('/detail'); 
        }
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
