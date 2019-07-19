<template>
    <div class="a-dialogs">
        <PageContainer :clazz="'a-card-fullpage'">
            <template>
                <CardHeader slot="header" :title="'日历'" :hasBack="true"></CardHeader>
                <div slot="content">
                    <div id="calendar"></div>
                </div>
            </template>
            
        </PageContainer>
    </div>
</template>

<script>
import PageContainer from '../../widgets/cards/PageContainer';
import CardHeader from '../../widgets/cards/CardHeader';
import '../../widgets/controls/calendar/js-calendar.css';
import {JSCalendar} from '../../widgets/controls/calendar/js-calendar.js';
export default {
    components:{
        PageContainer, CardHeader
    },
    data:function(){
        return {
            calendar:null,
        }
    },
    methods:{
    },
    mounted(){
        var elem = document.getElementById("calendar");
        this.calendar = new JSCalendar(elem, {
            monthsVocab:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            daysVocab:["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            viewsVocab:{day : "天", week : "周", month : "月" },
            buttonsVocab:{previous : "<", today : "今天", next : ">"},
            timeUnitVocab:{h:"时", mins:"分"},
            emptyDayVocab:"无数据",
            width:"100%",
            ampmVocab:{am:"上午", pm:"下午"},
            nthVocab: { 1: "日", 2: "日", 3: "日", default: "日" },
            eventBackground:"#ffcccc"
        }).init();
        this.calendar.goNow();   
    }
}
</script>

<style>
#calendar{
    width:100%;
    overflow:scroll;
}

</style>

