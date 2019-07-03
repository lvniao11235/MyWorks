<template>
    <div class="lv-table-widget">
        <table  cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <th v-if="hasIndex" style="padding:5px" :rowspan="columnCollection.hasManyRows ? 2:1"></th>
                    <template v-for="column in columnCollection.columnModels">
                        <th v-if="column.isChecked"
                            :rowspan="column.children.length == 0 && columnCollection.hasManyRows ? 2:1"
                            :colspan="column.children.length == 0 ? 1:column.children.length"
                            :key="column.text">
                            <input type="checkbox" v-model="bSelectAll" ref="selectall" @click.stop="selectAll"/>
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
                                <span v-if="child.sortable"
                                    class="lv-table-sort">
                                    <span class="fa fa-caret-up" @click.stop="sort(column, true)"></span>
                                    <span class="fa fa-caret-down" @click.stop="sort(column, false)"></span>
                                </span>
                            </th>
                        </template>
                        
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in modelWrapperCollection.modelCollection" 
                    :key="item.data.id" @click.stop="selectRow(item)"
                    :class="{'lv-selected':item.selected}">
                    <td v-if="hasIndex">{{index+1}}</td>
                    <template v-for="column in columnCollection.mapColumns">
                        <td v-if="column.isChecked" :key="column.name"><input type="checkbox" v-model="item.checked"/></td>
                        <td v-if="!column.isChecked && column.isOperation" :key="column.name" v-html="column.format()"></td>
                        <td v-if="!column.isChecked && !column.isOperation && column.show" :key="column.name">
                            <template v-if="column.controlType == 'text'">{{item.data[column.name]}}</template>
                            <template v-else>
                                <ColumnControl :controlType="column.controlType" :value="item.data[column.name]"></ColumnControl>
                            </template>
                        </td>
                    </template>
                </tr>
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    </div>
</template>

<script>
import {ColumnCollection, ModelWrapperCollection} from './options';
import ColumnControl from './ColumnControl';
export default{
    name:'my-table',
    components:{
        ColumnControl
    },
    data:function(){
        return {
            columns:[
                {isChecked:true},
                {name:"id", show:false},
                {name:"name", text:"姓名"},
                {text:"个人信息", children:[
                    {name:"age", text:"年龄", controlType:"progress", sortable:true},
                    {name:"gender", text:"性别", controlType:"checkbox"},
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
                    name:"张三1",
                    age:21,
                    gender:true,
                    email:"zhangsan@163.com",
                    phonenumber:"87651234",
                    postcode:"738299",
                    state:"在职",
                    province:"陕西",
                    city:"西安",
                    county:"雁塔区",
                }, {
                    id:2,
                    name:"李四2",
                    age:30,
                    gender:false,
                    email:"lisi@162.com",
                    phonenumber:"32457281",
                    postcode:"728433",
                    state:"离职",
                    province:"陕西",
                    city:"渭南",
                    county:"临渭区",
                }, {
                    id:3,
                    name:"张三3",
                    age:40,
                    gender:true,
                    email:"zhangsan@163.com",
                    phonenumber:"87651234",
                    postcode:"738299",
                    state:"在职",
                    province:"陕西",
                    city:"西安",
                    county:"雁塔区",
                }, {
                    id:4,
                    name:"李四4",
                    age:52,
                    gender:false,
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
            hasIndex:true,
            modelWrapperCollection:new ModelWrapperCollection(),
            bSelectAll:false
        }
    },
    methods:{
        selectAll(){
            for(var i in this.modelWrapperCollection.modelCollection){
                this.modelWrapperCollection.modelCollection[i].checked = this.$refs.selectall[0].checked;
            }
        },
        selectRow(item){
            this.modelWrapperCollection.modelCollection.forEach(x=>x.selected = false);
            item.selected = true;
        },
        sort(column, flag){
            this.modelWrapperCollection.modelCollection.sort(function(e1, e2){
                return e1.data[column.name] - e2.data[column.name];
            });
            if(!flag){
                this.modelWrapperCollection.modelCollection.reverse();
            }
        }
    },
    mounted(){
        this.columnCollection = ColumnCollection.parse(this.columns);
        this.modelWrapperCollection = ModelWrapperCollection.parse(this.data);
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
    position:relative;
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
    color:#333;
    
}
.lv-table-widget table tbody tr:hover,
.lv-table-widget table tbody tr.lv-selected{
    background-color:#dee2e6;
}

.lv-table-sort{
    position:absolute;
    right:0px;
}
.lv-table-sort span{
    height:20px;
    display:block !important;
}

.lv-table-sort .fa-caret-up{

}
.lv-table-sort .fa-caret-down{
}
</style>