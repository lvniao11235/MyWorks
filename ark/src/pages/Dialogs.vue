<template>
    <div class="a-dialogs">
        <PageContainer :clazz="'a-card-fullpage'">
            <template>
                <CardHeader slot="header" :title="'对话框'" :hasBack="true"></CardHeader>
                <div slot="content">
                    <div class="a-listview">
                        <div class="a-listview-item" @click="alert">
                            <span class="a-listview-item-left-icon fa fa-exclamation"></span>
                            Alert对话框
                            <span class="a-listview-item-right-icon fa fa-angle-right"></span>
                        </div>
                        <div class="a-listview-item" @click="confirm">
                            <span class="a-listview-item-left-icon fa fa-question"></span>
                            Confirm对话框
                            <span class="a-listview-item-right-icon fa fa-angle-right"></span>
                        </div>
                        <div class="a-listview-item" @click="wait">
                            <span class="a-listview-item-left-icon fa fa-clock-o"></span>
                            Wait对话框
                            <span class="a-listview-item-right-icon fa fa-angle-right"></span>
                        </div>
                        <div class="a-listview-item" @click="datetime">
                            <span class="a-listview-item-left-icon fa fa-calendar"></span>
                            Datetime对话框
                            <span class="a-listview-item-value">{{strCurrentDate}}</span>
                            <span class="a-listview-item-right-icon fa fa-angle-right"></span>
                        </div>
                        <div class="a-listview-item" @click="form">
                            <span class="a-listview-item-left-icon fa fa-wpforms"></span>
                            Form对话框
                            <span class="a-listview-item-right-icon fa fa-angle-right"></span>
                        </div>
                    </div>
                </div>
            </template>
            
        </PageContainer>
    </div>
</template>

<script>
import PageContainer from '../widgets/cards/PageContainer';
import CardHeader from '../widgets/cards/CardHeader';
import moment from 'moment';
export default {
    components:{
        PageContainer, CardHeader
    },
    data:function(){
        return {
            currentDate:null
        }
    },
    computed:{
        strCurrentDate(){
            return this.currentDate != null ? 
                moment(this.currentDate).format("YYYY-MM-DD HH:mm:ss"):"";
        }
    },
    methods:{
        alert(){
            var _this = this;
            this.aDialog.alert("这是一个提示框", "提示", function(){
                _this.aDialog.close();
            });
        },
        confirm(){
            var _this = this;
            this.aDialog.confirm("是否确定进行该操作", "提示", function(){
                _this.aDialog.close();
            }, function(){
                _this.aDialog.close();
            });
        },
        wait(){
            var _this = this;
            this.aDialog.wait("数据加载中", 5000, function(){
                _this.aDialog.close();
            });
        },
        datetime(){
            var _this = this;
            this.aDialog.datetime(this.currentDate, "datetime", function(date){
                _this.currentDate = new Date(date);
                _this.aDialog.close();
            });
        },
        form(){
            var _this = this;
            this.aDialog.form({
                title:"登录",
                forms:[
                    {name:'user_name', label:'用户名', value:"123", type:'text', placeholder:'请输入用户名'},
                    {name:'user_pass', label:'密码', value:"456", type:'password', placeholder:'请输入密码'},
                    {name:'user_gender', label:'性别', type:"radiogroup", value:true, items:[
                        {text:'男', value:true},
                        {text:'女', value:false},
                    ]},
                    {name:'user_grade', label:'年级', value:3, type:'radiogroup', items:[
                        {text:'一年级', value:1},
                        {text:'二年级', value:2},
                        {text:'三年级', value:3},
                        {text:'四年级', value:4},
                        {text:'五年级', value:5},
                        {text:'六年级', value:6},
                    ]},
                    {name:'user_faviorate', label:'爱好', value:3, type:'checkgroup', items:[
                        {text:'篮球', value:1},
                        {text:'足球', value:2},
                        {text:'排球', value:3},
                        {text:'乒乓球', value:4},
                        {text:'羽毛球', value:5},
                    ]}
                ]
            }, function(data){
                _this.aDialog.alert(JSON.stringify(data), "数据", function(){
                    _this.aDialog.closeAll();
                })
            })
        },
    }
}
</script>

<style>


</style>

