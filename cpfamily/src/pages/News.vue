<template>
  <div class="lv-news">
    <Card ref="card" :cardClass="'lv-content-card'">
        <h1>{{currenturl}}</h1>
        <div class="lv-home-btns">
            <div class="lv-move-to-top fa fa-arrow-up"></div>
            <div class="lv-loaddata fa fa-download"></div>
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
    computed:{
        currenturl(){
            return this.$route.path;
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
    .lv-home-btns{
        position:fixed;
        bottom:60px;
        right:10px;
        height:82px;
        width:30px;
        z-index:1000;
    }

    .lv-home-btns div{
        background-color:#de2910;
        width:30px;
        height:30px;
        font-size:25px !important;
        color:#fff !important;
        text-align:center;
    }
    .lv-move-to-top{
        border-top-left-radius:15px;
        border-top-right-radius:15px;
        padding-top:10px;
    }
    .lv-loaddata{
        border-bottom-left-radius:15px;
        border-bottom-right-radius:15px;
        height:35px !important;
        margin-top:2px;
        padding-top:5px;
    }
</style>
