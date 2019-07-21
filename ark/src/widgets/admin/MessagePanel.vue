<template>
    <div class="a-function-message-panel a-function-item-content-panel">
        <div class="a-function-panel-summary a-skin-border-primary">
            您有4封未读邮件
        </div>
        <div class="a-function-panel-content">
            <div class="a-message-none" v-if="items.length == 0">
                <img src="../../assets/images/no_data.svg"/>
                <div>当前没有未读邮件</div>
            </div>
            <div class="a-function-panel-list" v-if="items.length > 0">
                <div class="a-function-panel-item"
                    v-for="(item, index) in items" :key="item.id">
                    <div class="a-message-item-title">
                        {{item.title}}
                        <div class="fa fa-clock-o">五分钟</div>
                    </div>

                    <div class="a-message-item-content">{{item.content}}</div>
                    <div class="a-separator" v-if="index != (items.length - 1)"></div>
                </div>
            </div>
        </div>
        <div class="a-function-panel-btn a-skin-border-primary" @click="viewAll">
            查看所有邮件
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data:function(){
        return {
            items:[
                {id:1, title:'1111', content:'aaaaaaa'},
                {id:2, title:'2222', content:'bbbbbbb'},
                {id:3, title:'3333', content:'ccccccc'},
                {id:4, title:'4444', content:'ddddddd'},
            ]
        }
    },
    methods:{
        viewAll(){
            this.adminEventBus.$emit("openNewTab", this.mailUrl);
        }
    },
    computed:{
        ...mapState({
            mailUrl:state=>state.admin.mailUrl
        }),
    },
    inject:['adminEventBus'],
}
</script>

<style>
.a-function-panel-item .a-message-item-title,
.a-function-panel-item .a-message-item-content{
    padding:0px 5px;
}

.a-function-panel-item .a-message-item-title{
    font-size:14px;
    font-weight:bold;
}

.a-function-panel-item .a-message-item-title .fa{
    position:absolute;
    right:10px;
    top:5px;
    color:#c7c7c7;
    font-size:10px !important;
}

.a-function-message-panel .a-function-panel-item .a-message-item-content{
    font-size:10px;
}
</style>

