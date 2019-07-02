<template>
    <div class="lv-widget lv-table-page lv-page-container">
        <LvTable></LvTable>
    </div>
</template>

<script>
import {LvTable} from '../widgets/tables/lv-table';

export default{
    components:{
        LvTable
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