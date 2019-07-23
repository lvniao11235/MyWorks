<template>
    <div class="a-table-progress">
        <div class="a-table-progress-value a-skin-bg-primary" :style="{width:value+'px'}"></div>
    </div>
</template>

<script>
export default{
    props:["value"]
}
</script>

<style>
.a-table-progress{
    width:100px;
    height:10px;
    border-radius:5px;
    background-color:gray;
    margin:0 auto;
}

.a-table-progress-value{
    height:10px;
    border-radius:5px;
    float:left;
}
</style>