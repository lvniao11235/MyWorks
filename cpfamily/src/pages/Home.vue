<template>
  <div class="lv-home">
    <Card ref="card" :cardClass="'lv-main-card'">
        <div class="lv-home-head">泾彩党建</div>
        <div class="lv-news-types">
            <div class="lv-news-types-container"  :style="{'width':typesWidth}">
                <router-link :to="type.url" v-for="type in selectedNewsTypes" :key="type.id"
                    :class="{'selected':type.id == currentNewsType.id}"
                    class="lv-news-type" >
                    <div @click="changeType(type)">
                        {{type.text}}
                    </div>
                </router-link>
            </div>
        </div>
        <div class="lv-more-types" @click="changeTypes">
            <div class="fa fa-plus"></div>
        </div>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
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
            currentNewsType: state=>state.config.currentNewsType
        })
    },
    components:{
        Card
    },
    methods:{
        ...mapMutations(['changeCurrentNewsType']),
        changeType(type){
            this.$store.commit('changeCurrentNewsType', type);
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

    
</style>
