<template>
    <div class="a-admin-page a-page-mail">
        <div style="padding:5px; width:calc(100% - 10px);">
            <Table :columns="columns" :data="data" :operationCallback="click"></Table>
        </div>
        
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
            data:[],
            dataFormTemplate:[
                    {name:'name', label:'姓名', type:'text', placeholder:'请输入姓名'},
                    {name:'age', label:'年龄', value:0, type:'spinbox'},
                    {name:'gender', label:'性别', type:"radiogroup", value:true, items:[
                        {text:'男', value:true},
                        {text:'女', value:false},
                    ]},
                    {name:'email', label:'邮箱', type:'text', placeholder:'请输入邮箱'},
                    {name:'phonenumber', label:'电话', type:'text', placeholder:'请输入电话'},
                    {name:'postcode', label:'邮编', type:'text', placeholder:'请输入邮编'},
                    {name:'state', label:'状态', type:"radiogroup", value:true, items:[
                        {text:'在职', value:true},
                        {text:'离职', value:false},
                    ]},
                    {name:'province', label:'省', value:[1, 2], multiply:true, 
                        type:'select', placeholder:'请选择省', items:[
                            {text:'陕西', value:1},
                            {text:'四川', value:2},
                            {text:'河南', value:3},
                            {text:'甘肃', value:4},
                            {text:'河北', value:5},
                            {text:'河南', value:6},
                        ]},
                    {name:'city', label:'市', value:[1, 2], multiply:true, 
                        type:'select', placeholder:'请选择市', items:[
                            {text:'西安', value:1},
                            {text:'渭南', value:2}
                        ]},
                    {name:'county', label:'区/县', value:[1, 2], multiply:true, 
                        type:'select', placeholder:'请选择区/县', items:[
                            {text:'雁塔区', value:1},
                            {text:'临渭区', value:2}
                        ]},
                ]
        }
    },
    methods:{
        click($event, row){
            if($event.target.innerHTML == "修改"){
                this.dataFormTemplate[0].value = row[this.dataFormTemplate[0].name];
                this.dataFormTemplate[1].value = row[this.dataFormTemplate[1].name];
                this.dataFormTemplate[2].value = row[this.dataFormTemplate[2].name];
                this.dataFormTemplate[3].value = row[this.dataFormTemplate[3].name];
                this.dataFormTemplate[4].value = row[this.dataFormTemplate[4].name];
                this.dataFormTemplate[5].value = row[this.dataFormTemplate[5].name];
                this.dataFormTemplate[6].value = row[this.dataFormTemplate[6].name];
                this.dataFormTemplate[7].value = [row[this.dataFormTemplate[7].name]];
                this.dataFormTemplate[8].value = [row[this.dataFormTemplate[8].name]];
                this.dataFormTemplate[9].value = [row[this.dataFormTemplate[9].name]];
                var _this = this;
                this.aDialog.form({
                        title:"修改",
                        forms:this.dataFormTemplate
                    }, function(data){
                        row.name = data.name;
                        row.age = data.age;
                        row.gender = data.gender;
                        _this.aDialog.close();
                    });
            } else if($event.target.innerHTML == "删除") {
                this.aDialog.alert("删除");
            }
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
            {name:"state", text:"状态", format:function(row, column){
                return row[column.name] ? "在职":"离职";
            }},
            {text:"籍贯", children:[
                {name:"province", text:"省", format:function(row, column){
                    var provinces = [{text:'陕西', value:1},
                        {text:'四川', value:2},
                        {text:'河南', value:3},
                        {text:'甘肃', value:4},
                        {text:'河北', value:5},
                        {text:'河南', value:6}];
                return provinces[row[column.name] - 1].text;
            }},
                {name:"city", text:"市", format:function(row, column){
                    var provinces = [{text:'西安', value:1},
                        {text:'渭南', value:2}];
                return provinces[row[column.name] - 1].text;
            }},
                {name:"county", text:"区/县", format:function(row, column){
                    var provinces = [{text:'雁塔区', value:1},
                        {text:'临渭区', value:2}];
                return provinces[row[column.name] - 1].text;
            }},
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
                state:true,
                province:1,
                city:1,
                county:1,
            }, {
                id:2,
                name:"李四2",
                age:30,
                gender:false,
                email:"lisi@162.com",
                phonenumber:"32457281",
                postcode:"728433",
                state:false,
                province:2,
                city:2,
                county:1,
            }, {
                id:3,
                name:"张三3",
                age:40,
                gender:true,
                email:"zhangsan@163.com",
                phonenumber:"87651234",
                postcode:"738299",
                state:true,
                province:3,
                city:1,
                county:2,
            }, {
                id:4,
                name:"李四4",
                age:52,
                gender:false,
                email:"lisi@162.com",
                phonenumber:"32457281",
                postcode:"728433",
                state:false,
                province:4,
                city:2,
                county:1,
            }
        ]
    }
}
</script>

<style>
</style>