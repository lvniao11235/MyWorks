<template>
    <div class="a-table">
        <table>
            <thead>
                
            </thead>
        </table>
    </div>
</template>

<script>
import {ColumnCollection} from './utils';
export default{
    props:["columns", 'data'],
    data:function(){
        return {
            columnWrapCollection:[],
            dataWrapCollection:[]
        }
    },
    mounted(){
        this.columnWrapCollection = ColumnCollection.parse(this.columns);
        console.log("test");
    }
}
</script>

<style>

</style>