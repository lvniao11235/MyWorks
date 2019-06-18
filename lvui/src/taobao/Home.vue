<template>
  <div>
    <Card ref="card" :cardClass="'lv-main-card'">
        <div class="lv-home-head">
            <img src="taobao.svg" class="lv-home-head-icon"/>
            <div class="lv-home-head-link">
                <div>寻找宝贝店铺</div>
            </div>
        </div>
        <Carousel style="height:128px" :items="carousels"></Carousel>
        <div class="carousel-mask"></div>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
import Carousel from '../components/widgets/Carousel';
export default {
    components:{
        Card, Carousel
    },
    data:function(){
        return {
            carousels:[
                'carousel/1.jpg', 'carousel/2.jpg', 'carousel/3.jpg',
                'carousel/4.jpg', 'carousel/5.jpg', 'carousel/6.jpg'
            ]
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
    .lv-home-head{
        width:100%;
        height:37px;
        background-color:#FF852A;
    }

    .lv-home-head-icon{
        height:33px;
        width:33px;
        margin:2px;
    }

    .lv-home-head-link{
        display:inline-block;
        width:calc(100% - 50px);
        height:25px;
        margin:6px;
        background-color:#FF4E22;
        border-radius:5px;
        text-align:center;
        float:right;
    }

    .lv-home-head-link div{
        background-image:url(/find.svg);
        background-size:18px 18px;
        padding-left:18px;
        background-repeat:no-repeat;
        height:18px;
        line-height:18px;
        vertical-align:middle;
        margin-top:3px;
        display:inline-block;
        font-size:13px;
        color:#F0E0DC;


    }

    .carousel-mask{
        width:100%;
        height:10px;
        background-image:url(/mask.png_.webp);
        background-size:100%;
        margin-top:-10px;
        z-index:10010;
        position:absolute;
    }
</style>
