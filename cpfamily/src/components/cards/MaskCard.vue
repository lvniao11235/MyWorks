<template>
  <div class="lv-mask-card" @click="hide">
  </div>
</template>

<script>
export default {
    methods:{
        hide(){
            this.cardsEventBus.$emit("hideDialog");
        }
    },
    inject:['cardsEventBus'],
}
</script>

<style>
    
    .lv-mask-card{
        width:100%;
        height:100%;
        position:absolute;
        top:0px;
        z-index:10100;
        background-color:rgba(0, 0, 0, 0.3);
    }
</style>
