<template>
    <div class="lv-timepicker-dialog">
        <div class="lv-timepicker-time" v-show="type == 4">
            <div class="lv-date-head">
                <span @click="changeType(1)">{{year}}</span>年
                <span @click="changeType(2)">{{month}}</span>月
                <span @click="changeType(3)">{{date}}</span>月
            </div>
            <div class="lv-times">
                <input type="text" v-model.number="hour" @input="limitHour" ref="hour"/>:
                <input type="text" v-model.number="minute" @input="limitMinute" ref="minute"/>:
                <input type="text" v-model.number="second" @input="limitSecond" ref="second"/>
            </div>
            <div class="lv-date-btns">
                <div @click="ok">确定</div>
                <div @click="reset">重置</div>
            </div>
        </div>
        <div class="lv-timepicker-date" v-show="type == 3">
            <div class="lv-date-head">
                <div class="lv-date-left" @click="prevMonth"></div>
                <span @click="changeType(1)">{{year}}</span>年<span @click="changeType(2)">{{month}}</span>月
                <div class="lv-date-right" @click="nextMonth"></div>
            </div>
            <div class="lv-date-item lv-date-day">日</div>
            <div class="lv-date-item lv-date-day">一</div>
            <div class="lv-date-item lv-date-day">二</div>
            <div class="lv-date-item lv-date-day">三</div>
            <div class="lv-date-item lv-date-day">四</div>
            <div class="lv-date-item lv-date-day">五</div>
            <div class="lv-date-item lv-date-day">六</div>
            <div class="lv-date-item" v-for="item in days" :key="item.toString()"
                :class="{'lv-date-weekend':isWeekEnd(item), 
                    'lv-date-different-month':!isSameMonth(item),
                    'lv-date-current-date':isCurrentDate(item)}"
                    :alt="item.toString()"
                @click="changeDate(item)">
                {{item.getDate()}}
            </div>
            <div class="lv-date-btns">
                <div @click="ok">确定</div>
                <div @click="reset">重置</div>
            </div>
        </div>
        <div class="lv-timepicker-month" v-show="type == 2">
            <div class="lv-date-head">
                <span @click="changeType(1)" >{{year}}</span>年
            </div>
            <div class="lv-date-month-item" v-for="item in months" :key="item" 
                 :class="{'lv-date-current-month':item == month}"
                @click="changeMonth(item)">
                {{item}}
            </div>

        </div>
        <div class="lv-timepicker-year" v-show="type == 1">
            <div class="lv-date-head">
                <div class="lv-date-left" @click="prevYear"></div>
                <div class="lv-date-right" @click="nextYear"></div>
            </div>
            <div class="lv-date-year-item" v-for="item in years" :key="item"
                :class="{'lv-date-current-year':item == year}"
                @click="changeYear(item)">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['option'],
    data:function(){
        return {
            initDate:new Date(),
            day:0,
            year:0,
            month:0,
            date:0,
            hour:0,
            minute:0,
            second:0,
            type:3,     //1:year, 2:month, 3:day, 4:time
            currentType:3,
            currentDate:new Date(),
            firstDate:0,
            days:[],
            months:[1,2,3,4,5,6,7,8,9,10,11,12],
            years:[],
            tempYear:0,
            temp:0
        }
    },
    mounted(){
        if(this.option.currentDate){
            this.currentDate = new Date(this.option.currentDate);
            this.initDate = new Date(this.option.currentDate);
        }
        this.init(this.currentDate);
    },
    methods:{
        init(date){
            this.year = date.getYear()+1900;
            this.tempYear = this.year;
            this.month = date.getMonth()+1;
            this.date = date.getDate();
            this.minute = date.getMinutes();
            this.second = date.getSeconds();
            this.hour = date.getHours();
            this.day = date.getDay();
            var temp = new Date(date.getYear()+1900, 
                date.getMonth(), 1, this.hour, this.minute, this.second);
            temp.setDate((7-temp.getDay())-6);
            this.firstDate = new Date(temp);
            this.days = [];
            for(var i=0; i<6*7; i++){
                this.days.push(new Date(temp));
                temp.setDate(temp.getDate()+1);
            }
        },
        changeType(type){
            this.type = type;
            if(type == 1){
                this.tempYear = this.year;
                this.createYears(this.tempYear);
            }
        },
        createYears(year){
            var temp = year - 7;
            this.years = [];
            for(var i=0; i<15; i++){
                this.years.push(temp+i);
            }
        },
        isWeekEnd(date){
            return date.getDay() == 0 || date.getDay() == 6;
        },
        isSameMonth(date){
            return date.getMonth() == this.currentDate.getMonth();
        },
        isCurrentDate(date){
            return date.getMonth() == this.currentDate.getMonth() &&
                date.getYear() == this.currentDate.getYear() &&
                date.getDate() == this.currentDate.getDate();
        },
        changeDate(date){
            this.currentDate = new Date(date);
            this.init(this.currentDate);
            if(this.option.controlType == "datetime"){
                this.type = 4;
            }
        },
        prevMonth(){
            this.currentDate.setMonth(this.currentDate.getMonth()-1);
            this.init(this.currentDate);
        },
        nextMonth(){
            this.currentDate.setMonth(this.currentDate.getMonth()+1);
            this.init(this.currentDate);
        },
        reset(){
            this.currentDate = new Date(this.initDate);
            this.init(this.currentDate);
        },
        changeMonth(month){
            this.currentDate.setMonth(month-1);
            this.type = 3;
            this.init(this.currentDate);
        },
        changeYear(year){
            this.currentDate.setYear(year);
            this.type = 3;
            this.init(this.currentDate);
        },
        prevYear(){
            this.tempYear -= 15;
            this.createYears(this.tempYear);
        },
        nextYear(){
            this.tempYear += 15;
            this.createYears(this.tempYear);
        },
        ok(){
            if(this.option.controlType == "datetime"){
                this.option.callback(new Date(this.year, this.month-1, 
                    this.date, this.hour, this.minute, this.second));
            } else {
                this.option.callback(new Date(this.year, this.month-1, this.date));
            }
            this.cardsEventBus.$emit("hideDialog");
        },
        limitHour(){
            if(this.$refs.hour.value > 23){
                this.hour = 23;
            } else if(this.$refs.hour.value < 0){
                this.hour = 0;
            } else if(this.$refs.hour.value.toString().length == 0) {
                this.hour = 0;
            }
        },
        limitMinute(){
            if(this.$refs.minute.value > 59){
                this.minute = 59;
            } else if(this.$refs.minute.value < 0){
                this.minute = 0;
            } else if(this.$refs.minute.value.toString().length == 0) {
                this.minute = 0;
            }
        },
        limitSecond(){
            if(this.$refs.second.value > 59){
                this.second = 23;
            } else if(this.$refs.second.value < 0){
                this.second = 0;
            } else if(this.$refs.second.value.toString().length == 0) {
                this.second = 0;
            }
        }
    },
    inject:['cardsEventBus'],
}
</script>

