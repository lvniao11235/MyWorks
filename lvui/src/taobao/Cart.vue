<template>
  <div class="lv-cart">
    <Card ref="card" :cardClass="'lv-main-card'">
        <div class="lv-cart-head"></div>
        <div class="lv-cart-container">
            <div class="lv-cart-title">
                购物车(81)
                <div class="lv-cart-manage">管理</div>
            </div>
            <div class="lv-cart-count">
                共81件宝贝
            </div>
            <div class="lv-cart-push-info">
                领618津贴，享每满300减30，立即领取>>
                <img src="/cart-close.webp"/>
            </div>
            <div class="lv-card-item">
            </div>
            <div class="lv-card-item">
            </div>
            <div class="lv-card-item">
            </div>
            <div class="lv-card-item">
            </div>
            <div class="lv-card-item">
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
    }
}
</script>

<style>
.lv-cart-head{
    width:calc100%;
    height:180px;
    background-image: linear-gradient(-90deg, #FF5000 0%, #FF8400 100%);
    
}

.lv-cart-container{
    width:calc(100% - 24px);
    padding:20px 12px;
    margin-top:-180px;
}

.lv-cart-title{
    font-size:20px;
    color:#fff;
    font-weight:blod;
}

.lv-cart-manage{
    float:right;
    font-size:15px;
    font-weight:normal;
}

.lv-cart-count{
    font-size:12px;
    color:#fff;
    margin:10px 0px;
}

.lv-cart-push-info{
    width:calc(100% - 10px);
    height:44px;
    line-height:44px;
    vertical-align:middle;
    background-color:#f2f2f2;
    font-size:14px;
    color:rgb(255,17,17);
    border-radius:12px;
    padding-left:10px;
    overflow:hidden;
}

.lv-cart-push-info img{
    float:right;
    height:24px;
    width:24px;
}

.lv-card-item{
    width:100%;
    height:100px;
    border-radius:12px;
    background-color:#fff;
    margin:10px 0;
}
</style>
