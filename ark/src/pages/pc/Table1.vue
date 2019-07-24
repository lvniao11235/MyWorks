<template>
    <div class="a-admin-page a-page-mail">
        <Table :columns="columns" :data="data"></Table>
    </div>
</template>

<script>
import Table from '../../widgets/controls/table/Table';
export default{
    components:{
        Table
    },
    data:function(){
        return {
            columns:[],
            data:[]
        }
    },
    created(){
        this.columns = [
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
        ];
        this.data = [
            {
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
        ]
    }
}
</script>

<style>
</style>