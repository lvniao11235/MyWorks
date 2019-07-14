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
export default {
    components:{
        PageContainer, CardHeader
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
        }
    }
}
</script>

<style>


</style>

