<template>
  <div class="lv-alert-dialog">
    <div class="lv-alert-dialog-title">{{option.title}}</div>
    <div class="lv-alert-dialog-message">{{option.message}}</div>
    <div class="lv-alert-dialog-ok" @click="ok">OK</div>
  </div>
</template>

<script>
export default {
    props:['option'],
    methods:{
        ok(){
            this.cardsEventBus.$emit("hideDialog");
        }
    },
    inject:['cardsEventBus'],
}
</script>

<style>
    .lv-alert-dialog{
        width:80%;
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        margin:auto;
        display:table;
        z-index:10101;
        background-color:white;
        border-radius:3px;
        text-align:center;
    }

    .lv-alert-dialog-title{
        height:40px;
        line-height:40px;
        vertical-align:middle;
        font-size:18px;
        font-weight:400;
        color:#888;
    }

    .lv-alert-dialog-message{
        width:calc(100% - 20px);
        padding:10px;
        font-size:14px;
        color:#000;
        word-wrap:break-word;
        word-break:normal;
    }

    .lv-alert-dialog-ok{
        border-top:1px solid #d9d9d9;
        text-align:center;
        font-size:18px;
        height:40px;
        line-height:40px;
        vertical-align:middle;
        color:#f90;
    }
</style>