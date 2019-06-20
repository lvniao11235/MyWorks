<template>
  <div class="lv-my">
    <Card ref="card" :cardClass="'lv-main-card'">
        <div class="lv-my-head"></div>
        <div class="lv-my-info">
            <div class="lv-my-info-left">
                <div class="lv-my-info-img">
                    <img src="/my/head.png"/>
                </div>
                <div class="lv-my-info-text">
                    <div class="lv-my-info-text-name">XXX</div>
                    <div class="lv-my-info-text-add"></div>
                </div>
            </div>
            <div class="lv-my-info-right">
                <img src="/my/right1.gif"/>
                <img src="/my/right2.webp"/>
                <img src="/my/right3.webp"/>
            </div>
        </div>
        <div class="lv-my-history">
            <div class="lv-my-history-item">
                <div>11</div>
                <div>收藏夹</div>
            </div>
            <div class="lv-my-history-item">
                <div>4</div>
                <div>关注店铺</div>
            </div>
            <div class="lv-my-history-item">
                <div>238</div>
                <div>足迹</div>
            </div>
        </div>
        <div class="lv-my-item">
        </div>
        <div class="lv-my-item">
        </div>
        <div class="lv-my-item">
        </div>
        <div class="lv-my-item">
        </div>
        <div class="lv-my-item">
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
}
</script>

<style>
.lv-my .lv-main-card{
  background-color:#f5f5f5;
}
.lv-my-head{
    width:calc100%;
    height:220px;
    background-image: linear-gradient(-90deg, #FF5000 0%, #FF8400 100%);
}

.lv-my-info{
    width:calc(100% - 40px);
    margin:10px 20px;
    margin-top:-180px;
}

.lv-my-info-left{
    float:left;
}

.lv-my-info-img{
    width:50px;
    height:50px;
    padding:1px;
    border-radius:26px;
    background-color:#fff;
    float:left;
}

.lv-my-info-img img{
    width:50px;
    height:50px;
    border-radius:25px;
}

.lv-my-info-text{
    float:left;
    margin-left:10px;
}

.lv-my-info-text-name{
    height:25px;
    line-height:25px;
    vertical-align:middle;
    font-size:20px;
    color:#fff;
    font-weight:bold;
}

.lv-my-info-text-add{
    height:21px;
    width:150px;
    margin:5px 0px;
    background-image:url(/my/info.webp);
    background-size:100% 100%;
    background-repeat:no-repeat;
}

.lv-my-info-right{
    float:right;
    height:20px;
}

.lv-my-info-right img{
    width:20px;
    height:20px;
    margin-left:20px;
}

.lv-my-history{
    width:calc(100% - 40px);
    margin:10px 20px;
    font-size:0px;
    clear:both;
}

.lv-my-history-item{
    width:25%;
    text-align:center;
    display:inline-block;
    margin-top:20px;
}

.lv-my-history-item div{
    width:100%;
    height:25px;
    line-height:25px;
    vertical-align:middle;
    color:#fff;
    font-size:12px;
}

.lv-my-item{
    width:calc(100% - 40px);
    height:100px;
    margin:10px 20px;
    background-color:#fff;
    border-radius:12px;
}
</style>
