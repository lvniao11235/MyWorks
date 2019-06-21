<template>
    <div class="lv-timepicker-dialog">
    <h1>timepicker</h1>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            year:0,
            month:0,
            day:0,
            hour:0,
            minute:0,
            second:0
        }
    }
}
</script>

<style>
    .lv-timepicker-dialog{
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
</style>