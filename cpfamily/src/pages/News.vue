<template>
  <div class="lv-news" ref="newsContainer">
    <div class="lv-news-item-width-media">
        <div class="lv-news-item-media">
            <img src="/media.png"/>
        </div>
        <div class="lv-news-item-content">
            <div class="lv-news-item-title">
            习近平在省部级主要领导干部学习贯彻十六届六种全会
            </div>
            <div class="lv-news-item-info">
                <div>西安</div>
                <div>2019-06-12 16:07</div>
            </div>
        </div>
        <div class="lv-news-item-sign">
            立即报名
        </div>
    </div>
    <div class="lv-news-item-seperator"></div>
    <div class="lv-news-item-width-media">
        <div class="lv-news-item-media">
            <img src="/media.png"/>
        </div>
        <div class="lv-news-item-content">
            <div class="lv-news-item-title">
            习近平在省部级主要领导干部学习贯彻十六届六种全会
            </div>
            <div class="lv-news-item-info">
                <div>西安</div>
                <div>2019-06-12 16:07</div>
            </div>
        </div>
        <div class="lv-news-item-sign">
            立即报名
        </div>
    </div>
    <div class="lv-news-item-seperator"></div>
    <div class="lv-news-item-width-media">
        <div class="lv-news-item-media">
            <img src="/media.png"/>
        </div>
        <div class="lv-news-item-content">
            <div class="lv-news-item-title">
            习近平在省部级主要领导干部学习贯彻十六届六种全会
            </div>
            <div class="lv-news-item-info">
                <div>西安</div>
                <div>2019-06-12 16:07</div>
            </div>
        </div>
        <div class="lv-news-item-sign">
            立即报名
        </div>
    </div>
    <div class="lv-news-item-seperator"></div>
    <div class="lv-news-item-width-media">
        <div class="lv-news-item-media">
            <img src="/media.png"/>
        </div>
        <div class="lv-news-item-content">
            <div class="lv-news-item-title">
            习近平在省部级主要领导干部学习贯彻十六届六种全会
            </div>
            <div class="lv-news-item-info">
                <div>西安</div>
                <div>2019-06-12 16:07</div>
            </div>
        </div>
        <div class="lv-news-item-sign">
            立即报名
        </div>
    </div>
    <div class="lv-news-item-seperator"></div>
    <div class="lv-news-item-width-media">
        <div class="lv-news-item-media">
            <img src="/media.png"/>
        </div>
        <div class="lv-news-item-content">
            <div class="lv-news-item-title">
            习近平在省部级主要领导干部学习贯彻十六届六种全会
            </div>
            <div class="lv-news-item-info">
                <div>西安</div>
                <div>2019-06-12 16:07</div>
            </div>
        </div>
        <div class="lv-news-item-sign">
            立即报名
        </div>
    </div>
    <div class="lv-news-item-seperator"></div>
    <div class="lv-news-item-width-media">
        <div class="lv-news-item-media">
            <img src="/media.png"/>
        </div>
        <div class="lv-news-item-content">
            <div class="lv-news-item-title">
            习近平在省部级主要领导干部学习贯彻十六届六种全会
            </div>
            <div class="lv-news-item-info">
                <div>西安</div>
                <div>2019-06-12 16:07</div>
            </div>
        </div>
        <div class="lv-news-item-sign">
            立即报名
        </div>
    </div>
    <div class="lv-news-item-seperator"></div>
    <div class="lv-news-item-width-media">
        <div class="lv-news-item-media">
            <img src="/media.png"/>
        </div>
        <div class="lv-news-item-content">
            <div class="lv-news-item-title">
            习近平在省部级主要领导干部学习贯彻十六届六种全会
            </div>
            <div class="lv-news-item-info">
                <div>西安</div>
                <div>2019-06-12 16:07</div>
            </div>
        </div>
        <div class="lv-news-item-sign">
            立即报名
        </div>
    </div>
    <div class="lv-home-btns">
        <div class="lv-move-to-top fa fa-arrow-up" @click="scrollToTop"></div>
        <div class="lv-loaddata fa fa-download"></div>
    </div>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            type:{}
        }
    },
    methods:{
        reload(){
        },
        changeNewsTypeHandle(type){
            this.type = type;
            this.reload();
        },
        scrollToTop(){
            var _this = this;
            var timer = setInterval(function(){
                var scrollPos = _this.$refs.newsContainer.scrollTop - 50;
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
