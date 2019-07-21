<template>
    <div class="a-admin-content-container">
        <div class="a-tab-head a-skin-border-primary">
            <div class="a-tab-item-container" ref="tabcontainer">
                <div class="a-tab-item" 
                    v-for="(tab, index) in tabs"
                    :class="{'a-selected a-skin-bg-primary a-skin-border-primary a-skin-fg-primary':index == currentIndex}"
                    :key="tab.id" @click.stop="selectedTab(index)">
                        <span :class="tab.icon"></span>
                        {{tab.text}}
                        <span class="fa fa-close" v-if="index != 0" @click.stop="closeTab(index)"></span>
                </div>
            </div>
            <div class="a-tab-head-btns a-skin-border-primary">
                <span 
                    class="a-tab-head-btn fa fa-angle-left a-skin-border-primary a-skin-fg-selected"
                    @click.stop="moveToLeft"
                    ></span>
                <span 
                    class="a-tab-head-btn fa fa-close a-skin-border-primary a-skin-fg-selected"
                    @click.stop="removeAll"
                    ></span>
                <span 
                    class="a-tab-head-btn fa fa-angle-right a-skin-border-primary a-skin-fg-selected"
                    @click.stop="moveToRight"
                    ></span>
            </div>
        </div>
        <div class="a-tab-container">
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
            currentIndex:0,
        }
    },
    computed:{
        ...mapState({
            currentTab:state=>state.admin.currentTab,
            leftMenu:state=>state.admin.leftMenu,
            firstPage:state=>state.admin.firstPage,
        }),
    },
    watch:{
        $route(to){
            var index = this.tabs.findIndex(x=>x.url == to.fullPath);
            if(index != -1){
                this.currentIndex = index;
                this.$router.push(this.tabs[index].url);
                
            } else {
                this.$router.push(this.tabs[this.currentIndex].url);
            }
        },
    },
    methods:{
        ...mapMutations(['changeCurrentTab']),
        openNewTabHandle(item){
            var index = this.tabs.findIndex(x=>x.url == item.url);
            if(index == -1){
                this.tabs.push(item);
                this.currentIndex = this.tabs.length - 1;
                this.$router.push(item.url);
            } else {
                if(this.currentIndex != index){
                    this.currentIndex = index;
                    this.$router.push(item.url);
                }

            }
            this.$nextTick(function(){
                this.moveTab();
            });
        },
        selectedTab(index){
            if(this.currentIndex != index){
                this.currentIndex = index;
                this.$router.push(this.tabs[index].url);
                this.$nextTick(function(){
                    this.moveTab();
                });
            }
        },
        closeTab(index){
            this.tabs.splice(index, 1);
            if(this.currentIndex == index){
                if(index != 0){
                    this.currentIndex = index - 1;
                    this.$router.push(this.tabs[this.currentIndex].url);
                    this.$nextTick(function(){
                        this.moveTab();
                    });
                } 
            }
        },
        removeAll(){
            this.currentIndex = 0;
            this.tabs.splice(1);
            this.$router.push(this.tabs[0].url);
            this.$refs.tabcontainer.children[0].style.marginLeft = 5 + "px";
        },
        moveTab(){
            var width = 5;
            for(var i=0; i<=this.currentIndex; i++){
                width += this.$refs.tabcontainer.children[i].clientWidth + 5;
            }
            var marginleft = -5;
            if(width > this.$refs.tabcontainer.clientWidth){
                marginleft = width - this.$refs.tabcontainer.clientWidth + 10;
            } else {
                marginleft = -5;
            }
            this.$refs.tabcontainer.children[0].style.marginLeft = -1 * marginleft + "px";
        },
        moveToLeft(){
            var marginleft = parseInt(this.$refs.tabcontainer.children[0].style.marginLeft);
            var width = 0;
            for(var i=0; i<this.$refs.tabcontainer.children.length; i++){
                width += this.$refs.tabcontainer.children[i].clientWidth + 5;
            }
            if(width + marginleft > this.$refs.tabcontainer.clientWidth){
                this.$refs.tabcontainer.children[0].style.marginLeft = 
                    parseInt(this.$refs.tabcontainer.children[0].style.marginLeft) + 
                        -1 * Math.min(width + marginleft - 
                            this.$refs.tabcontainer.clientWidth + 50, 100) + "px";
            }
            /*
            var width = 0;
            for(var i=0; i<this.$refs.tabcontainer.children.length; i++){
                width += this.$refs.tabcontainer.children[i].clientWidth + 5;
            }
            if(width + parseInt(this.$refs.tabcontainer.children[0].style.marginLeft) > this.$refs.tabcontainer.clientWidth){
                this.$refs.tabcontainer.children[0].style.marginLeft = 
                    parseInt(this.$refs.tabcontainer.children[0].style.marginLeft) + 
                    -1*Math.min(width + parseInt(this.$refs.tabcontainer.children[0].style.marginLeft)
                        - this.$refs.tabcontainer.clientWidth, 50) + "px";
            }
            */
        },
        moveToRight(){
            var marginleft = parseInt(this.$refs.tabcontainer.children[0].style.marginLeft);
            if(marginleft < 5){
                marginleft += 50;
            }
            if(marginleft > 5){
                marginleft = 5;
            }
            this.$refs.tabcontainer.children[0].style.marginLeft = marginleft + "px";
            /*
            var width = 0;
            for(var i=0; i<this.$refs.tabcontainer.children.length; i++){
                width += this.$refs.tabcontainer.children[i].clientWidth + 5;
            }
            if(width + parseInt(this.$refs.tabcontainer.children[0].style.marginLeft) > this.$refs.tabcontainer.clientWidth){
                var right = 
                    parseInt(this.$refs.tabcontainer.children[0].style.marginLeft) + 
                    Math.min(width + parseInt(this.$refs.tabcontainer.children[0].style.marginLeft)
                        - this.$refs.tabcontainer.clientWidth, 50) + "px";
                if(right > 0){
                    right = 5;
                }
                this.$refs.tabcontainer.children[0].style.marginLeft = right + "px"
            }
            */
        },
        resizeHandle(){
            this.$nextTick(function(){
                this.moveTab();
            });
        }
    },
    inject:['adminEventBus'],
    mounted(){
        this.adminEventBus.$on("openNewTab", this.openNewTabHandle);
        this.adminEventBus.$on("resized", this.resizeHandle);
        this.tabs.push(this.firstPage);
        this.currentIndex = 0;
        this.$router.push(this.firstPage.url);
    }
}
</script>

<style>
.a-tab-head{
    width:100%;
    height:30px;
    border-bottom:1px solid #d2d6de;
    background-color:#fff;
    padding-top:5px;
    position:relative;
    overflow:hidden;
}

.a-tab-item{
    padding:5px 10px;
    margin-left:5px;
    box-sizing:border-box;
    height:31px;
    font-size:15px;
    line-height:19px;
    border:1px solid #c7c7c7;
    display:inline-block;
    border-bottom-color:transparent;
    z-index:0px;
}

.a-tab-item.a-selected{
    border-bottom-color:#fff !important;
}

.a-tab-container{
    position:relative;
    width:100%;
    height:calc(100% - 36px);
    background-color:#ecf0f5;
}

.a-tab-item-container{
    width:calc(100% - 64px);
}

.a-tab-head-btns{
    width:62px;
    height:30px;
    border:1px solid;
    position:absolute;
    right:1px;
    top:5px;
    z-index:5;
    background-color:#fff;
}

.a-tab-head-btn{
    width:20px;
    display:inline-block;
    text-align:center;
    height:30px;
    line-height:30px !important;
    font-size:18px !important;
    vertical-align:middle;
    border-left:1px solid;
}

.a-tab-head-btn:first-child{
    border-left:none;
}
</style>