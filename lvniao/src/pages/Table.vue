<template>
    <div class="lv-widget lv-table-page">
        <Table></Table>
    </div>
</template>

<script>
import Table from '../widgets/tables/Table';

export default{
    components:{
        Table
    }
}
</script>

<style>
.lv-table-page{
    padding:5px;
    width:calc(100% - 10px) !important;
    height:calc(100% - 10px) !important;
    background-color:#fff;
}
</style>