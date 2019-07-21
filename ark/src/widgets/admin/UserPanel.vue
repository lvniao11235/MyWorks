<template>
    <div class="a-function-user-panel a-function-item-content-panel">
        <div class="a-user-summary a-skin-bg-primary">
            <div class="a-user-img"></div>
            <div class="a-user-name">Ark</div>
        </div>
        <div class="a-user-btns">
            <div class="a-skin-border-primary">注销</div>
            <div @click.stop="viewInfo">用户信息</div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data:function(){
        return {
        }
    },
    methods:{
        viewInfo(){
            this.adminEventBus.$emit("openNewTab", this.userUrl);
        }
    },
    computed:{
        ...mapState({
            userUrl:state=>state.admin.userUrl
        }),
    },
    inject:['adminEventBus'],
}
</script>

<style>

.a-function-user-panel .a-user-summary{
    height:100px;
}

.a-user-btns{
    height:30px;
    background-color:#fff;
    font-size:0px;
}

.a-user-btns div{
    font-weight:bold;
    height:30px;
    width:calc(50% - 2px);
    line-height:30px;
    font-size:14px;
    vertical-align:middle;
    text-align:center;
    display:inline-block;
}

.a-user-btns div:first-child{
    border-right:1px solid;
}

.a-user-summary{
    padding-top:10px;
}
.a-user-img{
    width:64px;
    height:64px;
    border-radius:32px;
    background-color:#fff;
    margin:auto;
}

.a-user-name{
    text-align:center;
    font-size:20px;
    font-weight:bold;
    color:#fff;
}
</style>

