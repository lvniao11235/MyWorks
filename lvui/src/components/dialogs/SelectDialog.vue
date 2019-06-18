<template>
  <div class="lv-select-dialog" :class="positionClass">
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
    computed:{
        positionClass(){
            if(this.option.position){
                switch(this.option.position){
                    case 'middle':
                        return 'lv-middle';
                    default:
                        return 'lv-bottom';
                }
            } else {
                return 'lv-bottom';
            }
            
        }
    },
    inject:['cardsEventBus'],
}
</script>

<style>
    .lv-select-dialog{
        position:absolute;
        z-index:10101;
        background-color:white;
    }

    .lv-bottom{
        bottom:0px;
        width:100%;
    }

    .lv-middle{
        width:80%;
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        margin:auto;
        display:table;
        border-radius:3px;
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