<template>
  <div class="lv-news" ref="newsContainer">
    <div v-for="(article, index) in articles" :key="article.Id">
        <div class="lv-news-item-width-media">
            <div class="lv-news-item-media">
                <img :src="article.Image"/>
            </div>
            <div class="lv-news-item-content" @click="openArticleDetail">
                <div class="lv-news-item-title">
                {{article.Title}}
                </div>
                <div class="lv-news-item-info">
                    <div>{{article.Location}}</div>
                    <div>{{article.Time}}</div>
                </div>
            </div>
            <div class="lv-news-item-sign">
                立即报名
            </div>
        </div>
        <div class="lv-news-item-seperator" v-show="index < articles.length-1"></div>
    </div>
    <div class="lv-home-btns">
        <div class="lv-move-to-top fa fa-arrow-up" @click="scrollToTop"></div>
        <div class="lv-loaddata fa fa-download" @click="loadMoreArticles"></div>
    </div>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            type:{},
            articles:null,
            start:null,
            end:null,
        }
    },
    methods:{
        openArticleDetail(){
            this.$router.push("/article/1");
        },
        reload(){
            this.$http.post("http://10.0.0.2/home/getmessages", 
                {type:this.type.id}).then(function(resp){
                    this.articles = JSON.parse(resp.bodyText);
                    
                });
        },
        loadMoreArticles(){
            this.$http.post("http://10.0.0.2/home/getmessages", 
                {type:this.type.id, startTime:new Date(), endTime:new Date()}).then(function(resp){
                    var temp = JSON.parse(resp.bodyText);
                    temp.forEach(x=>this.article.push(x));
                });
        },
        changeNewsTypeHandle(type){
            if(type.id != this.type.id){
                this.type = type;
                this.start = null;
                this.end = null;
            }
        },
        scrollToTop(){
            var _this = this;
            var timer = setInterval(function(){
                var scrollPos = _this.$refs.newsContainer.scrollTop - 300;
                if(scrollPos < 0){
                    scrollPos = 0;
                }
                _this.$refs.newsContainer.scrollTo(0, scrollPos);
                if(scrollPos == 0){
                    clearInterval(timer);
                }
            }, 100);
        }
    },
    inject:['cpfamilyEventBus'],
    created(){
        this.cpfamilyEventBus.$on("changeNewsType", this.changeNewsTypeHandle);
    },
    mounted(){
        this.reload();
    }
}
</script>

<style>
    .lv-news{
        background-color:#fff;
    }
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
        opacity:0.3;
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

    .lv-news-item-width-media{
        margin:11px 12px;
        width:calc(100% - 24px);
        clear:both;
        
    }

    .lv-news-item-seperator{
        height:0px;
        width:100%;
        border-bottom:1px solid #d3d3d3;
        clear:both;
        padding-top:5px;
    }

    .lv-news-item-media, 
    .lv-news-item-media img{
        width:132px;
        height:83px;
        display:inline-block;
    }

    .lv-news-item-content{
        width:calc(100% - 144px);
        height:83px;
        float:right;
    }

    .lv-news-item-title{
        height:45px;
        width:100%;
        line-height:22.5px;
        vertical-align:middle;
        word-wrap:break-word;
        font-size:16px;
        color:#333333;
    }

    .lv-news-item-info div{
        font-size:11px;
        color:#bebebe;
        line-height:19px;
        height:19px;
        vertical-align:middle;
    }

    .lv-news-item-sign{
        border:1px solid #da444d;
        border-radius:3px;
        color:#da444d;
        font-size:12px;
        height:17px;
        line-height:17px;
        vertical-align:middle;
        width:49px;
        float:right;
    }
</style>
