<template>
  <div class="lv-my">
    <Card ref="card" :cardClass="'lv-main-card'">
        <div class="lv-my-head">个人中心</div>
        <div class="lv-my-infos">
            <div class="lv-my-img">
            </div>
            <div class="lv-my-info">
                <div class="lv-my-name">pengy</div>
                <div class="lv-my-point">1000</div>
            </div>
            <div class="lv-my-sign">
                已签到
            </div>
        </div>
        <div class="lv-my-sepearator"></div>
        <div class="lv-media-list-item" @click="openPersonalCenter">
            <div class="lv-media-icon fa fa-address-card"></div>
            <div class="lv-media-text">个人信息</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
        </div>
        <div class="lv-media-list-item-sepearator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-users"></div>
            <div class="lv-media-text">参与的会议</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
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
        openPersonalCenter(){
            this.$router.push("/personal");
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
.lv-my .lv-main-card{
    background-color:#fff !important;
}
.lv-my-head{
    width:100%;
    height:44px;
    text-align:center;
    line-height:44px;
    vertical-align:middle;
    color:#fff;
    background-color:#db3445;
}

.lv-my-infos{
    width:100%;
    height:120px;
    background-color:#db3445;
}

.lv-my-img{
    width:62px;
    height:62px;
    border-radius:31px;
    margin:29px 17px;
    float:left;
    background-color:#fff;
}

.lv-my-info{
    width:62px;
    height:62px;
    margin:38px 0px;
    float:left;
}

.lv-my-name{
    height:24px;
    line-height:24px;
    vertical-align:middle;
    font-size:17px;
    color:#fefffe;
}

.lv-my-point{
    height:17px;
    line-height:17px;
    vertical-align:middle;
    font-size:12px;
    color:#ffffff;
    background-image:url(/diamonds.svg);
    background-repeat:no-repeat;
    background-position:left center;
    background-size:17px 17px;
    padding-left:20px;
    margin-top:5px;
}

.lv-my-sign{
    width:75px;
    height:25px;
    line-height:25px;
    vertical-align:middle;
    font-size:12px;
    color:#ffffff;
    margin:48px 13px;
    float:right;
    border:1px solid #fefefe;
    border-radius:3px;
    text-align:center;
}

.lv-my-sepearator{
    width:100%;
    height:15px;
    background-color:#eaeaea;
}

.lv-media-list-item{
    padding:15px;
}
.lv-media-list-item div{
    height:23px;
    line-height:23px !important;
    vertical-align:middle !important;
    display:inline-block;
    font-size:17px !important;
}

.lv-media-list-item .lv-media-icon{
    color:#d93344;
    margin-right:20px;
}

.lv-media-list-item .lv-media-text{
    
    color:#333333;
}

.lv-media-list-item .lv-media-value{
    float:right;
    color:#cccccc;
    margin-right:5px;
}

.lv-media-list-item .lv-media-arrow{
    float:right;
    color:#cccccc;
}

.lv-media-list-item-sepearator{
    width:100%;
    height:0px;
    border-bottom:1px solid #d3d3d3;
}
</style>
