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
            <div class="lv-media-value">{{strBirth}}</div>
        </div>
        <div class="lv-media-list-item-sepearator"></div>
        <div class="lv-media-list-item" @click="changePartyday">
            <div class="lv-media-text">入党日期</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value">{{strParty}}</div>
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
    data:function(){
        return {
            birth: new Date(2019, 9, 1),
            party: new Date(2018, 8, 1),
        }
    },
    computed:{
        strBirth(){
            return (this.birth.getYear()+1900)+"-"+(this.birth.getMonth()+1)+"-"+this.birth.getDate();
        },
        strParty(){
            return (this.party.getYear()+1900)+"-"+(this.party.getMonth()+1)+"-"+this.party.getDate();
        }
    },
    components:{
        Card
    },
    methods:{
        back(){
            this.$router.back();
        },
        changeBirthday(){
            this.cardsEventBus.$emit('showDialog', {
                type:'timepicker', currentDate:new Date(),
                controlType:'datetime',
                callback:this.changeBirthdayCallback
            });
        },
        changeBirthdayCallback(date){
            this.birth = new Date(date);
        },
        changePartyday(){
            this.cardsEventBus.$emit('showDialog', {
                type:'timepicker', currentDate:this.party,
                callback:this.changePartydayCallback
            });
        },
        changePartydayCallback(date){
            this.party = new Date(date);
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
