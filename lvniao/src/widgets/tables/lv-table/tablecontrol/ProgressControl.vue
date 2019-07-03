<template>
    <div class="lv-table-progress">
        <div class="lv-table-progress-value lv-skin-bg-primary" :style="{width:value+'px'}"></div>
    </div>
</template>

<script>
export default{
    props:["value"]
}
</script>

<style>
.lv-table-progress{
    width:100px;
    height:10px;
    border-radius:5px;
    background-color:gray;
    margin:0 auto;
}

.lv-table-progress-value{
    height:10px;
    border-radius:5px;
    float:left;
}
</style>