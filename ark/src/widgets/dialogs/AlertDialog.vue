<template>
    <div class="a-alert-dialog a-page-center">
        <div class="a-alert-title">{{this.option.title ? this.option.title:"提示"}}</div>
        <div class="a-alert-msg" v-html="this.option.msg"></div>
        <div class="a-separator"></div>
        <div class="a-alert-ok" @click="ok">确定</div>
    </div>
</template>

<script>
export default {
    props:["option"],
    created(){
    },
    methods:{
        ok(){
            if(this.option.callback){
                this.option.callback();
            } else {
                this.aDialog.close();
            }
            
        }
    }
}
</script>

<style>
.a-alert-dialog{
    width:70%;
    border-radius:5px;
    background-color:#fff;
    z-index:10000;
    text-align:center;
    color:#888888;
    border:1px solid #d5d5d6;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
}

.a-alert-title{
    height:40px;
    line-height:40px;
    vertical-align:middle;
    font-size:20px;
    font-weight:bold;
    color:#000;
}

.a-alert-msg{
    line-height:25px;
    font-size:14px;
    vertical-align:middle;
    word-wrap:break-word;
    break-word:break-all;
    width:70%;
    margin:0 auto;

}

.a-alert-ok{
    height:30px;
    line-height:30px;
    vertical-align:middle;
    text-align:center;
    font-size:18px;
    font-weight:bold;
    color:#f90;
}

</style>

