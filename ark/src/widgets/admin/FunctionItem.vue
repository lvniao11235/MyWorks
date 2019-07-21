<template>
    <div class="a-functions-item a-skin-fg-primary" :class="option.icon" :title="option.text">
        <div class="a-function-item-panel" ref="panel" :style="{'margin-left':marginLeft}">
            <div class="a-function-item-panel-container a-skin-border-primary" title="">
                <component :is="which()"></component>
            </div>
        </div>
    </div>
</template>

<script>
import SkinPanel from './SkinPanel';
import MessagePanel from './MessagePanel';
import NotifyPanel from './NotifyPanel';
import TaskPanel from './TaskPanel';
import UserPanel from './UserPanel';
import SettingsPanel from './SettingsPanel';
export default{
    props:['option'],
    components:{
        SkinPanel, MessagePanel, NotifyPanel,
        TaskPanel, UserPanel, SettingsPanel
    },
    methods:{
        which(){
            switch(this.option.component){
                case 'skin': return SkinPanel;
                case 'message': return MessagePanel;
                case 'notify': return NotifyPanel;
                case 'task': return TaskPanel;
                case 'user': return UserPanel;
                case 'settings': return SettingsPanel;
            }
            return null;
        }
    },
    data:function(){
        return {
            marginLeft:0
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.marginLeft =  (this.$refs.panel.parentElement.clientWidth - 187 - 5) + "px";
        });
    },
}
</script>

<style>

.a-functions-item{
    width:30px;
    height:45px;
    text-align:center;
    font-size:25px !important;
    line-height:45px !important;
    vertical-align:middle;
    background-color:transparent;
}

.a-function-item-panel{
    display:none;
    position:relative;
    width:187px;
    background-color:transparent;
    z-index:10000;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
}

.a-functions-item:hover .a-function-item-panel{
    display:block;
}

.a-function-item-pane{
    background-color:transparent;
}

.a-function-item-panel{
   padding-top:5px;
}

.a-function-item-panel-container{
    width:calc(100% - 2px);
    height:100%;
    background-color:transparent;
    border:1px solid;
    color:#000;
    text-align:left;
    font-size:14px;
    font-weight:normal;
    line-height:normal !important;

}

.a-function-item-content-panel{
    background-color:#fff;
}

.a-function-panel-summary{
    border-bottom:1px solid;
    padding:2px 5px;
    word-wrap:break-word;
    word-break:break-all;
}

.a-function-panel-btn{
    border-top:1px solid;
    text-align:center;
}

.a-function-panel-list{
    max-height:100px;
    overflow:scroll;
}

.a-function-panel-none{
    text-align:center;
    color:#bfbfbf;
}
.a-function-panel-none img{
    width:50px;
    height:50px;
    display:block;
    margin:0 auto;
}

.a-function-panel-item{
    position:relative;
}



</style>