<template>
  <div class="lv-home">
    <Card ref="card" :cardClass="'lv-main-card'">
        <div class="lv-home-head">泾彩党建</div>
        <div class="lv-news-types">
            <div class="lv-news-types-container"  :style="{'width':typesWidth}">
                <div v-for="type in types" :key="type.id"
                    :class="{'selected':currentType == type.id}"
                    class="lv-news-type" @click="changeType(type.id)">
                    {{type.text}}
                </div>
            </div>
        </div>
        <div class="lv-more-types" @click="changeTypes">
            <div class="fa fa-plus"></div>
        </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
export default {
    data:function(){
        return {
            types:[
                {id:'1', text:'会议'},
                {id:'2', text:'要闻'},
                {id:'3', text:'新思想'},
                {id:'4', text:'综合'},
                {id:'5', text:'快闪'},
                {id:'6', text:'会议1'},
                {id:'7', text:'要闻1'},
                {id:'8', text:'新思想1'},
                {id:'9', text:'综合1'},
                {id:'10', text:'快闪1'},
            ],
            currentType: '1'
        }
    },
    computed:{
        typesWidth(){
            return (this.types.length * 75) + 'px';
        }
    },
    components:{
        Card
    },
    methods:{
        changeType(id){
            this.currentType = id;
        },
        changeTypes(){
            this.$router.push("/types");
        }
    },
    activated(){
        this.$refs.card.resotreScrollPos();
    },
    beforeRouteLeave(to, from, next){
        this.$refs.card.saveScrollPos();
        next();
    }
}
</script>

<style>
    .lv-home-head{
        height:50px;
        width:100%;
        background-color:#de2910;
        line-height:50px;
        vertical-align:middle;
        font-size:25px;
        font-weight:bold;
        color:#fff;
        text-align:center;
    }

    .lv-news-types{
        height:30px;
        width:calc(100% - 30px);
        overflow:scroll;
    }

    .lv-news-types-container{
        height:30px;
        width:100%;
        background-color:#ffcccc;
    }

    .lv-news-type{
        width:75px;
        height:28px;
        font-size:14px;
        line-height:28px;
        text-align:center;
        display:inline-block;
        border-bottom:2px solid;
        border-color:transparent;
    }
    .lv-news-type.selected{
        border-bottom:2px solid #de2910;
    }

    .lv-more-types{
        float:right;
        z-index:5;
        font-size:20px;
        color:#fff !important;
        margin-top:-30px;
        background-color:#de2910;
        height:30px;
        width:30px;
        text-align:center;
    }
</style>
