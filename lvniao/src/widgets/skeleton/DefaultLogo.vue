<template>
    <div class="lv-widget" ref="logo">
        {{name}}
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default{
    data:function(){
        return {
            displayNameFlag:true
        }
    },
    computed:{
        ...mapState({
            shortName:state=>state.config.shortName,
            longName:state=>state.config.longName,
            minWidth:state=>state.config.minWidth,
        }),
        name(){
            return this.displayNameFlag ? this.longName : this.shortName;
        }
    },
    methods:{
        resizeHandle(){
            this.displayNameFlag = this.$refs.logo.clientWidth != 46;
        },
        foldHandle(flag){
            if(window.innerWidth > this.minWidth){
                this.displayNameFlag = !flag;
            }
        }
    },
    inject:['widgetEventBus'],
    mounted(){
        this.widgetEventBus.$on("resize", this.resizeHandle);
        this.widgetEventBus.$on("fold", this.foldHandle);
    }
}
</script>

<style>
.lv-admin-logo{
    font-weight:700;
    font-size:20px !important;
}
</style>