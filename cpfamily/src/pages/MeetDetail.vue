<template>
  <div class="lv-bookmeet">
    <Card ref="card" :cardClass="'lv-fullpage-card'">
        <div class="lv-personal-head">
            <div @click="back" class="lv-personal-return fa fa-angle-left"></div>会议详情
        </div>
        <div class="lv-media-list-item" style="margin:12px 0px;">
            <div class="lv-media-text">会议室</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value">大明</div>
        </div>
        <div class="lv-media-list-item" @click="changeStart">
            <div class="lv-media-text">开始时间</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value">{{strStart}}</div>
        </div>
        <div class="lv-media-list-item-sepearator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-text">预估时间</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value">30分钟</div>
        </div>
        <div class="lv-meet-content">
        </div>
        <div class="lv-meet-submit" @click="pushMeet">提交</div>
        <div class="lv-calendar">
            <div id="calendar"></div>
        </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
import '../calendar/js-calendar.css';
import {JSCalendar} from '../calendar/js-calendar.js';
//https://www.npmjs.com/package/vanilla-js-calendar
export default {
    data:function(){
        return {
            start: new Date(),
            party: new Date(2018, 8, 1),
            calendar:null,
        }
    },
    computed:{
        strStart(){
            return (this.start.getYear()+1900)+"-"+(this.start.getMonth()+1)+"-"+this.start.getDate()+
            " " + this.start.getHours() + ":" + this.start.getMinutes();
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
        pushMeet(){
            var date = new Date();
            var data2 = new Date();
            data2.setHours(data2.getHours() + 1);
            var data = { 
                at : date,
                event:{
                    at : date, 
                    displayname : "hello", 
                    duration : 1.5 * 60 * 60 * 1000,  
                    color : "red"
                }
            };
            this.calendar.push(data);
            this.calendar.goNow();
        },
        changeStart(){
            this.cardsEventBus.$emit('showDialog', {
                type:'timepicker', currentDate:new Date(),
                controlType:'datetime',
                callback:this.changeStartCallback
            });
        },
        changeStartCallback(date){
            this.start = new Date(date);
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
    mounted(){
        var elem = document.getElementById("calendar");
        this.calendar = new JSCalendar(elem, {
            monthsVocab:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十一月"],
            daysVocab:["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            viewsVocab:{day : "天", week : "周", month : "月" },
            buttonsVocab:{previous : "<", today : "今天", next : ">"},
            timeUnitVocab:{h:"时", mins:"分"},
            emptyDayVocab:"无数据",
            width:"100%",
            ampmVocab:{am:"上午", pm:"下午"},
            nthVocab: { 1: "日", 2: "日", 3: "日", default: "日" },
            eventBackground:"#db3445"
        }).init().render();
        this.calendar.goNow();
    },
    destroyed(){
        this.calendar.destroy();
    }
}
</script>

<style>

.lv-bookmeet .lv-fullpage-card{
    background-color:#fff;
}

.lv-media-list-item{
    background-color:#fff;
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

.lv-meet-content{
    margin-top:12px;
    background-color:#fff;
    width:100%;
    height:180px;
}

.lv-meet-submit{
    width:60%;
    height:45px;
    line-height:45px;
    vertical-align:middle;
    text-align:center;
    background-color:#db3445;
    border-radius:22.5px;
    color:#fff;
    margin:12px auto;
}

.lv-calendar{
    width:100%;
    overflow:scroll;
}
</style>
