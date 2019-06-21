<template>
  <div class="lv-personal">
    <Card ref="card" :cardClass="'lv-fullpage-card'">
        <div class="lv-personal-head">
            <div @click="back" class="lv-personal-return fa fa-angle-left"></div>个人信息
        </div>
        <div class="lv-media-list-item">
            <div class="lv-media-text">性别</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value">男</div>
        </div>
        <div class="lv-media-list-item-sepearator"></div>
        <div class="lv-media-list-item" @click="changeBirthday">
            <div class="lv-media-text">出生日期</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value">1993-01-18</div>
        </div>
        <div class="lv-media-list-item-sepearator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-text">入党日期</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value">2018-01-18</div>
        </div>
        <div class="lv-media-list-item-sepearator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-text">邮箱</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value">example@outlook.com</div>
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
        },
        changeBirthday(){
            this.cardsEventBus.$emit('showDialog', {
                type:'timepicker'
            });
        }
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
</style>