<style>
    .lv-timepicker-dialog{
        width:80%;
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        margin:auto;
        display:table;
        z-index:10101;
        background-color:white;
        border-radius:3px;
        text-align:center;
    }

    .lv-timepicker-date{
        width:100%;
        font-size:0px;
    }

    .lv-timepicker-month{
        width:100%;
    }

    .lv-timepicker-year{
        width:100%;
    }

    .lv-date-item{
        display:inline-block;
        width:calc(100%/7);
        height:30px;
        line-height:30px;
        vertical-align:middle;
        text-align:center;
        font-size:10px;
        color:#666;
    }

    .lv-date-head{
        height:40px;
        width:100%;
        line-height:40px;
        vertical-align:middle;
        border-bottom:1px solid #e2e2e2;
        font-size:18px;
    }

    .lv-date-head span{
        display:inline-block;
        width:60px;
        text-align:center;
    }

    .lv-date-day{
        background-color:#e2e2e2;
    }

    .lv-date-left{
        width:20px;
        height:20px;
        border-left:2px solid #999;
        border-bottom:2px solid #999;
        margin-left:15px;
        margin-top:10px;
        transform:rotate(45deg);
        float:left;
    }
    .lv-date-right{
        width:20px;
        height:20px;
        border-top:2px solid #999;
        border-right:2px solid #999;
        margin-right:15px;
        margin-top:10px;
        transform:rotate(45deg);
        float:right;
    }

    .lv-date-weekend{
        color:#ff5f07 !important;
    }

    .lv-date-different-month, .lv-date-weekend.lv-date-different-month{
        color:#e2e2e2 !important;
    }

    .lv-date-current-date{
        border-radius:15px;
        width:calc(100%/7 - 2px) !important;
        height:28px !important;
        line-height:28px !important;
        border:1px solid red !important;
    }

    .lv-date-btns{
        border-top:1px solid #e2e2e2;
        width:100%;
        height:30px;
        font-size:14px;
    }

    .lv-date-btns div{
        float:right;
        height:24px;
        width:60px;
        border:1px solid #e2e2e2;
        margin-top:2px;
        margin-right:10px;
        border-radius:3px;
        text-align:center;
        line-height:24px;
        vertical-align:middle;
    }

    .lv-date-month-item{
        width:25%;
        height:50px;
        line-height:50px;
        vertical-align:middle;
        text-align:center;
        display:inline-block;
    }

    .lv-date-current-month{
        border-radius:15px;
        width:calc(25% - 2px) !important;
        height:48px !important;
        line-height:48px !important;
        border:1px solid red !important;
    }

    .lv-date-year-item{
        width:20%;
        height:50px;
        line-height:50px;
        vertical-align:middle;
        text-align:center;
        display:inline-block;
    }

    .lv-date-current-year{
        border-radius:15px;
        width:calc(20% - 2px) !important;
        height:48px !important;
        line-height:48px !important;
        border:1px solid red !important;
    }

    .lv-times input{
        width:40px;
        display:inline-block;
        margin:10px 2px;
        outline:none;
        border:1px solid #e2e2e2;
        text-align:center;
    }
</style>