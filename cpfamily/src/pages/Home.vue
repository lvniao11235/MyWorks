<template>
  <div class="lv-home">
    <Card ref="card" :cardClass="'lv-main-card'">
        <div class="lv-home-head">泾彩党建</div>
        <div class="lv-news-types">
            <div class="lv-news-types-container"  :style="{'width':typesWidth}">
                <div v-for="type in selectedNewsTypes" :key="type.id"
                    :class="{'selected':type.id == currentNewsType.id}"
                    class="lv-news-type" >
                    <div @click="changeType(type)">
                        {{type.text}}
                    </div>
                </div>
            </div>
        </div>
        <div class="lv-more-types" @click="changeTypes">
            <div class="fa fa-plus"></div>
        </div>
        <News></News>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
import News from './News';
import {mapState, mapMutations} from 'vuex';
export default {
    data:function(){
        return {
        }
    },
    computed:{
        typesWidth(){
            return (this.selectedNewsTypes.length * 75) + 'px';
        },
        ...mapState({
            selectedNewsTypes: state=>state.config.selectedNewsTypes,
            currentNewsType: state=>state.config.currentNewsType,
            BaseUrl:state=>state.config.BaseUrl,
        }),
    },
    components:{
        Card, News
    },
    methods:{
        ...mapMutations(['changeCurrentNewsType', 'changeSelectedNewsTypes']),
        changeType(type){
            this.$store.commit('changeCurrentNewsType', type);
            this.cpfamilyEventBus.$emit("changeNewsType", type);
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
    },
    inject:['cpfamilyEventBus'],
    mounted(){
        this.cpfamilyEventBus.$emit("changeNewsType", this.currentNewsType);
        this.$http.get(this.BaseUrl + "/home/getselectedtypes/1").then(function(resp){
             this.$store.commit('changeSelectedNewsTypes', resp.body);
        });
    }
}
</script>

<style>
    .lv-home-head{
        height:50px;
        width:100%;
        background-color:#db3445;
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
        background-color:#ffcccc;
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
        text-decoration:none !important;
        color:black !important;
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
        background-color:#ffcccc;
        height:30px;
        width:30px;
        line-height:30px;
        vertical-align:middle;
        text-align:center;
    }

    .lv-news{
        width:100%;
        height:calc(100% - 80px);
        overflow:scroll;
    }
    
</style>
