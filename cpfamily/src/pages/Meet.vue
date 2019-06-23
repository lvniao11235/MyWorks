<template>
  <div class="lv-home">
    <Card ref="card" :cardClass="'lv-page-card'">
        <div class="lv-home-head">会议室预约</div>
        <div class="lv-store-item">
            <div class="lv-product-img"><img src="meet.jpeg"/></div>
            <div class="lv-product-buy" @click="bookMeet">预约</div>
            <div class="lv-product-info">
                <div class="lv-product-name">大明</div>
                <div class="lv-product-desc">10f-102</div>
                <div class="lv-meet-limit">可以容纳100人</div>
            </div>
        </div>
        <div class="lv-store-seperator"></div>
        <div class="lv-store-item">
            <div class="lv-product-img"><img src="meet.jpeg"/></div>
            <div class="lv-product-buy">预约</div>
            <div class="lv-product-info">
                <div class="lv-product-name">大唐</div>
                <div class="lv-product-desc">10f-101</div>
                <div class="lv-meet-limit">可以容纳100人</div>
            </div>
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
    },
    methods:{
        bookMeet(){
            this.$router.push("/meetroom");
        }
    }
}
</script>

<style>
.lv-meet-limit{
    height:19px;
    line-height:19px;
    vertical-align:middle;
    font-size:13px;
    color:#888888;
}
</style>
