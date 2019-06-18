<template>
  <div>
    <Card ref="card" :cardClass="'lv-fullpage-card'">
        <div>
            <h1>fullpage</h1>
        </div>
        <button @click="back">return</button>
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
        back(){
            this.$router.back();
        }
    }
}
</script>

<style>
</style>
