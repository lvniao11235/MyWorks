<template>
    <div class="a-function-notify-panel a-function-item-content-panel">
        <div class="a-function-panel-summary a-skin-border-primary">
            您有4个通知
        </div>
        <div class="a-function-panel-content">
            <div class="a-function-panel-none" v-if="items.length == 0">
                <img src="../../assets/images/no_data.svg"/>
                <div>当前没有未读通知</div>
            </div>
            <div class="a-function-panel-list" v-if="items.length > 0">
                <div class="a-function-panel-item"
                    v-for="(item, index) in items" :key="item.id">
                    <div class="a-notify-item-content">
                        <span :class="item.icon"></span>
                        <span>{{item.content}}</span>
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
                {id:1, icon:'fa fa-users', content:'今天有5个新成员加入'},
                {id:2, icon:'fa fa-exclamation-circle', content:'密码过期，请更改密码'},
            ]
        }
    },
    methods:{
        viewAll(){
            this.adminEventBus.$emit("openNewTab", this.notifyUrl);
        }
    },
    computed:{
        ...mapState({
            notifyUrl:state=>state.admin.notifyUrl
        }),
    },
    inject:['adminEventBus'],
}
</script>

<style>

.a-notify-item-content{
    padding:0px 5px;
    font-size:12px;
    color:#999;
}

.a-notify-item-content .fa{
    width:15px;
    text-align:center;
}
</style>

