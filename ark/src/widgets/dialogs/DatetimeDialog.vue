<template>
    <div class="a-datetime-dialog a-page-center">
        <DragContainer>
            <div class="a-datetime-dialog-container">
                <div class="a-datetime-header">
                    <span class="fa fa-angle-left" @click="dateJump(-1)" v-if="type != 4"></span>
                    <span class="a-datetime-year" @click="changeView(3)">{{currentYear}}</span>
                    <span>年</span>
                    <span class="a-datetime-month" @click="changeView(2)">{{currentMonth}}</span>
                    <span>月</span>
                    <template v-if="type==4">
                        <span class="a-datetime-month" @click="changeView(1)">{{currentDate}}</span>
                        <span>日</span>
                    </template>
                    <span class="fa fa-angle-right" @click="dateJump(1)" v-if="type != 4"></span>
                </div>
                <template  v-if="type == 1">
                    <div class="a-datetime-day-item a-datetime-day-header">日</div>
                    <div class="a-datetime-day-item a-datetime-day-header">一</div>
                    <div class="a-datetime-day-item a-datetime-day-header">二</div>
                    <div class="a-datetime-day-item a-datetime-day-header">三</div>
                    <div class="a-datetime-day-item a-datetime-day-header">四</div>
                    <div class="a-datetime-day-item a-datetime-day-header">五</div>
                    <div class="a-datetime-day-item a-datetime-day-header">六</div>
                    <div v-for="(day, index) in days"
                        :key="day.getTime()"  @click="changeDate(day)" 
                        :class="{'a-border-top': (index+1)/7 > 1, 'a-border-right':(index+1)%7!=0}"
                        class="a-datetime-day-item">
                        <div :class="{'a-datetime-selected':currentDate == day.getDate() && (currentMonth-1) == day.getMonth(),
                            'a-datetime-weekend':(day.getDay() == 0 || day.getDay() == 6) && (currentMonth-1) == day.getMonth()}"
                            :style="{color:(day.getMonth()+1) == currentMonth ? 'inherit':'#ddd'}">
                            {{day.getDate()}}
                        </div>
                    </div>
                </template>
                <template v-if="type == 2">
                    <div v-for="(month, index) in MONTH" 
                        class="a-datetime-month-item" :key="month" @click="changeMonth(month)"
                        :class="{'a-border-top': (index+1)/4 > 1, 'a-border-right':(index+1)%4!=0}">
                        <div :class="{'a-datetime-selected':currentMonth == month}">{{month}}</div>
                    </div>
                </template>
                <template  v-if="type == 3">
                    <div v-for="(year, index) in YEAR"
                        class="a-datetime-year-item" :key="year" @click="changeYear(year)"
                        :class="{'a-border-top': (index+1)/3 > 1, 'a-border-right':(index+1)%3!=0}">
                        <div :class="{'a-datetime-selected':currentYear == year}">{{year}}</div>
                    </div>
                </template>
                <template  v-if="type == 4">
                    <div class="a-datetime-time">
                        <input type="text" v-model.number="currentHour"/> :
                        <input type="text" v-model.number="currentMinute"/> :
                        <input type="text" v-model.number="currentSecond"/>
                    </div>
                </template>
                <div class="a-datetime-foot">
                    <div @click="ok">确定</div>
                    <div @click="cancel">取消</div>
                </div>
            </div>
        </DragContainer>
    </div>
</template>

