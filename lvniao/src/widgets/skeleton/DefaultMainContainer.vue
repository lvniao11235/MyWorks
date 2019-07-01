<template>
    <div class="lv-widget">
        <div class="lv-tab-head lv-skin-border-primary" ref="tabContainer">
            <div v-for="tab in tabs" :class="selectedClass(tab)" @click="selectedTab(tab)" :id="tab.id" :key="tab.id" class="lv-tab-item">
                <span :class="tab.icon"></span>
                {{tab.text}}
                <span class="fa fa-close" @click.stop="closeTab(tab)" v-if="tab.id != 1"></span>
            </div>
            <div class="lv-tab-btns lv-skin-border-primary">
                <span class="lv-tab-btn lv-skin-border-primary fa fa-angle-left" @click.stop="moveToLeft"></span>
                <span class="lv-tab-btn lv-skin-border-primary fa fa-close" @click.stop="closeAll"></span>
                <span class="lv-tab-btn lv-skin-border-primary fa fa-angle-right" @click.stop="moveToRight"></span>
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
            tabs:[],
            tabsWidth:0,
            marginleft:0
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
                this.$nextTick(function(){
                    this.resetTabContainerWidth();
                });
            }
            this.$store.commit("changeCurrentTab", item);
            this.$router.push(item.url);
            this.$nextTick(function(){
                if(this.tabsWidth > (this.$refs.tabContainer.clientWidth - 62 - 10)){
                    var marginleft = 0
                    for(var i=0; i<this.$refs.tabContainer.childElementCount;i++){
                        if(this.$refs.tabContainer.children[i].id.toString() == item.id.toString()){
                            break;
                        }
                        marginleft += this.$refs.tabContainer.children[i].clientWidth + 7;
                    }
                    if(marginleft > this.$refs.tabContainer.clientWidth - 200){
                        this.marginleft = this.$refs.tabContainer.clientWidth - 200 - marginleft;
                    } else {
                        this.marginleft = 0;
                    }
                    this.$refs.tabContainer.children[0].style.marginLeft = this.marginleft + "px";
                }
                
            });
            
        },
        selectedClass(tab){
            return tab.id == this.currentTab.id ? "lv-skin-border-primary lv-selected":"";
        },
        selectedTab(tab){
            this.$store.commit("changeCurrentTab", tab);
            this.$router.push(tab.url);
        },
        closeTab(tab){
            if(tab.id == 1) return;
            var index = this.tabs.findIndex(x=>x.id == tab.id);
            this.tabs.splice(index, 1);
            this.$nextTick(function(){
                this.resetTabContainerWidth();
            });
            if(tab.id != this.currentTab.id) return;
            if(index == 0){
                this.$store.commit("changeCurrentTab", this.tabs[index]);
            } else if(index > 0) {
                var newtab =  this.tabs[index-1]
                this.$store.commit("changeCurrentTab",newtab);
            } else {
                return;
            }
            this.$router.push(this.currentTab.url);
        },
        resetTabContainerWidth(){
            this.tabsWidth = 10;
            
            for(var i=0; i<this.$refs.tabContainer.childElementCount; i++){
                this.tabsWidth += this.$refs.tabContainer.children[i].clientWidth + 3 + 5;
            }
        },
        resizeHandle(){
            this.$nextTick(function(){
                this.resetTabContainerWidth();
                if(this.tabsWidth < this.$refs.tabContainer.clientWidth){
                    this.marginleft = 0;
                    this.$refs.tabContainer.children[0].style.marginLeft = this.marginleft + "px";
                }
            });
        },
        moveToLeft(){
            this.$refs.tabContainer;
            if(this.tabsWidth > (this.$refs.tabContainer.clientWidth - 62 - this.marginleft)){
                this.marginleft += -100;
                if((this.$refs.tabContainer.clientWidth - 62 - this.marginleft) >= this.tabsWidth){
                    this.marginleft = -(this.tabsWidth - this.$refs.tabContainer.clientWidth + 62)
                }
            }
            this.$nextTick(function(){
                this.$refs.tabContainer.children[0].style.marginLeft = this.marginleft + "px";
            });
            
        },
        moveToRight(){
            if(this.marginleft < 0){
                this.marginleft = Math.min(this.marginleft + 100, 0);
                this.$nextTick(function(){
                    this.$refs.tabContainer.children[0].style.marginLeft = this.marginleft + "px";
                });
            }
        },
        closeAll(){
            var newtabs = [];
            newtabs.push(this.tabs.find(x=>x.id == 1));
            this.tabs = newtabs;
            this.$router.push(this.tabs[0].url);
            this.marginleft = 0;
            this.$refs.tabContainer.children[0].style.marginLeft = this.marginleft + "px";
            this.$store.commit("changeCurrentTab",this.tabs[0]);
        }
    },
    inject:['widgetEventBus'],
    mounted(){
        this.widgetEventBus.$on("openNewTab", this.openNewTabHandle);
        this.widgetEventBus.$on("resize", this.resizeHandle);

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
    position:relative;
    overflow:hidden;
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
    z-index:0px;
}

.lv-tab-item.lv-selected{
    border-bottom-color:#fff !important;
}

.lv-tab-container{
    position:relative;
    width:100%;
    height:calc(100% - 36px);
}

.lv-tab-btns{
    width:62px;
    height:30px;
    border:1px solid;
    position:absolute;
    right:10px;
    top:5px;
    z-index:5;
    background-color:#fff;
}

.lv-tab-btn{
    width:20px;
    display:inline-block;
    text-align:center;
    height:30px;
    line-height:30px !important;
    font-size:18px !important;
    vertical-align:middle;
    border-left:1px solid;
}

.lv-tab-btn:first-child{
    border-left:none;
}
</style>