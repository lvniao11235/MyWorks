<template>
    <div class="a-table">
        <table>
            <thead>
                <tr v-for="(columns, indexr) in columnWrapCollection.headRows" :key="indexr">
                    <template v-for="column in columns">
                        <th :key="column.text"
                            :rowspan="column.rowspan"
                            :colspan="column.colspan"
                            v-if="column.show">
                            {{column.text}}
                        </th>
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <template v-for="column in columnWrapCollection.mapColumns">
                        <template v-if="column.show">
                            <td v-if="!column.format" :key="column.name+index">
                                {{item[column.name]}}
                            </td>
                            <td v-if="column.name == 'operation' && column.format" 
                                v-html="column.format()" 
                                @click="operationCallback($event, item, column, index)" 
                                :key="column.name+index">
                            </td>
                            <td v-if="column.name != 'operation' && column.format"
                                v-html="column.format(item, column)"  
                                :key="column.name+index">
                            </td>
                        </template>
                        
                    </template>
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {ColumnCollection} from './utils';
export default{
    props:["columns", 'data', 'operationCallback'],
    data:function(){
        return {
            columnWrapCollection:[],
            dataWrapCollection:[]
        }
    },
    mounted(){
        this.columnWrapCollection = ColumnCollection.parse(this.columns);
    }
}
</script>

<style>
table{
    position:relative;
    width:100%;
    border-collapse: collapse;
    border:1px solid #c7c7c7;
    overflow:scroll;
}
table thead tr th{ 
    border:1px solid #c7c7c7; 
    background-color:#f2f2f2;
    height:38px;
    line-height:38px;
    vertical-align:middle;
    color:#666;
    position:relative;
}

table tbody tr{
    background-color:#fff;
    text-align:center;
    line-height:20px;
}

table tbody tr:nth-child(even){
    background-color:#f2f2f2;
}

table tbody tr td{
    padding:5px 10px;
    font-size:14px;
    word-wrap:break-word;
    word-break:break-all;
    color:#333;
    
}
table tbody tr:hover,
table tbody tr.lv-selected{
    background-color:#dee2e6;
}

table td button{
    outline:none;
    border:1px solid #c7c7c7;
    background-color:#fff;
    padding:2px 5px;
    margin:0 5px;
}

</style>