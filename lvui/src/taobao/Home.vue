<template>
  <div class="lv-home">
    <Card ref="card" :cardClass="'lv-main-card'">
        <div class="lv-home-head">
            <img src="taobao.svg" class="lv-home-head-icon"/>
            <div class="lv-home-head-link">
                <div>寻找宝贝店铺</div>
            </div>
        </div>
        <Carousel style="height:128px" :items="carousels"></Carousel>
        <div class="carousel-mask"></div>
        <Category :items="categories"></Category>
        <Banner></Banner>
        <HotCategory></HotCategory>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
import Carousel from '../components/widgets/Carousel';
import Category from './Category';
import Banner from './Banner';
import HotCategory from './HotCategory';
export default {
    components:{
        Card, Carousel, Category, Banner, HotCategory
    },
    data:function(){
        return {
            carousels:[
                'carousel/1.jpg', 'carousel/2.jpg', 'carousel/3.jpg',
                'carousel/4.jpg', 'carousel/5.jpg', 'carousel/6.jpg'
            ],
            categories:[
                {img:"/category/1.webp", text:"天猫"},
                {img:"/category/2.png", text:"聚划算"},
                {img:"/category/3.png", text:"天猫国际"},
                {img:"/category/4.png", text:"外卖"},
                {img:"/category/5.webp", text:"天猫超市"},
                {img:"/category/6.webp", text:"充值中心"},
                {img:"/category/7.png", text:"飞猪旅行"},
                {img:"/category/8.png", text:"领金币"},
                {img:"/category/9.png", text:"拍卖"},
                {img:"/category/10.png", text:"分类"},
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
    .lv-home{
        background-color:#fff;
    }
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
