<template>
    <div class="a-admin-logo a-skin-bg-deep" ref="logo">
        <span class="a-skin-fg-primary">{{name}}</span>
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
            shortName:state=>state.admin.shortName,
            longName:state=>state.admin.longName,
            minWidth:state=>state.admin.minWidth,
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
    inject:['adminEventBus'],
    mounted(){
        this.adminEventBus.$on("resize", this.resizeHandle);
        this.adminEventBus.$on("fold", this.foldHandle);
    }
}
</script>

<style>
.a-admin-logo{
    font-weight:700;
    font-size:20px !important;
}
</style>