<template>
  <div class="lv-select-dialog">
    <div class="lv-select-dialog-text">{{option.title}}</div>
    <div class="lv-select-dialog-item" @click="selected(item)" 
        v-for="item in option.items" :key="item.value">
        {{item.text}}
    </div>
  </div>
</template>

<script>
export default {
    props:['option'],
    methods:{
        selected(item){
            this.option.callback(item);
            this.cardsEventBus.$emit("hideDialog");
        }
    },
    inject:['cardsEventBus'],
}
</script>

<style>
    .lv-select-dialog{
        width:100%;
        position:absolute;
        bottom:0px;
        z-index:10101;
        background-color:white;
    }

    .lv-select-dialog-text{
        text-align:center;
        color:#888;
        font-size:18px;
        height:40px;
        line-height:40px;
        vertical-align:middle;
    }

    .lv-select-dialog-item{
        border-top:1px solid #d9d9d9;
        text-align:center;
        color:#000;
        font-size:14px;
        height:30px;
        line-height:30px;
        vertical-align:middle;
    }
</style>