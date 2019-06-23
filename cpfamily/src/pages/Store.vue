<template>
  <div class="lv-store">
    <Card ref="card" :cardClass="'lv-main-card'">
        <div class="lv-home-head">积分商城</div>
        <Carousel style="height:152px" :items="carousels"></Carousel>
        <div class="lv-store-infos">
            <div class="lv-store-point">
                <span class="fa fa-diamond"></span>积分<span style="color:#da6029">1000 </span>
            </div>
            <div class="lv-store-infos-seperator"></div>
            <div class="lv-store-record">
                <span class="fa fa-align-justify"></span>兑换记录
            </div>
        </div>
        <div class="lv-store-container">
            <div class="lv-store-item">
                <div class="lv-product-img"><img src="hot1-left.webp"/></div>
                <div class="lv-product-buy">兑换</div>
                <div class="lv-product-info">
                    <div class="lv-product-name">香皂盒1</div>
                    <div class="lv-product-desc">香皂盒</div>
                    <div class="lv-product-price"><span class="fa fa-diamond"></span>300</div>
                </div>
            </div>
            <div class="lv-store-seperator"></div>
            <div class="lv-store-item">
                <div class="lv-product-img"><img src="hot1-left.webp"/></div>
                <div class="lv-product-buy">兑换</div>
                <div class="lv-product-info">
                    <div class="lv-product-name">香皂盒2</div>
                    <div class="lv-product-desc">香皂盒</div>
                    <div class="lv-product-price"><span class="fa fa-diamond"></span>300</div>
                </div>
            </div>
            <div class="lv-store-seperator"></div>
            <div class="lv-store-item">
                <div class="lv-product-img"><img src="hot1-left.webp"/></div>
                <div class="lv-product-buy">兑换</div>
                <div class="lv-product-info">
                    <div class="lv-product-name">香皂盒3</div>
                    <div class="lv-product-desc">香皂盒</div>
                    <div class="lv-product-price"><span class="fa fa-diamond"></span>300</div>
                </div>
            </div>
            <div class="lv-store-seperator"></div>
            <div class="lv-store-item">
                <div class="lv-product-img"><img src="hot1-left.webp"/></div>
                <div class="lv-product-buy">兑换</div>
                <div class="lv-product-info">
                    <div class="lv-product-name">香皂盒4</div>
                    <div class="lv-product-desc">香皂盒</div>
                    <div class="lv-product-price"><span class="fa fa-diamond"></span>300</div>
                </div>
            </div>
            <div class="lv-store-seperator"></div>
            <div class="lv-store-item">
                <div class="lv-product-img"><img src="hot1-left.webp"/></div>
                <div class="lv-product-buy">兑换</div>
                <div class="lv-product-info">
                    <div class="lv-product-name">香皂盒5</div>
                    <div class="lv-product-desc">香皂盒</div>
                    <div class="lv-product-price"><span class="fa fa-diamond"></span>300</div>
                </div>
            </div>
            <div class="lv-store-seperator"></div>
            <div class="lv-store-item">
                <div class="lv-product-img"><img src="hot1-left.webp"/></div>
                <div class="lv-product-buy">兑换</div>
                <div class="lv-product-info">
                    <div class="lv-product-name">香皂盒6</div>
                    <div class="lv-product-desc">香皂盒</div>
                    <div class="lv-product-price"><span class="fa fa-diamond"></span>300</div>
                </div>
            </div>
        </div>
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
            ],
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

.lv-store-infos>div{
    height:50px;
    vertical-align:middle;
    text-align:center;
    font-size:15px;
    line-height:50px;
    display:inline-block;
    background-color:#fff;
    color:#7a7e83;
}

.lv-store-infos span{
    margin:0px 5px;
}

.lv-store-point, .lv-store-record{
    width:calc(50% - 1px);
}

.lv-store-infos-seperator{
    width:0px;
    border-left:1px solid #eaeaea;
}

.lv-store-container{
    width:100%;
    margin-top:12px;
    background-color:#fff;
}

.lv-store-item{
    width:100%;
    height:107px;
    font-size:0px;
}

.lv-store-seperator{
    height:0px;
    width:100%;
    border-bottom:1px solid #eeeeee;
}

.lv-product-img{
    width:126px;
    height:83px;
    margin:12px 12px;
    display:inline-block;
}

.lv-product-img img{
    width:100%;
    height:100%;
}

.lv-product-buy{
    width:56px;
    height:25px;
    border:1px solid #da444d;
    color:#da444d;
    font-size:12px;
    text-align:center;
    line-height:25px;
    vertical-align:middle;
    border-radius:5px;
    margin:40px 12px;
    display:inline-block;
    float:right;
}

.lv-product-info{
    display:inline-block;
    height:83px;
    margin-top:12px;
    width:calc(100% - 234px);
    float:right;
}

.lv-product-name{
    height:23px;
    line-height:23px;
    vertical-align:middle;
    font-size:16px;
    color:#333333;
}

.lv-product-desc, .lv-product-price{
    height:19px;
    line-height:19px;
    vertical-align:middle;
    font-size:13px;
    color:#888888;
}

.lv-product-desc{
    margin:10px 0px;
}

.lv-product-price{
    color:#da444d;
}

.lv-product-price span{
    display:inline-block;
    margin-right:5px;
}
</style>
