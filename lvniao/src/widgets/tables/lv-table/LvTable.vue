<template>
    <div class="lv-table-widget">
        <table  cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <template v-for="column in columnCollection.columnModels">
                        <th v-if="column.isChecked"
                            :rowspan="column.children.length == 0 && columnCollection.hasManyRows ? 2:1"
                            :colspan="column.children.length == 0 ? 1:column.children.length"
                            :style="{width:column.children.length == 0 ? columnsWidth:'auto'}"
                            :key="column.text">
                            <input type="checkbox"/>
                        </th>
                        <th v-if="!column.isChecked && column.show"
                            :rowspan="column.children.length == 0 && columnCollection.hasManyRows ? 2:1"
                            :colspan="column.children.length == 0 ? 1:column.children.length"
                            :key="column.text">
                            {{column.text}}
                        </th>
                    </template>
                </tr>
                <tr>
                    <template v-for="column in columnCollection.columnModels">
                        <template v-for="child in column.children">
                            <th :key="child.text">
                                {{child.text}}
                            </th>
                        </template>
                        
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in data" :key="d.id">
                    <template v-for="column in columnCollection.mapColumns">
                        <td v-if="column.isChecked" :key="column.name"><input type="checkbox"/></td>
                        <td v-if="!column.isChecked && column.isOperation" :key="column.name" v-html="column.format()"></td>
                        <td v-if="!column.isChecked && !column.isOperation && column.show" :key="column.name">{{d[column.name]}}</td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {ColumnCollection} from './options';
export default{
    name:'my-table',
    data:function(){
        return {
            columns:[
                {isChecked:true},
                {name:"id", show:false},
                {name:"name", text:"姓名"},
                {text:"个人信息", children:[
                    {name:"age", text:"年龄"},
                    {name:"gender", text:"性别"},
                ]},
                {text:"联系方式", children:[
                    {name:"email", text:"邮箱"},
                    {name:"phonenumber", text:"电话"},
                    {name:"postcode", text:"邮编"},
                ]},
                {name:"state", text:"状态"},
                {text:"籍贯", children:[
                    {name:"province", text:"省"},
                    {name:"city", text:"市"},
                    {name:"county", text:"区/县"},
                ]},
                {name:"operation", text:"操作", isOperation:true, format:function(){
                    return "<button>修改</button><button>删除</button>";
                }}
            ],
            data:[{
                    id:1,
                    name:"张三",
                    age:21,
                    gender:"男",
                    email:"zhangsan@163.com",
                    phonenumber:"87651234",
                    postcode:"738299",
                    state:"在职",
                    province:"陕西",
                    city:"西安",
                    county:"雁塔区",
                }, {
                    id:1,
                    name:"李四",
                    age:22,
                    gender:"女",
                    email:"lisi@162.com",
                    phonenumber:"32457281",
                    postcode:"728433",
                    state:"离职",
                    province:"陕西",
                    city:"渭南",
                    county:"临渭区",
                }
            ],
            columnsWidth:"",
            columnCollection:new ColumnCollection(),
        }
    },
    mounted(){
        this.columnCollection = ColumnCollection.parse(this.columns);
        for(var i; i<this.columns.length; i++){
            if(this.columns[i].columns){
                this.columns += this.columns[i].columns.length;
            } else {
                this.columns += 1;
            }
        }
        this.columnsWidth = "calc(100%/" + this.columns + ")";
    }
}
</script>

<style>
.lv-table-widget{
    position:relative;
    width:calc(100% - 2px);
    height:calc(100% - 2px);
    
}

.lv-table-widget table{
    position:relative;
    width:100%;
    border-collapse: collapse;
    border:1px solid #e6e6e6;
    overflow:scroll;
}


.lv-table-widget table thead tr th{ 
    border:1px solid #e6e6e6; 
    background-color:#f2f2f2;
    height:38px;
    line-height:38px;
    vertical-align:middle;
    color:#666;
}
.lv-table-widget table tbody tr{
    background-color:#fff;
    text-align:center;
    line-height:20px;
}

.lv-table-widget table tbody tr:nth-child(even){
    background-color:#f2f2f2;
}

.lv-table-widget table tbody tr td{
    padding:5px 10px;
    font-size:14px;
    word-wrap:break-word;
    word-break:break-all;
}

</style>