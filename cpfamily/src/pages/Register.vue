<template>
  <div class="lv-personal">
    <Card ref="card" :cardClass="'lv-fullpage-card'">
        <div class="lv-personal-head">
            <div @click="back" class="lv-personal-return fa fa-angle-left"></div>用户注册
        </div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-user-o"></div>
            <div class="lv-media-text">姓名</div> 
            <div class="lv-media-value">请输入您的姓名</div>
        </div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-venus-mars"></div>
            <div class="lv-media-text">性别</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value">男</div>
        </div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-calendar"></div>
            <div class="lv-media-text">出生日期</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value">必填</div>
        </div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-calendar"></div>
            <div class="lv-media-text">出生日期</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value">必填</div>
        </div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-users"></div>
            <div class="lv-media-text">党支部</div>
            <div class="lv-media-value">必填</div>
        </div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-envelope-o"></div>
            <div class="lv-media-text">邮编</div>
            <div class="lv-media-value">请输入您的邮编</div>
        </div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-mobile"></div>
            <div class="lv-media-text">手机号码</div>
            <div class="lv-media-value">请输入手机号码</div>
        </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
export default {
    data:function(){
        return {
        }
    },
    computed:{
    },
    components:{
        Card
    },
    methods:{
        back(){
            this.$router.back();
        },
        
    },
    inject:['cardsEventBus'],
}
</script>

<style>
.lv-personal .lv-fullpage-card{
    background-color:#fff !important;
}
.lv-personal-head{
    width:100%;
    height:44px;
    text-align:center;
    line-height:44px !important;
    vertical-align:middle !important;
    color:#fff;
    background-color:#db3445;
    font-size:17px !important;
}

.lv-personal-return{
    float:left;
    color:#FEFFFE;
    height:44px;
    text-align:center;
    line-height:44px !important;
    vertical-align:middle !important;
    font-size:30px !important;
    width:30px;
}

.lv-media-icon{
    width:30px;
    text-align:center;
}
</style>
