<template>
  <div class="lv-load-dialog">
    <img src="/load.gif"/>
  </div>
</template>

<script>
export default {
    props:['option'],
    methods:{
    },
    inject:['cardsEventBus'],
}
</script>

<style>
    .lv-load-dialog{
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

    .lv-load-dialog img{
        height:100px;
        width:100px;
        margin:50px auto;
        display:inline-block;
    }


</style>