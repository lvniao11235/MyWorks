<template>
    <div class="lv-article-detail">
        <Card ref="card" :cardClass="'lv-fullpage-card'">
            <div class="lv-article-head">
                <div @click="back" class="lv-article-return fa fa-angle-left"></div>活动详情
            </div>
            <div class="lv-article-container">
                <div class="lv-article-media">
                    <img src="/1.jpg"/>
                </div>
                <div class="lv-article-title">
                习近平出席全国两会少数民族代表委员茶话会习近平出席全国两会少数民族代表委员茶话会
                </div>
                <div class="lv-article-data">
                浏览<span>605</span>收藏<span>20</span>
                </div>
                <div class="lv-article-info">
                    <div class="lv-article-time">
                        <div class="fa fa-clock-o"></div>2019-06-12 16:07
                    </div>
                    <div class="lv-article-phone">
                        <div class="fa fa-mobile"></div>15151891845
                    </div>
                    <div class="lv-article-address">
                        <div class="fa fa-map-marker"></div>西安
                    </div>
                    <div class="lv-article-author">
                        <div class="fa fa-user"></div>王军
                    </div>
                </div>
                <div class="lv-separator"></div>
                <div style="font-size:16px;color:#3a3a3a;">详情</div>
                <div class="lv-article-content">
                此次展览由中央编译局、北京市委宣传部和北京市西城区委共同主办，集中展示了建党95年来马克思主义中国化的历史进程及主要成果。刘奇葆仔细观看展示马克思主义中国化的珍贵文献、手稿、文物、图片，以及马克思主义题材的绘画、雕塑等，详细了解相关文献的具体情况，与在场的有关部门负责同志进行交流。刘奇葆指出，展览主题鲜明、内容丰富、思想性强，带给人们深刻的启迪和思考。在建党95周年之际，举办这个主题展览具有非常重要的意义。
                </div>
                <div class="lv-article-sign">立即报名</div>
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
        back(){
            this.$router.back();
        }
    }
}
</script>

<style>
.lv-article-detail .lv-fullpage-card{
    background-color:#fff;
}

.lv-article-head{
    width:100%;
    height:44px;
    text-align:center;
    line-height:44px !important;
    vertical-align:middle !important;
    color:#fff;
    background-color:#db3445;
    font-size:17px !important;
}

.lv-article-return{
    float:left;
    color:#FEFFFE;
    height:44px;
    text-align:center;
    line-height:44px !important;
    vertical-align:middle !important;
    font-size:30px !important;
    width:30px;
}

.lv-article-container{
    width:calc(100% - 24px);
    margin:12px;
}

.lv-article-media, .lv-article-media img{
    width:100%;
}

.lv-article-title{
    width:100%;
    color:#424242;
    font-size:16px;
    line-height:23px;
    vertical-align:middle;
    word-break:break-all;
    font-weight:bold;
    margin:12px 0px;
}

.lv-article-data{
    color:#bebebe;
    font-size:11px;
}

.lv-article-data span{
    display:inline-block;
    width:30px;
    text-align:center;
}

.lv-article-info{
    font-size:0px;
}

.lv-article-info>div{
    display:inline-block;
    width:calc(50% - 16px);
    text-align:left;
    color:#888888;
    font-size:11px;
    background-size:12px 12px;
    background-position:left center;
    background-repeat:no-repeat;
    margin:5px 0px;
}

.lv-article-info>div>div{
    margin-right:5px;
    width:12px;
    text-align:center;
}

.lv-separator{
    width:100%;
    height:0px;
    border-bottom:1px solid #d3d3d3;
    margin:5px 0px;
}

.lv-article-content{
    text-indent:2em;
    color:#717171;
    font-size:13px;
    line-height:19px;
    margin:10px 0px;
}

.lv-article-sign{
    background-color:#db3445;
    height:45px;
    line-height:45px;
    vertical-align:middle;
    margin:20px auto;
    width:60%;
    border-radius:22.5px;
    color:#fff;
    text-align:center;
    font-size:14px;
}
</style>