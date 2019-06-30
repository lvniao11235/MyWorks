<template>
    <div class="lv-widget">
        <div class="lv-tab-head lv-skin-border-primary">
            <div v-for="tab in tabs" :class="selectedClass(tab)" @click="selectedTab(tab)" :key="tab.id" class="lv-tab-item">
                <span :class="tab.icon"></span>
                {{tab.text}}
            </div>
        </div>
        <div class="lv-tab-container">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default{
    data:function(){
        return {
            tabs:[]
        }
    },
    computed:{
        ...mapState({
            currentTab:state=>state.config.currentTab
        }),
       
    },
    methods:{
        ...mapMutations(['changeCurrentTab']),
        openNewTabHandle(item){
            if(!this.tabs.find(x=>x.id == item.id)){
                this.tabs.push(item);
            }
            this.$store.commit("changeCurrentTab", item);
            this.$router.push(item.url);
        },
        selectedClass(tab){
            return tab.id == this.currentTab.id ? "lv-skin-border-primary lv-selected":"";
        },
        selectedTab(tab){
            this.$store.commit("changeCurrentTab", tab);
            this.$router.push(tab.url);
        }
    },
    inject:['widgetEventBus'],
    mounted(){
        this.widgetEventBus.$on("openNewTab", this.openNewTabHandle);
    }
}
</script>

<style>
.lv-tab-head{
    width:100%;
    height:30px;
    border-bottom:1px solid #d2d6de;
    background-color:#fff;
    padding-left:10px;
    padding-top:5px;
}

.lv-tab-item{
    padding:5px 10px;
    margin-right:5px;
    height:19px;
    font-size:15px;
    line-height:19px;
    border:1px solid #d2d6de;
    display:inline-block;
    border-bottom-color:transparent;
}

.lv-tab-item.lv-selected{
    border-bottom-color:#fff !important;
}

.lv-tab-container{
    position:relative;
    width:100%;
    height:calc(100% - 36px);
}
</style>