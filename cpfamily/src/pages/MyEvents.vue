<template>
  <div class="lv-my-events">
    <Card ref="card" :cardClass="'lv-fullpage-card'">
        <div class="lv-personal-head">
            <div @click="back" class="lv-personal-return fa fa-angle-left"></div>我的活动
        </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState({
            BaseUrl:state=>state.config.BaseUrl,
        }),
    },
    data:function(){
        return {
            articles:[]
        }
    },
    components:{
        Card
    },
    methods:{
        back(){
            this.$router.back();
        }
    },
    inject:['cardsEventBus'],
    mounted(){
        /*
        this.articles = [];
        this.cardsEventBus.$emit('showDialog', {type:'load'});
        this.$http.post(this.BaseUrl + "/home/get", 
            {type:this.type.id, articleid:1}).then(function(resp){
                this.articles = JSON.parse(resp.bodyText);
                this.cardsEventBus.$emit('hideDialog');
            });
        */
    }
}
</script>

<style>
.lv-my-events .lv-fullpage-card{
    background-color:#fff !important;
}
</style>
