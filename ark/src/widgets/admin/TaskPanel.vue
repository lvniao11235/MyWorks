<template>
    <div class="a-function-task-panel a-function-item-content-panel">
        <div class="a-function-panel-summary a-skin-border-primary">
            您有4个进行中的任务
        </div>
        <div class="a-function-panel-content">
            <div class="a-function-panel-none" v-if="items.length == 0">
                <img src="../../assets/images/no_data.svg"/>
                <div>当前没有未处理任务</div>
            </div>
            <div class="a-function-panel-list" v-if="items.length > 0">
                <div class="a-function-panel-item"
                    v-for="(item, index) in items" :key="item.id">
                    <div class="a-notify-item-content" :title="item.name">
                        <div class="a-progress">
                            <div class="a-progress-value a-skin-bg-primary" 
                                :style="{width:item.progress+'px'}">
                            </div>
                        </div>
                        <span>{{item.name}}</span>
                    </div>
                    <div class="a-separator" v-if="index != (items.length - 1)"></div>
                </div>
            </div>
        </div>
        <div class="a-function-panel-btn a-skin-border-primary" @click="viewAll">
            查看所有通知
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data:function(){
        return {
            items:[
                {id:1, name:'实现XX模块', progress:50},
                {id:2, name:'更改XX结构', progress:40},
            ]
        }
    },
    methods:{
        viewAll(){
            this.adminEventBus.$emit("openNewTab", this.taskUrl);
        }
    },
    computed:{
        ...mapState({
            taskUrl:state=>state.admin.taskUrl
        }),
    },
    inject:['adminEventBus'],
}
</script>

<style>

.a-task-item-content{
    padding:0px 5px;
    font-size:12px;
    color:#999;
}

.a-progress{
    float:left;
    width:100px;
    background-color:gray;
    height:10px;
    border-radius:5px;
    display:inline-block;
    margin-top:5px;
}

.a-progress-value{
    height:10px;
    border-radius:5px;
}

.a-notify-item-content{
    height:20px;
    line-height:20px;
    vertical-align:middle;
}
</style>

