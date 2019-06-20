<template>
  <div class="lv-more">
    <Card ref="card" :cardClass="'lv-fullpage-card'">
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
export default {
    components:{
        Card
    },
}
</script>

<style>
.lv-more .lv-main-card{
  background-color:#f5f5f5;
}
</style>