<script>
import DragContainer from '../controls/DragContainer';
export default {
    props:["option"],
    data:function(){
        return {
            MONTH:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            YEAR:[],
            firstDate:null,
            lastDate:null,
            selectDate:new Date(),
            type:1,     //1:date, 2:month, 3:year, 4:time
            days:[],
            currentYear:0,
            currentMonth:0,
            currentDate:0,
            currentHour:0,
            currentMinute:0,
            currentSecond:0
        }
    },
    components:{
        DragContainer
    },
    mounted(){
        var date = new Date();
        if(this.option.datetime){
            date = new Date(this.option.datetime);
        }
        this.selectDate = new Date(date);
        this.init(date);
    },
    methods:{
        changeView(type){
            this.type = type;
        },
        changeYear(year){
            this.selectDate.setFullYear(year);
            this.changeView(2);
            this.init(new Date(this.selectDate));
        },
        changeMonth(month){
            this.selectDate.setMonth(month-1);
            this.changeView(1);
            this.init(new Date(this.selectDate));
        },
        changeDate(date){
            this.selectDate.setDate(date.getDate());
            this.selectDate.setMonth(date.getMonth());
            if(this.option.controlType == "datetime"){
                this.changeView(4);
            }
            this.init(new Date(this.selectDate));
        },
        dateJump(add){
            if(this.type == 1){
                this.selectDate.setMonth(this.selectDate.getMonth() + add);
            } else if(this.type == 2){
                this.selectDate.setFullYear(this.selectDate.getFullYear() + add);
            } else if(this.type == 3){
                if(add == -1){
                    this.selectDate.setFullYear(this.selectDate.getFullYear() - 9);
                } else {
                    this.selectDate.setFullYear(this.selectDate.getFullYear() + 9);
                }
            }
            
            this.init(new Date(this.selectDate));
        },
        init(date){
            this.currentYear = date.getFullYear();
            this.currentMonth = date.getMonth() + 1;
            this.currentDate = date.getDate();
            this.currentHour = date.getHours();
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
            
            var year = date.getFullYear();
            year -= 4;
            this.YEAR = [];
            for(var i=0; i<9; i++){
                this.YEAR.push(year);
                year++;
            }
            date.setDate(1);
            this.firstDate = new Date(date);
            this.firstDate.setDate((7-this.firstDate.getDay()) - 6);
            date.setMonth(date.getMonth()+1);
            date.setDate(0);
            this.lastDate = new Date(date);
            this.lastDate.setDate(this.lastDate.getDate() +(6-this.lastDate.getDay()));
            this.days = [];
            var total = Math.floor((this.lastDate.getTime() - this.firstDate.getTime())/(1000*60*60*24));
            var temp = new Date(this.firstDate);
            for(i=0; i<=total; i++){
                this.days.push(new Date(temp))
                temp.setDate(temp.getDate() + 1);
            }
        },
        ok(){
            if(this.option.callback){
                var date = new Date();
                date.setFullYear(this.currentYear);
                date.setMonth(this.currentMonth - 1);
                date.setDate(this.currentDate);
                date.setHours(this.currentHour);
                date.setMinutes(this.currentMinute);
                date.setSeconds(this.currentSecond);
                this.option.callback(date);
            } else {
                this.aDialog.close();
            }
        },
        cancel(){
            this.aDialog.close();
        }
    }
}
</script>

<style>
.a-datetime-dialog{
    width:70%;
    
}

.a-datetime-dialog-container{
    width:100%;
    background-color:#fff;
    text-align:center;
    color:#888888;
}

.a-datetime-header{
    height:30px;
    border-bottom:1px solid #c7c7c7;
    line-height:30px;

}

.a-datetime-selected{
    background-color:rgb(0, 122, 255);
    color:#fff !important;
}

.a-datetime-header .fa-angle-left{
    position:absolute;
    left:10px;
}
.a-datetime-header .fa-angle-right{
    position:absolute;
    right:10px;
}

.a-datetime-header .fa{
    height:30px;
    line-height:30px !important;
    font-size:20px !important;
}

.a-datetime-year{
    display:inline-block;
    width:50px;
    text-align:center;
}

.a-datetime-month{
    display:inline-block;
    width:30px;
    text-align:center;
}

.a-datetime-foot{
    height:30px;
    border-top:1px solid #c7c7c7;
}

.a-datetime-day-header{
    background-color:#c7c7c7;
    color:#fff;
}
.a-datetime-year-item,
.a-datetime-day-item,
.a-datetime-month-item{
    box-sizing:border-box;
    width:14.28%;
    height:30px;
    line-height:30px;
    vertical-align:middle;
    text-align:center;
    display:inline-block;
}

.a-datetime-month-item{
    width:25%;
}

.a-datetime-year-item{
    width:33.33%;
}

.a-datetime-year-item.a-border-right,
.a-datetime-month-item.a-border-right,
.a-datetime-day-item.a-border-right{
    border-right:1px solid #c7c7c7;
}

.a-datetime-year-item.a-border-top,
.a-datetime-month-item.a-border-top,
.a-datetime-day-item.a-border-top{
    border-top:1px solid #c7c7c7;
}

.a-datetime-time{
    padding:5px;
}
.a-datetime-time input{
    width:30px;
    border:1px solid #c7c7c7;
    display:inline-block;
    text-align:center;
}

.a-datetime-foot div{
    display:inline-block;
    box-sizing:border-box;
    width:50%;
    border-right:1px solid #c7c7c7;
    height:30px;
    line-height:30px;
    color:#f90;
}
.a-datetime-foot div:last-child{
    border-right:none;

}

.a-datetime-weekend{
    color:#f90 !important;
}
</style>

