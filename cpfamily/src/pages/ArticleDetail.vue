<template>
    <div class="lv-article-detail">
        <Card ref="card" :cardClass="'lv-fullpage-card'">
            <div class="lv-article-head">
                <div @click="back" class="lv-article-return fa fa-angle-left"></div>活动详情
            </div>
            <div class="lv-article-container">
                <div class="lv-article-media">
                    <img :src="article.Image"/>
                </div>
                <div class="lv-article-title">
                {{article.Title}}
                </div>
                <div class="lv-article-data">
                浏览<span>{{article.BrowseNumber}}</span>收藏<span>{{article.CollectionNumber}}</span>
                </div>
                <div class="lv-article-info">
                    <div class="lv-article-time">
                        <div class="fa fa-clock-o"></div>{{article.CreateTime}}
                    </div>
                    <div class="lv-article-phone">
                        <div class="fa fa-mobile"></div>{{article.ContactNumber}}
                    </div>
                    <div class="lv-article-address">
                        <div class="fa fa-map-marker"></div>{{article.Location}}
                    </div>
                    <div class="lv-article-author">
                        <div class="fa fa-user"></div>{{article.ContactorName}}
                    </div>
                </div>
                <div class="lv-separator"></div>
                <div style="font-size:16px;color:#3a3a3a;">详情</div>
                <div class="lv-article-content">
                    {{article.Content}}
                </div>
                <div class="lv-article-sign" v-show="article.IsRegister" @click="register(article.Id)">立即报名</div>
            </div>
        </Card>
    </div>
</template>

<script>
import Card from '../components/cards/Card';
import {mapState} from 'vuex';
export default {
    data:function(){
        return {
            article:{}
        }
    },
    components:{
        Card
    },
    computed:{
        ...mapState({
            BaseUrl:state=>state.config.BaseUrl,
        }),
    },
    methods:{
        back(){
            this.$router.back();
        },
        register(id){
            this.cardsEventBus.$emit('showDialog', {type:'load'});
            this.$http.post(this.BaseUrl + "/home/registration", 
                {openId:1, id:id}).then(function(resp){
                    this.cardsEventBus.$emit('hideDialog');
                    var res = JSON.parse(resp.bodyText);
                    if(res == 1){
                        this.cardsEventBus.$emit('showDialog', {type:"alert",title:"活动报名", message:"报名成功"});
                    } else if(res == 0){
                        this.cardsEventBus.$emit('showDialog', {type:"alert",title:"活动报名", message:"报名失败"});
                    }
                });
        },
    },
    inject:['cardsEventBus'],
    mounted(){
        var articleid = this.$route.params.id;
        this.cardsEventBus.$emit('showDialog', {type:'load'});
        this.$http.post(this.BaseUrl + "/home/detail", 
            {id:articleid}).then(function(resp){
                this.article = JSON.parse(resp.bodyText);
                this.cardsEventBus.$emit('hideDialog');
            });
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